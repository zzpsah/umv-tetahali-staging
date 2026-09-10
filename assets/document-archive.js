(function () {
  'use strict';

  function apiBase(config) {
    return config.supabaseUrl.replace(/\/$/, '');
  }

  function archiveEndpoint(config) {
    const fields = ['id','reference_number','issue_date','issuing_authority','subject','short_description','category_key','category','category_aliases','priority','required_action','deadline','public_file_url','published_at','public_revision','search_text'].join(',');
    return apiBase(config) + '/rest/v1/approved_public_documents?select=' + fields + '&order=published_at.desc&limit=' + encodeURIComponent(config.recordLimit || 1000);
  }

  function categoryEndpoint(config) {
    return apiBase(config) + '/rest/v1/document_category_definitions?select=category_key,display_name,aliases,sort_order&active=eq.true&valid_to=is.null&order=sort_order.asc';
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
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + (body ? ': ' + body.slice(0, 240) : ''));
      }
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
    return text(value).replace(/[&<>'"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[c]));
  }

  function safeUrl(value) {
    try {
      const u = new URL(value);
      return u.protocol === 'https:' ? u.href : '';
    } catch (e) {
      return '';
    }
  }

  function find(root, role) {
    return root.querySelector('[data-archive-role="' + role + '"]');
  }

  function init(root, config) {
    if (!root || !config || !config.supabaseUrl || !config.publishableKey) return;

    const controls = {
      search: find(root, 'search'), category: find(root, 'category'), priority: find(root, 'priority'),
      count: find(root, 'count'), status: find(root, 'status'), tableWrap: find(root, 'table-wrap'),
      rows: find(root, 'rows'), clear: find(root, 'clear'), pagination: find(root, 'pagination'),
      pageInfo: find(root, 'page-info'), prev: find(root, 'prev'), next: find(root, 'next')
    };

    const state = { records: [], categories: [], page: 1, pageSize: 15 };

    function filteredRecords() {
      const terms = normalize(controls.search.value).split(' ').filter(Boolean);
      const key = controls.category.value;
      const priority = controls.priority.value;
      return state.records.filter(r => {
        const hay = normalize(r.search_text || [r.subject, r.short_description, r.issuing_authority, r.reference_number, r.required_action, r.category, (r.category_aliases || []).join(' ')].join(' '));
        return terms.every(t => hay.includes(t)) && (!key || r.category_key === key) && (!priority || r.priority === priority);
      });
    }

    function render() {
      const filtered = filteredRecords();
      const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
      if (state.page > totalPages) state.page = totalPages;
      const start = (state.page - 1) * state.pageSize;
      const pageRows = filtered.slice(start, start + state.pageSize);

      controls.count.textContent = filtered.length + ' सार्वजनिक रिकॉर्ड';
      controls.rows.innerHTML = pageRows.length
        ? pageRows.map(r => {
            const url = safeUrl(r.public_file_url);
            const actions = url
              ? '<div class="actions"><a class="file" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(url) + '">देखें ↗</a><a class="file" href="' + escapeHtml(url) + '" download>डाउनलोड PDF</a></div>'
              : '<span class="unavailable">PDF उपलब्ध नहीं</span>';
            return '<tr><td data-label="दिनांक">' + escapeHtml(r.issue_date) + '</td><td data-label="जारी करने वाला कार्यालय">' + escapeHtml(r.issuing_authority) + '</td><td data-label="विवरण" class="subject">' + escapeHtml(r.subject || '—') + '<span class="desc">' + escapeHtml(r.short_description) + '</span></td><td data-label="संदर्भ संख्या">' + escapeHtml(r.reference_number) + '</td><td data-label="PDF">' + actions + '</td></tr>';
          }).join('')
        : '<tr><td colspan="5" class="empty">अभी कोई सार्वजनिक दस्तावेज़ उपलब्ध नहीं है।</td></tr>';

      controls.status.hidden = filtered.length > 0;
      controls.status.textContent = filtered.length > 0 ? '' : (state.records.length ? 'कोई मेल खाता सार्वजनिक रिकॉर्ड नहीं मिला।' : 'अभी कोई सार्वजनिक दस्तावेज़ प्रकाशित नहीं है।');
      controls.tableWrap.hidden = false;
      controls.pagination.hidden = filtered.length === 0;
      controls.pageInfo.textContent = 'पृष्ठ ' + state.page + ' / ' + totalPages;
      controls.prev.disabled = state.page <= 1;
      controls.next.disabled = state.page >= totalPages;
    }

    async function load() {
      controls.status.hidden = false;
      controls.status.className = 'state';
      controls.status.textContent = 'सार्वजनिक दस्तावेज़ लोड हो रहे हैं…';
      try {
        // The archive data must not depend on the optional category catalogue.
        // If categories fail, documents still render and the category filter simply stays at “सभी”.
        state.records = await fetchJson(archiveEndpoint(config), config, 12000) || [];
        try {
          state.categories = await fetchJson(categoryEndpoint(config), config, 8000) || [];
        } catch (categoryError) {
          state.categories = [];
          console.warn('Category catalogue unavailable; continuing with documents.', categoryError);
        }

        state.categories.forEach(c => {
          const o = document.createElement('option');
          o.value = c.category_key;
          o.textContent = c.display_name;
          controls.category.appendChild(o);
        });
        render();
      } catch (error) {
        controls.count.textContent = 'लोड नहीं हुआ';
        controls.tableWrap.hidden = true;
        controls.pagination.hidden = true;
        controls.status.hidden = false;
        controls.status.className = 'state error';
        controls.status.textContent = 'अभिलेख लोड नहीं हो सका। Supabase API या नेटवर्क कनेक्शन जाँचें।';
        console.error('UMV public archive load failed:', error);
      }
    }

    [controls.search, controls.category, controls.priority].forEach(c => c.addEventListener('input', () => { state.page = 1; render(); }));
    controls.clear.addEventListener('click', () => {
      controls.search.value = '';
      controls.category.value = '';
      controls.priority.value = '';
      state.page = 1;
      render();
      controls.search.focus();
    });
    controls.prev.addEventListener('click', () => { if (state.page > 1) { state.page--; render(); } });
    controls.next.addEventListener('click', () => { state.page++; render(); });
    load();
  }

  window.UMVDocumentArchive = Object.freeze({ init: init });
  document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('[data-document-archive]').forEach(root => init(root, window.UMV_DOCUMENT_ARCHIVE_CONFIG)));
}());
