import {pages} from './manual-content.mjs';

const groups = [
 {slug:'servicio',name:'Servicio',start:'grupo-servicio',end:'grupo-operacion',summary:'Los módulos pedidos, preparación y mesas acompañan la atención, desde la solicitud hasta el trabajo del salón.',closing:'El cierre de este grupo conecta la atención con el cobro. Ese siguiente tramo se encuentra en la guía de Operación diaria.'},
 {slug:'operacion-diaria',name:'Operación diaria',start:'grupo-operacion',end:'grupo-gestion',summary:'Los módulos caja y tienda reúnen el trabajo del turno y la consulta de pedidos online. El módulo inbox aparece como PRONTO en las referencias.',closing:'Conocimos la apertura y el cierre del turno, las ventas y la consulta de pedidos online. Para continuar con la información del negocio, el siguiente recorrido está en la guía de Gestión.'},
 {slug:'gestion',name:'Gestión',start:'grupo-gestion',end:'pendientes',summary:'Los módulos ventas, productos, clientes, gastos y configuración permiten consultar y mantener la información del negocio. El módulo reportes aparece como PRONTO.',closing:'Conocimos la información comercial, el catálogo, los clientes, los gastos y los ajustes de Negocio, Operación y Sistema. El índice permite volver a cada tarea cuando sea necesario.'}
];

export const editions=[{file:'index.html',label:'',pages},...groups.map(g=>{
 const content=pages.slice(pages.findIndex(p=>p.id===g.start),pages.findIndex(p=>p.id===g.end)).filter(p=>p.id!=='cierre-servicio');
 const otherNames=groups.filter(other=>other.slug!==g.slug).map(other=>other.name);
 const intro={id:'introduccion-seccion',group:'Introducción · '+g.name,title:'Un recorrido por '+g.name.toLowerCase(),lead:g.summary,blocks:[
  {title:'Cómo leer esta guía',text:'Comenzaremos por la presentación del grupo. Cada módulo conserva su explicación, sus capturas y una actividad de ejemplo para relacionar las funciones.'},
  {title:'Parte de un recorrido mayor',text:'Esta guía de Primeros pasos reúne los módulos de '+g.name+'. Las referencias a otros grupos permiten reconocer cómo se conecta el trabajo; esos módulos se desarrollan en las otras guías de la colección.'}
 ]};
 const closing={id:'cierre-seccion',group:'Cierre · '+g.name,title:'Continuar desde lo aprendido',lead:g.closing,blocks:[
  {title:'Volver a una tarea',text:'El índice de esta guía enlaza con cada explicación y actividad. Las imágenes muestran el negocio de ejemplo y acompañan el contenido de cada módulo.'},
  {title:'Seguir explorando las otras guías',text:'Te invitamos a revisar las guías de <strong>'+otherNames.join('</strong> y <strong>')+'</strong>. Allí podrás conocer los módulos de esas categorías y cómo se relacionan con las tareas de este recorrido.'}
 ]};
 const body=[intro,...content,closing];
 const toc=Array.from({length:Math.ceil(body.length/30)},(_,i)=>({id:'indice'+(i?'-'+(i+1):''),group:'Antes de comenzar · '+g.name,title:'Índice · '+g.name+(body.length>30?' · '+(i+1):''),lead:'Las entradas enlazan con las páginas de esta guía.',blocks:[],toc:true,tocIndex:i}));
 return {file:g.slug+'.html',label:g.name,pages:[{...pages[0],lead:g.name+'\n'+g.summary},intro,...toc,...content,closing]};
})];
