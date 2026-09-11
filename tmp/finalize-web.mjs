import {readFile,writeFile,appendFile} from 'node:fs/promises';
const path=new URL('../docs/scripts/help.js',import.meta.url);
let s=await readFile(path,'utf8');
const start=s.indexOf("$('#search-status').textContent=results.length?");
const end=s.indexOf("$('#result-list').innerHTML",start);
s=s.slice(0,start)+"$('#search-status').textContent=results.length?`${results.length} ${results.length===1?'tema encontrado':'temas encontrados'}`:'No encontramos ese tema. Prueba con «caja», «mesas» o «productos».';"+s.slice(end);
await writeFile(path,s);
const packagePath=new URL('../docs/package.json',import.meta.url);
const pkg=JSON.parse((await readFile(packagePath,'utf8')).replace(/^\uFEFF/,''));pkg.scripts['web:check']='node scripts/check-web.mjs';await writeFile(packagePath,JSON.stringify(pkg,null,2)+'\n');
await appendFile(new URL('../docs/README.md',import.meta.url),`

## Ayuda web de primeros pasos

src/index.html es ahora el centro de ayuda web adaptable a escritorio y móvil. Reutiliza 89 temas de manual-content.mjs y las imágenes existentes. Incluye inicio por categorías, búsqueda por título y contenido, índice lateral plegable por grupo/módulo, ruta de navegación, anterior/siguiente y ampliación de capturas. El botón Mostrar/Ocultar índice permanece visible en la barra superior. El modo claro/oscuro y la preferencia del índice de escritorio se guardan localmente.

build-web.mjs genera el índice web; help.js controla la navegación y help.css define los estilos exclusivos de esta vista. npm run docs:html genera las tres guías y luego la ayuda web. npm run web:check verifica navegación, búsqueda, tema, imágenes ampliadas y ausencia de desbordamientos en los 89 temas a 1440 y 390 px. docs:check verifica únicamente las tres guías A4.

Las variantes HTML siguen siendo documentos independientes. Los PDF de output/pdf se conservan como hito y no se regeneran con el build HTML. No se publicó la ayuda en un servidor externo.
`);
