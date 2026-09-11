import {pages} from '../docs/src/manual-content.mjs';import{writeFile}from'node:fs/promises';
const p=pages.find(p=>p.id==='inicio');p.lead='El menú reúne 12 módulos: 10 disponibles y 2 marcados como PRONTO, distribuidos en tres grupos.';p.blocks[1].text='Los módulos inbox y reportes aparecen como <strong>PRONTO</strong> en el menú.';
await writeFile('docs/src/manual-content.mjs','export const pages = '+JSON.stringify(pages,null,2)+';\n');
