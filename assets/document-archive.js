(function () {
  'use strict';

  function apiBase(config) {
    return config.supabaseUrl.replace(/\/$/, '');
  }

  function archiveEndpoint(config) {
    const fields = [
      'id','reference_number','issue_date','issuing_authority','subject','short_description',
      'category_key','category','category_aliases','priority','required_action','deadline',
      'public_file_url','published_at','public_revision','listing_status','review_path','search_text'
    ].join(',');
    return apiBase(config) + '/rest/v1/approved_public_documents?select=' + fields +
      '&order=issue_date.desc.nullslast,published_at.desc&limit=' + encodeURIComponent(config.recordLimit || 1000);
  }

  async function fetchJson(url, config, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs || 12000);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          apikey: config.publishableKey,
          Authorization: 'Bearer ' + config.publishableKey,
          Accept: 'application/json'
        },
        cache: 'no-store',
        signal: controller.signal
      });
      const body = await response.text();
      if (!response.ok) throw new Error('HTTP ' + response.status + (body ? ': ' + body.slice(0, 240) : ''));
      return body ? JSON.parse(body) : [];
    } finally {
      clearTimeout(timer);
    }
  }

  function normalize(value) {
    return String(value || '').toLocaleLowerCase('hi-IN').replace(/\s+/g, ' ').trim();
  }

  function text(value) {
    return value === null || value === undefined || value === '' ? '—' : String(value);
  }

  function escapeHtml(value) {
    return text(value).replace(/[&<>'"]/g, function (c) {
      return ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[c];
    });
  }

  function safeUrl(value) {
    try {
      const u = new URL(value, window.location.href);
      return u.protocol === 'https:' ? u.href : '';
    } catch (e) {
      return '';
    }
  }

  function formatDate(value) {
    if (!value) return '—';
    const s = String(value).trim();
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return m[3] + '/' + m[2] + '/' + m[1];
    return s;
  }

  function letterType(record) {
    const raw = normalize([
      record.category_key,
      record.category,
      record.subject,
      record.short_description,
      record.search_text
    ].join(' '));

    if (/allotment|आवंटन|विमुक्ति|स्वीकृति/.test(raw)) return 'ALLOTMENT';
    if (/circular|परिपत्र|सर्कुलर/.test(raw)) return 'Circular';
    if (/order|आदेश|ज्ञाप|स्थानांतरण|निलंबन|विभागीय कार्रवाई/.test(raw)) return 'Order';
    if (/notice|सूचना|विज्ञप्ति/.test(raw)) return 'Notice';
    if (/letter|पत्र|पत्रांक|ज्ञापन/.test(raw)) return 'Letter';

    const value = record.category || record.category_key;
    return value ? String(value) : 'Letter';
  }

  function subject(record) {
    // Subject is the primary public field. Do not expose the generated
    // "Document issued by ..." description when a real subject is present.
    const value = String(record.subject || '').trim();
    if (value && !/^official\s+(school\s+)?document$/i.test(value) && !/^official\s+letter/i.test(value)) {
      return value;
    }

    // Temporary fallback for older records until they are reprocessed.
    const fallback = String(record.detailed_summary || record.short_description || '').trim();
    return fallback || value || '—';
  }

  function init(root, config) {
    if (!root || !config || !config.supabaseUrl || !config.publishableKey) return;

    const controls = {
      search: root.querySelector('[data-archive-role="search"]'),
      pageSize: root.querySelector('[data-archive-role="page-size"]'),
      count: root.querySelector('[data-archive-role="count"]'),
      status: root.querySelector('[data-archive-role="status"]'),
      tableWrap: root.querySelector('[data-archive-role="table-wrap"]'),
      rows: root.querySelector('[data-archive-role="rows"]'),
      prev: root.querySelector('[data-archive-role="prev"]'),
      next: root.querySelector('[data-archive-role="next"]')
    };

    const state = { records: [], page: 1, pageSize: 10 };

    function filteredRecords() {
      const terms = normalize(controls.search.value).split(' ').filter(Boolean);
      return state.records.filter(function (r) {
        const hay = normalize([
          r.subject, r.short_description, r.issuing_authority,
          r.reference_number, r.required_action, r.category,
          r.category_key, (r.category_aliases || []).join(' '), r.search_text
        ].join(' '));
        return terms.every(function (t) { return hay.includes(t); });
      });
    }

    function render() {
      const filtered = filteredRecords();
      const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
      if (state.page > totalPages) state.page = totalPages;

      const start = (state.page - 1) * state.pageSize;
      const pageRows = filtered.slice(start, start + state.pageSize);

      controls.count.textContent = filtered.length + ' records';
      controls.rows.innerHTML = pageRows.length ? pageRows.map(function (r, index) {
        const url = safeUrl(r.public_file_url);
        const reviewUrl = r.review_path ? safeUrl(r.review_path) : '';
        const serial = start + index + 1;
        const type = letterType(r);
        const date = formatDate(r.issue_date);
        const title = subject(r);

        let action = '';
        if (r.listing_status === 'Processing Failed') {
          action = reviewUrl
            ? '<a class="download-icon review" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(reviewUrl) + '" title="Review document" aria-label="Review document">↗</a>'
            : '<span class="download-unavailable" title="Review link unavailable">—</span>';
        } else if (url) {
          action = '<a class="download-icon" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(url) + '" title="Download document" aria-label="Download document">⇩</a>';
        } else {
          action = '<span class="download-unavailable">—</span>';
        }

        return '<tr>' +
          '<td data-label="Sr.No.">' + serial + '</td>' +
          '<td data-label="Letter Type" class="letter-type">' + escapeHtml(type) + '</td>' +
          '<td data-label="Date" class="date-cell">' + escapeHtml(date) + '</td>' +
          '<td data-label="Subject" class="subject-cell">' + escapeHtml(title) + '</td>' +
          '<td data-label="Download" class="download-cell">' + action + '</td>' +
          '</tr>';
      }).join('') : '<tr><td colspan="5" class="empty">अभी कोई सार्वजनिक दस्तावेज़ उपलब्ध नहीं है।</td></tr>';

      controls.status.hidden = filtered.length > 0;
      controls.status.textContent = filtered.length > 0
        ? ''
        : (state.records.length ? 'कोई मेल खाता रिकॉर्ड नहीं मिला।' : 'अभी कोई सार्वजनिक दस्तावेज़ प्रकाशित नहीं है।');
      controls.tableWrap.hidden = false;
      controls.prev.disabled = state.page <= 1;
      controls.next.disabled = state.page >= totalPages;
    }

    async function load() {
      controls.status.hidden = false;
      controls.status.className = 'state';
      controls.status.textContent = 'सार्वजनिक दस्तावेज़ लोड हो रहे हैं…';
      try {
        state.records = await fetchJson(archiveEndpoint(config), config, 12000) || [];
        render();
      } catch (error) {
        controls.count.textContent = 'लोड नहीं हुआ';
        controls.tableWrap.hidden = true;
        controls.status.hidden = false;
        controls.status.className = 'state error';
        controls.status.textContent = 'अभिलेख लोड नहीं हो सका। Supabase API या नेटवर्क कनेक्शन जाँचें।';
        console.error('UMV public archive load failed:', error);
      }
    }

    controls.search.addEventListener('input', function () {
      state.page = 1;
      render();
    });

    controls.pageSize.addEventListener('change', function () {
      state.pageSize = Number(controls.pageSize.value) || 10;
      state.page = 1;
      render();
    });

    controls.prev.addEventListener('click', function () {
      if (state.page > 1) {
        state.page--;
        render();
      }
    });

    controls.next.addEventListener('click', function () {
      const totalPages = Math.max(1, Math.ceil(filteredRecords().length / state.pageSize));
      if (state.page < totalPages) {
        state.page++;
        render();
      }
    });

    load();
  }

  window.UMVDocumentArchive = Object.freeze({ init: init });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-document-archive]').forEach(function (root) {
      init(root, window.UMV_DOCUMENT_ARCHIVE_CONFIG);
    });
  });
}());
