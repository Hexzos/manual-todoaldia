import{readFile,writeFile}from'node:fs/promises';import{pages}from'../docs/src/manual-content.mjs';
const f='docs/src/management-assets.json';const a=JSON.parse(await readFile(f,'utf8'));
a.gestion17.crop=[445,115,805,460];a.gestion18.crop=[445,135,805,490];a.gestion22.crop=[445,280,805,485];a.gestion40.crop=[0,0,515,480];a.gestion9.crop=[380,70,1490,715];
await writeFile(f,JSON.stringify(a,null,2));
const captions={'productos-precio':'Detalle de Precio y venta: tipo, modalidad, costo y precio.','productos-variantes':'Detalle de Variantes: activación de versiones y atributos.','productos-opciones':'Detalle de Web y stock: visibilidad, inventario y datos complementarios.','clientes-ficha':'Detalle de los datos editables del cliente y su condición de cuenta en el sitio.','configuracion':'Datos del negocio: identidad, contacto y mensaje del recibo.'};
for(const p of pages)if(captions[p.id])p.images[0].caption=captions[p.id];
const pending=pages.find(p=>p.id==='pendientes');pending.title='Lo que continuará en próximas entregas';pending.lead='El recorrido de los módulos disponibles queda incorporado hasta el alcance de las capturas actuales. Estas son las partes que esperan nuevas referencias.';
await writeFile('docs/src/manual-content.mjs','export const pages = '+JSON.stringify(pages,null,2)+';\n');
