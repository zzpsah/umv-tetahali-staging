(function () {
  'use strict';
  function archiveEndpoint(config) {
    const fields = ['id','reference_number','issue_date','issuing_authority','subject','short_description','category_key','category','category_aliases','priority','required_action','deadline','public_file_url','published_at','public_revision','search_text'].join(',');
    return config.supabaseUrl.replace(/\/$/, '') + '/rest/v1/approved_public_documents?select=' + fields + '&order=published_at.desc&limit=' + encodeURIComponent(config.recordLimit || 1000);
  }
  function categoryEndpoint(config) { return config.supabaseUrl.replace(/\/$/, '') + '/rest/v1/document_category_definitions?select=category_key,display_name,aliases,sort_order&active=eq.true&valid_to=is.null&order=sort_order.asc'; }
  async function fetchJson(url, config) {
    const response = await fetch(url, {headers:{apikey:config.publishableKey,Authorization:'Bearer '+config.publishableKey,Accept:'application/json'}});
    if (!response.ok) throw new Error('HTTP '+response.status);
    return response.json();
  }
  function normalize(value){return String(value||'').toLocaleLowerCase('hi-IN').replace(/\s+/g,' ').trim();}
  function text(value){return value===null||value===undefined||value===''?'—':String(value);}
  function escapeHtml(value){return text(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function safeUrl(value){try{const u=new URL(value);return u.protocol==='https:'?u.href:'';}catch(e){return '';}}
  function find(root,role){return root.querySelector('[data-archive-role="'+role+'"]');}
  function init(root,config){
    if(!root||!config||!config.supabaseUrl||!config.publishableKey)return;
    const controls={search:find(root,'search'),category:find(root,'category'),priority:find(root,'priority'),count:find(root,'count'),status:find(root,'status'),tableWrap:find(root,'table-wrap'),rows:find(root,'rows'),clear:find(root,'clear'),pagination:find(root,'pagination'),pageInfo:find(root,'page-info'),prev:find(root,'prev'),next:find(root,'next')};
    const state={records:[],categories:[],page:1,pageSize:15};
    function filteredRecords(){
      const terms=normalize(controls.search.value).split(' ').filter(Boolean), key=controls.category.value, priority=controls.priority.value;
      return state.records.filter(r=>{const hay=normalize(r.search_text||[r.subject,r.short_description,r.issuing_authority,r.reference_number,r.required_action,r.category,(r.category_aliases||[]).join(' ')].join(' '));return terms.every(t=>hay.includes(t))&&(!key||r.category_key===key)&&(!priority||r.priority===priority);});
    }
    function openPreview(url,title){document.getElementById('preview-title').textContent=title||'PDF पूर्वावलोकन';document.getElementById('preview-frame').src=url;document.getElementById('preview-modal').hidden=false;}
    function render(){
      const filtered=filteredRecords(), totalPages=Math.max(1,Math.ceil(filtered.length/state.pageSize));
      if(state.page>totalPages)state.page=totalPages;
      const start=(state.page-1)*state.pageSize, pageRows=filtered.slice(start,start+state.pageSize);
      controls.count.textContent=filtered.length+' सार्वजनिक रिकॉर्ड';
      controls.rows.innerHTML=pageRows.length?pageRows.map((r,i)=>{const url=safeUrl(r.public_file_url),title=r.subject||r.short_description||'विद्यालय दस्तावेज़';const preview=url?'<iframe class="preview" loading="lazy" title="PDF पूर्वावलोकन" src="'+escapeHtml(url)+'#page=1&view=FitH"></iframe>':'—';const actions=url?'<div class="actions"><a class="file" target="_blank" rel="noopener noreferrer" href="'+escapeHtml(url)+'">देखें ↗</a><a class="file" href="'+escapeHtml(url)+'" download>डाउनलोड PDF</a><button type="button" data-preview="'+escapeHtml(url)+'" data-title="'+escapeHtml(title)+'">पूर्वावलोकन</button></div>':'<span class="unavailable">उपलब्ध नहीं</span>';return '<tr><td data-label="पूर्वावलोकन">'+preview+'</td><td data-label="दिनांक">'+escapeHtml(r.issue_date)+'</td><td data-label="जारी करने वाला कार्यालय">'+escapeHtml(r.issuing_authority)+'</td><td data-label="विवरण" class="subject">'+escapeHtml(r.subject||'—')+'<span class="desc">'+escapeHtml(r.short_description)+'</span></td><td data-label="संदर्भ संख्या">'+escapeHtml(r.reference_number)+'</td><td data-label="PDF">'+actions+'</td></tr>';}).join(''):'<tr><td colspan="6" class="empty">कोई सार्वजनिक दस्तावेज़ नहीं मिला।</td></tr>';
      controls.status.hidden=pageRows.length>0;controls.status.textContent=pageRows.length?'':'कोई मेल खाता सार्वजनिक रिकॉर्ड नहीं मिला।';controls.tableWrap.hidden=filtered.length===0;controls.pagination.hidden=filtered.length===0;controls.pageInfo.textContent='पृष्ठ '+state.page+' / '+totalPages;controls.prev.disabled=state.page<=1;controls.next.disabled=state.page>=totalPages;
      controls.rows.querySelectorAll('[data-preview]').forEach(btn=>btn.addEventListener('click',()=>openPreview(btn.dataset.preview,btn.dataset.title)));
    }
    async function load(){try{const results=await Promise.all([fetchJson(archiveEndpoint(config),config),fetchJson(categoryEndpoint(config),config)]);state.records=results[0]||[];state.categories=results[1]||[];state.categories.forEach(c=>{const o=document.createElement('option');o.value=c.category_key;o.textContent=c.display_name;controls.category.appendChild(o);});render();}catch(error){controls.count.textContent='लोड नहीं हुआ';controls.status.hidden=false;controls.status.className='error';controls.status.textContent='अभिलेख अभी लोड नहीं हो सका। कृपया बाद में पुनः प्रयास करें।';console.error(error);}}
    [controls.search,controls.category,controls.priority].forEach(c=>c.addEventListener('input',()=>{state.page=1;render();}));
    controls.clear.addEventListener('click',()=>{controls.search.value='';controls.category.value='';controls.priority.value='';state.page=1;render();controls.search.focus();});
    controls.prev.addEventListener('click',()=>{if(state.page>1){state.page--;render();}});controls.next.addEventListener('click',()=>{state.page++;render();});load();
  }
  const modal=document.getElementById('preview-modal');if(modal){document.getElementById('preview-close').addEventListener('click',()=>{modal.hidden=true;document.getElementById('preview-frame').src='about:blank';});modal.addEventListener('click',e=>{if(e.target===modal)document.getElementById('preview-close').click();});}
  window.UMVDocumentArchive=Object.freeze({init:init});
  document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('[data-document-archive]').forEach(root=>init(root,window.UMV_DOCUMENT_ARCHIVE_CONFIG)));
}());
