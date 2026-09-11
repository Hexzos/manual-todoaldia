import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {editions} from '../src/manual-editions.mjs';
const output=new URL('../../output/pdf/',import.meta.url);
await mkdir(output,{recursive:true});
const browser=await chromium.launch();
try {
 const tab=await browser.newPage();
 for(const edition of editions.filter(e=>e.label)){
  await tab.goto(new URL('../src/'+edition.file,import.meta.url).href,{waitUntil:'networkidle'});
  await tab.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));});
  const path=fileURLToPath(new URL('primeros-pasos-'+edition.file.replace('.html','.pdf'),output));
  await tab.pdf({path,preferCSSPageSize:true,printBackground:true,displayHeaderFooter:false,tagged:true});
  console.log(`${edition.label}: ${edition.pages.length} páginas · ${path}`);
 }
} finally {await browser.close();}
