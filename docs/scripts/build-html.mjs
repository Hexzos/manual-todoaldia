import {readFile,writeFile} from 'node:fs/promises';
import {editions} from '../src/manual-editions.mjs';
const manifest=JSON.parse(await readFile(new URL('../assets/screenshots/manifest.json',import.meta.url),'utf8'));
const icons=JSON.parse(await readFile(new URL('../assets/icons/manifest.json',import.meta.url),'utf8'));
const imageRatios={};
for(const a of Object.values(manifest)){
 const png=await readFile(new URL('../assets/screenshots/'+a.file,import.meta.url));
 imageRatios[a.file]=png.readUInt32BE(16)/png.readUInt32BE(20);
}
const moduleTitle=p=>{
 const name=p.group.match(/Módulo\s+([^·]+)/i)?.[1].trim();
 const key=name?.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 if(name&&!icons[key])throw Error(`Icono de módulo ausente: ${name}`);
 return `<h2 id="${p.id}-title"${key?' class="module-heading"':''}>${key?`<img class="module-icon" src="../assets/icons/modulo-${key}.png" alt="Icono del módulo ${esc(name.toLowerCase())}" width="40" height="40">`:''}<span>${esc(p.title)}</span></h2>`;
};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const figure=i=>{const a=manifest[i.asset];if(!a||!/^\d+-[^/]+\//.test(a.source)||Number(a.source.split('-')[0])>11)throw Error(`Referencia fuera de alcance: ${i.asset}`);return `<figure style="--image-ratio:${imageRatios[a.file]}"><img src="../assets/screenshots/${a.file}" alt="${esc(i.caption)}"><figcaption>${esc(i.caption)}</figcaption></figure>`};
const blocks=p=>`<div class="reading">${p.blocks.map(b=>`<section><h3>${b.title}</h3><p>${b.text}</p></section>`).join('')}</div>`;
const coverModules={
 'Servicio':[['pedidos','Pedidos'],['preparacion','Preparación'],['mesas','Mesas']],
 'Operación diaria':[['caja','Caja'],['inbox','Inbox · PRONTO'],['tienda','Tienda']],
 'Gestión':[['ventas','Ventas'],['productos','Productos'],['configuracion','Configuración']]
};
const coverIntro=(p,label)=>label?`<p class="lead"><strong class="cover-category">${esc(label)}</strong>${esc(p.lead.split('\n').slice(1).join(' '))}</p><div class="cover-modules" aria-label="Módulos del grupo">${coverModules[label].map(([key,name])=>`<figure><img src="../assets/icons/modulo-${key}.png" width="54" height="54" alt=""><figcaption>${esc(name).replace(' · PRONTO','<br><span class="cover-status">PRONTO</span>')}</figcaption></figure>`).join('')}</div>`:`<p class="lead">${esc(p.lead).replace('\n','<br>')}</p>`;
for(const edition of editions.filter(e=>e.label)){
const {pages,label,file}=edition;
const entries=pages.map((p,i)=>({p,i})).filter(({p})=>!p.cover&&!p.toc);
const contents=pages.map((p,n)=>{
 const footer=`<footer class="page-footer"><span>Todo al Día · Primeros pasos${label?` · ${esc(label)}`:''}</span><span>${String(n+1).padStart(2,'0')} / ${pages.length}</span></footer>`;
 if(p.cover)return `<article class="page document-page brand-cover${label?' edition-cover':''}" id="portada" aria-labelledby="portada-title"><div class="brand-lockup"><img src="../assets/screenshots/marca-todoaldia.png" alt=""><span>Todo al Día</span></div><header><p class="eyebrow">RESTAURANTES · ${label?esc(label).toUpperCase():'GUÍA DE USO'}</p><h1 id="portada-title">Primeros<br>pasos<span class="brand-period">.</span></h1>${coverIntro(p,label)}</header><div class="cover-route"><span>01 <strong>Conocer</strong></span><span>02 <strong>Acompañar</strong></span><span>03 <strong>Practicar</strong></span></div>${footer}</article>`;
 const tocEntries=entries.slice((p.tocIndex||0)*30,((p.tocIndex||0)+1)*30);
 const body=p.toc?`<ol class="contents" style="grid-template-rows:repeat(${Math.ceil(tocEntries.length/2)},1fr)">${tocEntries.map(({p:q,i})=>`<li><a href="#${q.id}"><span>${esc(q.title)}</span><strong>${String(i+1).padStart(2,'0')}</strong></a></li>`).join('')}</ol>`: `${p.wide&&p.images?`<div class="visuals">${p.images.map(figure).join('')}</div>${blocks(p)}`:`${blocks(p)}${p.images?`<div class="visuals">${p.images.map(figure).join('')}</div>`:p.placeholder?`<figure class="placeholder"><div><span>IMAGEN PENDIENTE</span><h3>${esc(p.placeholder)}</h3><p>Se incorporará la captura real para continuar este tramo del recorrido.</p></div><figcaption>Referencia pendiente de actualización.</figcaption></figure>`:''}`}`;
 return `<article class="page document-page ${p.divider?'group-divider':''}" id="${p.id}" aria-labelledby="${p.id}-title"><header><p class="eyebrow">${esc(p.group)}</p>${moduleTitle(p)}<p class="lead">${esc(p.lead)}</p></header><div class="document-body ${p.toc?'is-toc':p.wide?'is-wide':p.pair?'is-pair':p.images||p.placeholder?'is-guided':'is-text'}">${body}</div>${p.flow?`<div class="journey" aria-label="Secuencia del ejemplo">${p.flow.map((s,i)=>`${i?'<span class="arrow" aria-hidden="true">→</span>':''}<span>${esc(s)}</span>`).join('')}</div>`:''}${footer}</article>`;
}).join('\n');
await writeFile(new URL('../src/'+file,import.meta.url),`<!doctype html>\n<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Todo al Día · Primeros pasos${label?` · ${esc(label)}`:''}</title>${['tokens','typography','layout','components','pages','print'].map(s=>`<link rel="stylesheet" href="../styles/${s}.css">`).join('')}</head><body><main>${contents}</main></body></html>\n`);
console.log(`Manual actualizado: ${pages.length} páginas; referencias 0 a 11.`);


}

await import('./build-web.mjs');
