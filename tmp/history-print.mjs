import {pages} from '../docs/src/manual-content.mjs';import{readFile,writeFile}from'node:fs/promises';
const p=pages.find(p=>p.id==='caja-historial');p.blocks.push({title:'Imprimir un registro',text:'El <strong>ícono de impresora</strong>, al extremo derecho de cada fila del historial, permite <strong>imprimir el registro correspondiente</strong>. Así se puede obtener una copia del turno que se está consultando.'});
p.images=[{asset:'cajaHistorial',caption:'Historial de turnos del negocio de ejemplo.'},{asset:'cajaImprimir',caption:'Detalle de un registro: el ícono de impresora aparece al extremo derecho de la fila.'}];
await writeFile('docs/src/manual-content.mjs','export const pages = '+JSON.stringify(pages,null,2)+';\n');
const path='docs/scripts/prepare-assets.mjs';let s=await readFile(path,'utf8');s=s.replace("const root=new URL","item('cajaImprimir','5-caja','modulo-caja-vista-historial-imprimir-registro');\nconst root=new URL");await writeFile(path,s);
