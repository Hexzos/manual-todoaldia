import {chromium} from '../docs/node_modules/playwright/index.mjs';
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto('http://localhost:3000/src/');await page.evaluate(()=>document.fonts.ready);
await page.locator('#inicio').screenshot({path:'tmp/preview/menu-imagen-arriba.png'});
await page.addStyleTag({content:'.is-wide .visuals {order:2} .is-wide .reading {order:1}'});
await page.locator('#inicio').screenshot({path:'tmp/preview/menu-texto-arriba.png'});
await browser.close();
