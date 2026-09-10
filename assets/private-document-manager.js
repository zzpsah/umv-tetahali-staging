(function () {
  'use strict';
  const config = window.UMV_DOCUMENT_ARCHIVE_CONFIG;
  const client = supabase.createClient(config.supabaseUrl, config.publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true }
  });
  const root = document.querySelector('[data-private-document-manager]');
  const rows = root.querySelector('[data-role="rows"]');
  const message = root.querySelector('[data-role="message"]');
  const search = root.querySelector('[data-role="search"]');
  const statusFilter = root.querySelector('[data-role="status-filter"]');
  const aiFilter = root.querySelector('[data-role="ai-filter"]');
  let records = [];

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character];
    });
  }
  function safeDriveUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && url.hostname === 'drive.google.com' ? url.href : '';
    } catch (error) { return ''; }
  }
  function fileSize(bytes) {
    if (!Number.isFinite(Number(bytes))) return '—';
    const size = Number(bytes);
    if (size < 1024) return size + ' B';
    if (size < 1048576) return (size / 1024).toFixed(1) + ' KB';
    return (size / 1048576).toFixed(2) + ' MB';
  }
  function render() {
    const term = search.value.trim().toLowerCase();
    const filtered = records.filter(function (record) {
      const text = [record.original_filename, record.display_filename, record.source_message_id].join(' ').toLowerCase();
      return (!term || text.includes(term)) &&
        (!statusFilter.value || record.processing_status === statusFilter.value) &&
        (!aiFilter.value || record.ai_suggestion_status === aiFilter.value);
    });
    message.textContent = filtered.length + ' document(s) shown. Live updates enabled.';
    rows.innerHTML = filtered.map(function (record) {
      const drive = safeDriveUrl(record.private_drive_url);
      const busy = ['Requested', 'Processing'].includes(record.ai_suggestion_status);
      const action = busy
        ? '<button disabled class="rounded-lg bg-slate-200 px-3 py-2 text-xs font-bold">' + escapeHtml(record.ai_suggestion_status) + '</button>'
        : '<button data-review-id="' + escapeHtml(record.id) + '" class="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-bold text-white">Run AI Review</button>';
      return '<tr class="border-b align-top"><td class="p-3 font-semibold">' + escapeHtml(record.display_filename || record.original_filename) + '</td>' +
        '<td class="p-3">' + fileSize(record.file_size) + '</td><td class="p-3">' + escapeHtml(record.source_message_id || '—') + '</td>' +
        '<td class="p-3">' + escapeHtml(record.processing_status) + '</td><td class="p-3">' + escapeHtml(record.ai_suggestion_status) + '</td>' +
        '<td class="p-3">' + (drive ? '<a class="font-bold text-blue-700" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(drive) + '">View PDF ↗</a>' : '—') + '</td>' +
        '<td class="p-3">' + escapeHtml(new Date(record.created_at).toLocaleString()) + '</td><td class="p-3">' + action + '</td></tr>';
    }).join('');
  }
  async function load() {
    message.textContent = 'Loading documents…';
    const result = await client.from('documents').select('id,original_filename,display_filename,file_size,source_message_id,processing_status,ai_suggestion_status,private_drive_url,created_at').order('created_at', {ascending:false}).limit(500);
    if (result.error) throw result.error;
    records = result.data || [];
    render();
  }
  async function requestReview(documentId, button) {
    button.disabled = true;
    button.textContent = 'Queuing…';
    const result = await client.rpc('request_document_ai_review', {requested_document_id: documentId});
    if (result.error) {
      button.disabled = false;
      button.textContent = 'Run AI Review';
      message.textContent = 'Review request failed: ' + result.error.message;
      return;
    }
    message.textContent = 'AI/OCR review queued.';
    await load();
  }
  rows.addEventListener('click', function (event) {
    const button = event.target.closest('[data-review-id]');
    if (button) requestReview(button.dataset.reviewId, button);
  });
  [search, statusFilter, aiFilter].forEach(function (control) { control.addEventListener('input', render); });
  root.querySelector('[data-role="refresh"]').addEventListener('click', load);
  document.getElementById('logout').addEventListener('click', async function () { await client.auth.signOut(); location.href='admin-login.html'; });

  (async function start() {
    const auth = await client.auth.getUser();
    if (auth.error || !auth.data.user) { location.href='admin-login.html'; return; }
    document.getElementById('loading').classList.add('hidden');
    root.classList.remove('hidden');
    try { await load(); } catch (error) { message.textContent = 'Documents could not load: ' + error.message; }
    client.channel('private-document-manager').on('postgres_changes', {event:'*',schema:'public',table:'documents'}, load).subscribe();
  }());
}());
