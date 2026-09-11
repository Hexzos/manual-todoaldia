import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.url());});
await mkdir('../tmp/web',{recursive:true});
try{
 await page.goto('http://localhost:3000/src/');
 await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:'../tmp/web/home.png',fullPage:true});
 await page.getByRole('button',{name:'Ocultar los temas'}).click();assert(await page.locator('#sidebar').isHidden());
 await page.getByRole('button',{name:'Ver todos los temas'}).click();assert(await page.locator('#sidebar').isVisible());
 assert.equal(await page.locator('.module-card').count(),12);
 await page.locator('#theme-toggle').click();const theme=await page.locator('html').getAttribute('data-theme');
 await page.reload();assert.equal(await page.locator('html').getAttribute('data-theme'),theme);
 await page.locator('#search').fill('abrir caja');assert(await page.locator('.result').count()>0);
 await page.locator('.result').first().click();await page.locator('#article-title').waitFor({state:'visible'});
 await page.goto('http://localhost:3000/src/#mesa-pedido');await page.locator('.image-open').first().click();assert(await page.locator('dialog').isVisible());await page.keyboard.press('Escape');assert(await page.locator('dialog').isHidden());
 await page.screenshot({path:'../tmp/web/article-dark.png',fullPage:true});
 const ids=await page.evaluate(()=>JSON.parse(document.querySelector('#help-data').textContent).articles.map(p=>p.id));
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:900});
  for(const id of ids){await page.evaluate(id=>{location.hash=id;},id);await page.waitForFunction(id=>document.querySelector('.topic-link[aria-current="page"]')?.hash==='#'+id,id);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${id}: overflow at ${width}`);}
 }
 await page.goto('http://localhost:3000/src/#caja');assert(await page.locator('#hero').isHidden());await page.getByRole('button',{name:'Temas'}).click();assert(await page.locator('#sidebar').isVisible());await page.keyboard.press('Escape');assert(await page.locator('#sidebar').isHidden());
 await page.screenshot({path:'../tmp/web/mobile.png',fullPage:true});
 assert.equal(new Set(ids).size,ids.length);assert.deepEqual(errors,[]);
 console.log('Web: 89 artículos, escritorio y móvil, búsqueda, índice, modo persistente y ampliación de imágenes: OK');
}finally{await browser.close();}
