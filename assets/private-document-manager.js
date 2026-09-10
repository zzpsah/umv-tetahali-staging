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
  const metric = function (name) { return root.querySelector('[data-metric="' + name + '"]'); };
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
  function badge(value, kind) {
    const text = String(value || 'Unknown');
    const palette = kind === 'ai'
      ? ({'Completed':'bg-emerald-50 text-emerald-700 border-emerald-200','Processing':'bg-blue-50 text-blue-700 border-blue-200','Requested':'bg-indigo-50 text-indigo-700 border-indigo-200','Failed':'bg-red-50 text-red-700 border-red-200','Not Requested':'bg-slate-100 text-slate-600 border-slate-200'})
      : ({'Needs Manual Review':'bg-amber-50 text-amber-800 border-amber-200','Queued':'bg-indigo-50 text-indigo-700 border-indigo-200','Processing':'bg-blue-50 text-blue-700 border-blue-200','Reviewed':'bg-emerald-50 text-emerald-700 border-emerald-200','Completed':'bg-emerald-50 text-emerald-700 border-emerald-200','Processing Failed':'bg-red-50 text-red-700 border-red-200'});
    const cls = palette[text] || 'bg-slate-100 text-slate-600 border-slate-200';
    return '<span class="inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-bold ' + cls + '">' + escapeHtml(text) + '</span>';
  }
  function updateMetrics() {
    metric('total').textContent = records.length;
    metric('review').textContent = records.filter(r => r.processing_status === 'Needs Manual Review').length;
    metric('processing').textContent = records.filter(r => ['Requested','Processing'].includes(r.ai_suggestion_status)).length;
    metric('completed').textContent = records.filter(r => r.ai_suggestion_status === 'Completed').length;
    metric('failed').textContent = records.filter(r => ['Failed','Processing Failed'].includes(r.ai_suggestion_status) || r.processing_status === 'Processing Failed').length;
  }
  function render() {
    const term = search.value.trim().toLowerCase();
    const filtered = records.filter(function (record) {
      const text = [record.original_filename, record.display_filename, record.source_message_id].join(' ').toLowerCase();
      return (!term || text.includes(term)) &&
        (!statusFilter.value || record.processing_status === statusFilter.value) &&
        (!aiFilter.value || record.ai_suggestion_status === aiFilter.value);
    });
    message.textContent = filtered.length + ' document(s) shown' + (filtered.length !== records.length ? ' • filtered from ' + records.length : '') + '. Live updates enabled.';
    if (!filtered.length) {
      rows.innerHTML = '<tr><td colspan="8" class="p-10 text-center"><div class="text-3xl">📭</div><div class="mt-2 font-bold text-slate-700">No documents match the current filters</div><div class="mt-1 text-xs text-slate-500">Try clearing search or selecting All statuses.</div></td></tr>';
      return;
    }
    rows.innerHTML = filtered.map(function (record) {
      const drive = safeDriveUrl(record.private_drive_url);
      const busy = ['Requested', 'Processing'].includes(record.ai_suggestion_status);
      const action = busy
        ? '<button disabled class="rounded-lg bg-slate-100 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500">' + escapeHtml(record.ai_suggestion_status) + '</button>'
        : '<button data-review-id="' + escapeHtml(record.id) + '" class="rounded-lg bg-slate-950 px-3 py-2 text-xs font-bold text-white hover:bg-indigo-700">Run AI Review</button>';
      const source = record.source_message_id ? '<span class="font-mono text-xs text-slate-600">TG #' + escapeHtml(record.source_message_id) + '</span>' : '<span class="text-slate-400">Direct Drive</span>';
      return '<tr class="border-b border-slate-100 align-top hover:bg-slate-50/80">' +
        '<td class="px-4 py-4"><div class="max-w-[300px] truncate font-bold text-slate-900" title="' + escapeHtml(record.display_filename || record.original_filename) + '">' + escapeHtml(record.display_filename || record.original_filename) + '</div><div class="mt-1 text-[11px] text-slate-400">Original: ' + escapeHtml(record.original_filename || '—') + '</div></td>' +
        '<td class="px-4 py-4 whitespace-nowrap text-slate-600">' + fileSize(record.file_size) + '</td>' +
        '<td class="px-4 py-4">' + source + '</td>' +
        '<td class="px-4 py-4">' + badge(record.processing_status, 'db') + '</td>' +
        '<td class="px-4 py-4">' + badge(record.ai_suggestion_status, 'ai') + '</td>' +
        '<td class="px-4 py-4">' + (drive ? '<a class="inline-flex rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100" target="_blank" rel="noopener noreferrer" href="' + escapeHtml(drive) + '">View PDF ↗</a>' : '<span class="text-slate-400">—</span>') + '</td>' +
        '<td class="px-4 py-4 whitespace-nowrap text-xs text-slate-500">' + escapeHtml(new Date(record.created_at).toLocaleString()) + '</td>' +
        '<td class="px-4 py-4">' + action + '</td></tr>';
    }).join('');
  }
  async function load() {
    message.textContent = 'Loading documents…';
    const result = await client.from('documents').select('id,original_filename,display_filename,file_size,source_message_id,processing_status,ai_suggestion_status,private_drive_url,created_at').order('created_at', {ascending:false}).limit(500);
    if (result.error) throw result.error;
    records = result.data || [];
    updateMetrics();
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
  [search, statusFilter, aiFilter].forEach(function (control) { control.addEventListener('input', render); control.addEventListener('change', render); });
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
