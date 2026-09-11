import {pages} from '../docs/src/manual-content.mjs';import{writeFile,readFile}from'node:fs/promises';
for(const p of pages)if(['caja-movimiento','caja-cierre'].includes(p.id))p.wide=true;
await writeFile('docs/src/manual-content.mjs','export const pages = '+JSON.stringify(pages,null,2)+';\n');
let s=await readFile('docs/src/modules/caja/index.html','utf8');s=s.replaceAll('#pendientes','#caja').replace('Ver la continuación pendiente del manual','Ver el módulo caja en el manual');await writeFile('docs/src/modules/caja/index.html',s);
