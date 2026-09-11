import {chromium} from 'playwright';
import {mkdir} from 'node:fs/promises';
import {editions} from '../src/manual-editions.mjs';
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
await mkdir('../tmp/preview',{recursive:true});
for(const edition of editions.filter(e=>e.label && (!process.env.EDITION || e.file===process.env.EDITION))){
const {pages,file}=edition;
for(const media of ['screen','print']){
 await page.emulateMedia({media});
 await page.goto('http://localhost:3000/src/'+file);
 await page.evaluate(()=>document.fonts.ready);
 const result=await page.evaluate(()=>({
  nav:document.querySelectorAll('nav').length,
  images:[...document.images].every(i=>i.complete&&i.naturalWidth>0),
  links:[...document.querySelectorAll('a[href^="#"]')].every(a=>document.getElementById(a.hash.slice(1))),
  fonts:[...document.fonts].every(f=>f.status==='loaded'),
  pages:[...document.querySelectorAll('.page')].map(p=>{const r=p.getBoundingClientRect();return {id:p.id,width:r.width,height:r.height,overflow:p.scrollHeight>p.clientHeight||p.scrollWidth>p.clientWidth,outside:[...p.querySelectorAll('*')].filter(e=>{const b=e.getBoundingClientRect();return b.bottom>r.bottom+1||b.right>r.right+1||b.left<r.left-1||b.top<r.top-1}).map(e=>e.tagName),overlap:(()=>{const body=(p.querySelector('.document-body') || p.querySelector('header')).getBoundingClientRect();const footer=p.querySelector('.journey,.page-footer').getBoundingClientRect();return body.bottom>footer.top+1})()}})
 }));
 const failures=result.pages.filter(p=>p.overflow||p.outside.length||p.overlap||Math.abs(p.width-1122.52)>1||Math.abs(p.height-793.7)>1);
 console.log(JSON.stringify({file,media,count:result.pages.length,nav:result.nav,images:result.images,links:result.links,fonts:result.fonts,failures}));
 if(result.nav||!result.images||!result.links||!result.fonts||result.pages.length!==pages.length||failures.length)errors.push(`${media}: validación fallida`);
 if(media==='screen')for(const [i,p] of (await page.locator('.page').all()).entries())await p.screenshot({path:`../tmp/preview/${file==='index.html'?'a4':file.replace('.html','')}-${i+1}.png`});
}
}
await browser.close();
console.log({errors});
if(errors.length)process.exitCode=1;

