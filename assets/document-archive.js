(function () {
  'use strict';

  function archiveEndpoint(config) {
    const fields = [
      'id', 'reference_number', 'issue_date', 'issuing_authority', 'subject',
      'short_description', 'category_key', 'category', 'category_aliases',
      'priority', 'required_action', 'deadline', 'public_file_url',
      'published_at', 'search_text'
    ].join(',');
    return config.supabaseUrl.replace(/\/$/, '') +
      '/rest/v1/approved_public_documents?select=' + fields +
      '&order=published_at.desc&limit=' + encodeURIComponent(config.recordLimit || 1000);
  }

  function categoryEndpoint(config) {
    return config.supabaseUrl.replace(/\/$/, '') +
      '/rest/v1/document_category_definitions' +
      '?select=category_key,display_name,aliases,sort_order' +
      '&active=eq.true&valid_to=is.null&order=sort_order.asc';
  }

  async function fetchJson(url, config) {
    const response = await fetch(url, {
      headers: {
        apikey: config.publishableKey,
        Authorization: 'Bearer ' + config.publishableKey,
        Accept: 'application/json'
      }
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  }

  function normalize(value) {
    return String(value || '').toLocaleLowerCase('hi-IN').replace(/\s+/g, ' ').trim();
  }

  function text(value) {
    return value === null || value === undefined || value === '' ? '—' : String(value);
  }

  function escapeHtml(value) {
    return text(value).replace(/[&<>'"]/g, function (character) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character];
    });
  }

  function safeUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : '';
    } catch (error) {
      return '';
    }
  }

  function find(root, role) {
    return root.querySelector('[data-archive-role="' + role + '"]');
  }

  function init(root, config) {
    if (!root || !config || !config.supabaseUrl || !config.publishableKey) return;
    const controls = {
      search: find(root, 'search'),
      category: find(root, 'category'),
      priority: find(root, 'priority'),
      count: find(root, 'count'),
      status: find(root, 'status'),
      tableWrap: find(root, 'table-wrap'),
      rows: find(root, 'rows'),
      clear: find(root, 'clear')
    };
    const state = {records: [], categories: []};

    function render() {
      const terms = normalize(controls.search.value).split(' ').filter(Boolean);
      const categoryKey = controls.category.value;
      const priority = controls.priority.value;
      const filtered = state.records.filter(function (record) {
        const haystack = normalize(record.search_text || [
          record.subject, record.short_description, record.issuing_authority,
          record.reference_number, record.required_action, record.category,
          (record.category_aliases || []).join(' ')
        ].join(' '));
        const searchMatches = terms.every(function (term) { return haystack.includes(term); });
        return searchMatches && (!categoryKey || record.category_key === categoryKey) &&
          (!priority || record.priority === priority);
      });

      controls.count.textContent = filtered.length + ' अनुमोदित रिकॉर्ड';
      controls.rows.innerHTML = filtered.map(function (record, index) {
        const url = safeUrl(record.public_file_url);
        const file = url
          ? '<a class="file" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(url) + '">Open file ↗</a>'
          : '<span class="unavailable">Not publicly available</span>';
        return '<tr><td data-label="Serial">' + (index + 1) + '</td>' +
          '<td data-label="Date">' + escapeHtml(record.issue_date) + '</td>' +
          '<td data-label="Category">' + escapeHtml(record.category) + '</td>' +
          '<td data-label="Priority"><span class="badge ' + escapeHtml(record.priority) + '">' + escapeHtml(record.priority) + '</span></td>' +
          '<td data-label="Subject" class="subject">' + escapeHtml(record.subject) +
          '<span class="desc">' + escapeHtml(record.short_description) + '</span>' +
          '<span class="desc">Issued by: ' + escapeHtml(record.issuing_authority) + '</span></td>' +
          '<td data-label="Action">' + escapeHtml(record.required_action) + '</td>' +
          '<td data-label="Deadline">' + escapeHtml(record.deadline) + '</td>' +
          '<td data-label="Document">' + file + '</td></tr>';
      }).join('');
      controls.status.hidden = filtered.length > 0;
      controls.status.textContent = filtered.length ? '' : 'कोई मेल खाता अनुमोदित रिकॉर्ड नहीं मिला।';
      controls.tableWrap.hidden = filtered.length === 0;
    }

    async function load() {
      try {
        const results = await Promise.all([
          fetchJson(archiveEndpoint(config), config),
          fetchJson(categoryEndpoint(config), config)
        ]);
        state.records = results[0] || [];
        state.categories = results[1] || [];
        state.categories.forEach(function (category) {
          const option = document.createElement('option');
          option.value = category.category_key;
          option.textContent = category.display_name;
          controls.category.appendChild(option);
        });
        render();
      } catch (error) {
        controls.count.textContent = 'लोड नहीं हुआ';
        controls.status.hidden = false;
        controls.status.className = 'error';
        controls.status.textContent = 'अभिलेख अभी लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।';
        console.error('Document archive load failed:', error);
      }
    }

    [controls.search, controls.category, controls.priority].forEach(function (control) {
      control.addEventListener('input', render);
    });
    controls.clear.addEventListener('click', function () {
      controls.search.value = '';
      controls.category.value = '';
      controls.priority.value = '';
      render();
      controls.search.focus();
    });
    load();
  }

  window.UMVDocumentArchive = Object.freeze({init: init});
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-document-archive]').forEach(function (root) {
      init(root, window.UMV_DOCUMENT_ARCHIVE_CONFIG);
    });
  });
}());
