const {articles,manifest}=JSON.parse(document.querySelector('#help-data').textContent);
const $=s=>document.querySelector(s);
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const moduleName=p=>p.group.match(/Módulo\s+([^·]+)/i)?.[1].trim()||'';
const moduleKey=p=>normalize(moduleName(p));
const icon=(key,size=36)=>`<img src="../assets/icons/modulo-${key}.png" width="${size}" height="${size}" alt="">`;
const groups=[{name:'Antes de comenzar',id:'proposito',items:articles.filter(p=>['proposito','sesion','inicio','modulos'].includes(p.id))},...[
 ['Servicio','grupo-servicio','Servicio'],['Operación diaria','grupo-operacion','Operación diaria'],['Gestión','grupo-gestion','Gestión']
].map(([name,id,prefix])=>({name,id,items:articles.filter(p=>p.id===id||p.group.startsWith(prefix)||p.id==='cierre-servicio'&&prefix==='Servicio')})),{name:'Consulta breve',id:'glosario',items:articles.filter(p=>p.id==='glosario')}];

/* Módulos documentados, en el orden del recorrido. Un módulo puede aparecer en varios grupos. */
const modules=[];
for(const p of articles){const key=moduleKey(p);if(!key)continue;let m=modules.find(m=>m.key===key);if(!m){m={key,name:moduleName(p),first:p.id,items:[],task:(p.title.split(':')[1]||p.lead).trim()};modules.push(m);}m.items.push(p);}
const capitalize=s=>s.charAt(0).toUpperCase()+s.slice(1);
const pending=[['inbox','Inbox','Los mensajes de tus canales'],['reportes','Reportes','El detalle de tus resultados']];

/* Índice lateral: grupos y módulos siempre visibles, sin secciones que haya que abrir. */
$('#index-nav').innerHTML=`<a class="topic-link nav-home" href="#ayuda">Inicio de la ayuda</a>`+groups.map(g=>{
 let last='',html='';
 for(const p of g.items){const key=moduleKey(p);
  if(key!==last){html+=key?`<h3 class="nav-module">${icon(key,24)}Módulo ${esc(moduleName(p).toLowerCase())}</h3>`:'';last=key;}
  html+=`<a class="topic-link" href="#${p.id}">${esc(p.title)}</a>`;}
 return `<section class="nav-group"><h2>${g.name}</h2>${html}</section>`;}).join('');

const mobile=matchMedia('(max-width:760px)');
let indexOpen=!mobile.matches;
try{if(!mobile.matches)indexOpen=localStorage.getItem('todoaldia-index')!=='hidden';}catch{}
function setIndex(open,save=false){indexOpen=open;$('#sidebar').hidden=!open;$('.workspace').classList.toggle('sidebar-hidden',!open);$('#index-toggle').setAttribute('aria-expanded',String(open));$('#index-label').textContent=mobile.matches?'Temas':open?'Ocultar los temas':'Ver todos los temas';$('#scrim').hidden=!(mobile.matches&&open);if(save&&!mobile.matches)try{localStorage.setItem('todoaldia-index',open?'open':'hidden');}catch{}}
$('#index-toggle').onclick=()=>setIndex(!indexOpen,true);$('#scrim').onclick=()=>{setIndex(false);$('#index-toggle').focus();};mobile.addEventListener('change',()=>setIndex(!mobile.matches));addEventListener('resize',()=>setIndex(indexOpen));setIndex(indexOpen);
$('#search-jump').onclick=()=>{window.scrollTo(0,0);$('#search').focus();};

function theme(){const dark=document.documentElement.dataset.theme==='dark';$('#theme-label').textContent=dark?'Modo claro':'Modo oscuro';$('#theme-toggle').setAttribute('aria-pressed',String(dark));}
$('#theme-toggle').onclick=()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('todoaldia-theme',document.documentElement.dataset.theme);}catch{}theme();};theme();

function home(){
 const steps=[['proposito','1','Conoce el recorrido','Qué encontrarás en esta ayuda'],['sesion','2','Entra a tu cuenta','El primer encuentro con el panel'],['inicio','3','Reconoce el menú','Dónde está cada módulo']];
 return `<h2 class="section-heading first">Si es tu primera vez, empieza por aquí</h2><ol class="steps">${steps.map(([id,n,title,desc])=>`<li><a href="#${id}"><span class="step-num">${n}</span><span class="step-text"><strong>${title}</strong><span>${desc}</span></span></a></li>`).join('')}</ol>
<h2 class="section-heading">Recorre el sistema por momentos del día</h2><p class="section-note">Cada grupo reúne los módulos que se usan en un mismo momento de la jornada.</p><div class="group-cards">${[
 ['grupo-servicio','Servicio',['pedidos','preparacion','mesas'],'Del pedido a la mesa. Conoce cómo acompañar cada atención.','3 módulos'],
 ['grupo-operacion','Operación diaria',['caja','tienda'],'Acompaña el turno de caja y consulta los pedidos online.','2 módulos disponibles · Inbox pronto'],
 ['grupo-gestion','Gestión',['ventas','productos','configuracion'],'Consulta tus ventas y organiza los productos, clientes y ajustes.','5 módulos disponibles · Reportes pronto']
].map(([id,title,icons,desc,count])=>`<a class="group-card" href="#${id}"><div class="card-icons">${icons.map(k=>icon(k)).join('')}</div><h3>${title}</h3><p>${desc}</p><p>${count}</p><span>Explorar ${title.toLowerCase()} →</span></a>`).join('')}</div>
<h2 class="section-heading">O entra directo al módulo que estás usando</h2><p class="section-note">Son las mismas secciones que ves en el menú del sistema.</p><div class="module-grid">${modules.map(m=>`<a class="module-card" href="#${m.first}"><span class="module-icon">${icon(m.key,40)}</span><h3>${esc(capitalize(m.name))}</h3><p>${esc(capitalize(m.task))}</p><span class="module-meta">${m.items.length} ${m.items.length===1?'tema':'temas'} →</span></a>`).join('')+pending.map(([key,name,task])=>`<span class="module-card is-pending"><span class="module-icon">${icon(key,40)}</span><h3>${name}</h3><p>${task}</p><span class="module-meta">Pronto</span></span>`).join('')}</div>
<h2 class="section-heading">Las tareas que más se consultan</h2><div class="quick-links"><a href="#caja">Abrir la caja →</a><a href="#mesas">Atender una mesa →</a><a href="#productos-nuevo">Añadir un producto →</a><a href="#gastos-registro">Registrar un gasto →</a></div>`;}

function article(p){const key=moduleKey(p),g=groups.find(g=>g.items.some(a=>a.id===p.id));const pos=articles.indexOf(p);const images=p.images?.map(i=>{const a=manifest[i.asset];return `<figure><button class="image-open" data-image="../assets/screenshots/${a.file}" aria-label="Ampliar imagen: ${esc(i.caption)}"><img src="../assets/screenshots/${a.file}" alt="${esc(i.caption)}"></button><figcaption>${esc(i.caption)}<span class="image-hint">Selecciona la imagen para ampliarla</span></figcaption></figure>`;}).join('')||'';
return `<nav class="breadcrumb" aria-label="Ruta de navegación"><a href="#ayuda">Inicio</a><span>›</span>${g?`<a href="#${g.id}">${g.name}</a>`:''}${key?`<span>›</span><span>Módulo ${key}</span>`:''}</nav><article><header class="article-header"><p class="eyebrow">${esc(p.group)}</p><h1 id="article-title" tabindex="-1">${key?icon(key,48):''}<span>${esc(p.title)}</span></h1><p class="lead">${esc(p.lead)}</p></header><div class="article-body ${!p.wide&&images?'side':''}">${p.wide&&images?`<div class="article-images">${images}</div>`:''}<div class="article-text">${p.blocks.map(b=>`<section><h2>${b.title}</h2><p>${b.text}</p></section>`).join('')}</div>${!p.wide&&images?`<div class="article-images">${images}</div>`:''}</div>${p.flow?`<div class="flow">${p.flow.map(esc).join('<b aria-hidden="true">→</b>')}</div>`:''}</article><nav class="article-pager" aria-label="Continuar el recorrido">${pos>0?`<a href="#${articles[pos-1].id}"><small>← Tema anterior</small>${esc(articles[pos-1].title)}</a>`:'<span></span>'}${pos<articles.length-1?`<a href="#${articles[pos+1].id}"><small>Tema siguiente →</small>${esc(articles[pos+1].title)}</a>`:'<a href="#ayuda"><small>Terminaste el recorrido</small>Volver al inicio de la ayuda →</a>'}</nav><p class="back-home"><a href="#ayuda">← Volver al inicio de la ayuda</a></p>`;}

function render(focus=false){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{id='ayuda';}const p=articles.find(p=>p.id===id);const isHome=!id||id==='ayuda';$('#hero').hidden=!isHome;$('#view').innerHTML=isHome?home():p?article(p):'<h1>Tema no encontrado</h1><p>Puedes buscar otro tema o <a href="#ayuda">volver al inicio</a>.</p>';document.title=(p?p.title:'Primeros pasos')+' · Ayuda Todo al Día';document.querySelectorAll('.topic-link').forEach(a=>{const active=a.hash==='#'+id;if(active){a.setAttribute('aria-current','page');if(!mobile.matches&&indexOpen)a.scrollIntoView({block:'nearest'});}else a.removeAttribute('aria-current');});$('#search').value='';search();if(mobile.matches)setIndex(false);if(focus){$('#article-title')?.focus({preventScroll:true});window.scrollTo(0,0);}}
const searchable=articles.map(p=>({p,text:normalize(p.title+' '+p.group+' '+p.lead+' '+p.blocks.map(b=>b.title+' '+b.text.replace(/<[^>]*>/g,' ')).join(' '))}));
function search(){const q=normalize($('#search').value.trim());$('#search-results').hidden=!q;$('#view').hidden=!!q;$('#clear-search').hidden=!q;if(!q)return;const results=searchable.filter(a=>q.split(/\s+/).every(word=>a.text.includes(word)));$('#search-status').textContent=results.length?`${results.length} ${results.length===1?'tema encontrado':'temas encontrados'}`:'No encontramos ese tema. Prueba con «caja», «mesas» o «productos».';$('#result-list').innerHTML=results.map(({p})=>`<a class="result" href="#${p.id}"><small>${esc(p.group)}</small><strong>${esc(p.title)}</strong><p>${esc(p.lead)}</p></a>`).join('');}
$('#search').addEventListener('input',search);$('#clear-search').onclick=()=>{$('#search').value='';search();$('#search').focus();};window.addEventListener('hashchange',()=>render(true));document.addEventListener('click',e=>{const b=e.target.closest('.image-open');if(b){const d=$('#image-dialog');d.querySelector('img').src=b.dataset.image;d.querySelector('img').alt=b.querySelector('img').alt;d.querySelector('p').textContent=b.querySelector('img').alt;d.showModal();}const a=e.target.closest('a[href^="#"]');if(a&&a.hash===location.hash){render(true);}});$('#close-image').onclick=()=>$('#image-dialog').close();document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobile.matches&&indexOpen){setIndex(false);$('#index-toggle').focus();}});render();
