# Primeros pasos · Todo al Día

Guía HTML editorial en A4 horizontal, sin navbar. Desde `docs`: `npm run preview` y http://localhost:3000/src/.

## Alcance actual

94 páginas, incluidas tres páginas de índice con enlaces. Las referencias vigentes son las carpetas numeradas del 0 al 11.

- **Servicio:** módulos pedidos, preparación y mesas.
- **Operación diaria:** módulos caja y tienda. El módulo inbox sigue marcado como PRONTO.
- **Gestión:** módulos ventas, productos, clientes y gastos; módulo configuración con Negocio, Operación y Sistema. El módulo reportes sigue marcado como PRONTO.

Cada módulo desarrollado presenta propósito, funciones y una actividad que conecta con el siguiente. Configuración incluye datos, horario, banners, pagos, canales, tienda online, promociones, WhatsApp, zonas, repartidores, red, impresoras y usuarios, con actividades entre apartados y cierre del recorrido. En tienda aún faltan capturas con pedidos para ampliar las acciones sobre registros.

## Edición

`src/manual-content.mjs` contiene el texto y el orden de páginas. `npm run docs:html` regenera `src/index.html`; luego basta recargar el navegador. Los estilos están en `styles/`. Las ediciones directas al HTML se reemplazan al regenerarlo.

`assets/screenshots/manifest.json` registra la procedencia y los recortes `[x,y,ancho,alto]`. `src/management-assets.json` contiene las referencias seleccionadas de Gestión. `scripts/prepare-assets.mjs` prepara el manifiesto y las copias; `scripts/prepare-crops.ps1` realiza los recortes en Windows cuando la política local permite ejecutar scripts. Las imágenes ya están preparadas: no es necesario regenerarlas para consultar la guía. Los originales permanecen intactos.

El símbolo de portada proviene de la captura de inicio de sesión, recorte [1200,375,70,70]. Se conserva en `assets/screenshots/marca-todoaldia.png`.

## Diseño y validación

Formato 297 × 210 mm; márgenes de lectura de 14 mm laterales y 12 mm verticales. Plus Jakarta Sans local, fondo cálido y naranja de marca. Vistas horizontales con imagen arriba y texto abajo; detalles verticales con texto lateral. Pies de figura debajo de las imágenes y nombres de módulos en minúscula en párrafos.

Con el preview en el puerto 3000, `npm run docs:check` comprueba en Chromium las dimensiones, los límites, las imágenes, las fuentes y los enlaces, en pantalla e impresión. Guarda las capturas en `../tmp/preview/`. No exporta PDF.

El servidor detecta una instancia del manual; si otro servicio ocupa el puerto, intenta los siguientes. PORT permite elegir el inicial; la validación automatizada usa 3000.

## Iconos de los módulos

Los encabezados de introducción, detalle y actividad muestran el icono del módulo indicado en su grupo editorial. `assets/icons/manifest.json` registra las coordenadas de los doce recortes: once provienen de `reference/iconos/Iconos-modulos.png`; tienda utiliza el carrito de la captura de acceso, ya que no aparece en la lámina. La fachada corresponde a productos. Inbox y reportes se conservan como recursos para su futura documentación.

`scripts/prepare-icons.ps1` permite reproducir los recortes sin modificar los originales. El tamaño de presentación es 40 × 40 px con esquinas redondeadas. Se verificaron las 94 páginas en pantalla e impresión después de incorporar los iconos.

## Guías por grupo

El manual principal conserva sus 94 páginas en `src/index.html`. Las variantes son:

| Documento | Archivo | Páginas |
| --- | --- | --- |
| Servicio | `src/servicio.html` | 21 |
| Operación diaria | `src/operacion-diaria.html` | 16 |
| Gestión | `src/gestion.html` | 59 |

Cada variante tiene portada e introducción específicas, índice con enlaces y numeración propios, presentación del grupo y cierre. Servicio conserva su cierre original; Operación diaria y Gestión añaden uno específico. Se mantienen literalmente las explicaciones, capturas y actividades del grupo, incluidas sus referencias a otras partes del recorrido. Los contenidos de acceso y conceptos generales siguen en el manual principal.

`src/manual-editions.mjs` selecciona el contenido compartido sin duplicarlo. `npm run docs:html` genera los cuatro HTML. `npm run docs:check` valida los cuatro documentos en pantalla e impresión y guarda capturas diferenciadas por archivo en `tmp/preview`. Las rutas relativas permiten consultarlos desde el mismo servidor de vista previa.

## Exportación PDF

Las tres guías se distribuyen como documentos independientes. Sus cierres invitan a consultar las otras categorías, y las introducciones ya no remiten al manual principal. Servicio también utiliza el cierre específico de la colección.

Desde docs, `npm run docs:html` actualiza las fuentes y `npm run docs:pdf` genera los tres archivos separados en `../output/pdf/`. Se conservan los HTML. PDF verificados: Servicio 21 páginas, Operación diaria 16 y Gestión 59; tamaño A4 horizontal, numeración y texto comprobados, con revisión visual de los cierres renderizados.


## Ayuda web de primeros pasos

src/index.html es ahora el centro de ayuda web adaptable a escritorio y móvil. Reutiliza 89 temas de manual-content.mjs y las imágenes existentes. Incluye inicio por categorías, búsqueda por título y contenido, índice lateral por grupo/módulo, ruta de navegación, anterior/siguiente y ampliación de capturas. El botón para mostrar u ocultar los temas permanece visible en la barra superior. El modo claro/oscuro y la preferencia del índice de escritorio se guardan localmente.

La barra superior repite la disposición de la barra del sistema: identidad a la izquierda, con el símbolo de marca, el nombre y el estado «Todo al Día», y acciones a la derecha en botones redondeados. Las acciones son Ver todos los temas, Inicio, Buscar, Modo oscuro y Volver al sistema. En móvil la barra conserva la altura y deja Temas, Inicio y Modo oscuro. La dirección del panel se define en `plataforma` dentro de build-web.mjs.

La navegación está pensada para quien recién comienza a usar sitios web. El índice lateral muestra los grupos y los módulos sin secciones que haya que abrir; el tema en pantalla queda marcado y el índice se desplaza hasta él. El inicio presenta la portada de la ayuda, la búsqueda, tres primeros pasos numerados, los tres grupos del recorrido, la grilla con los doce módulos del menú del sistema —inbox y reportes aparecen como PRONTO— y las tareas más consultadas. Los grupos van antes que los módulos para orientar primero y evitar la saturación de doce tarjetas. Cada tema termina con el paso anterior, el siguiente y el regreso al inicio de la ayuda.

Los antetítulos, los títulos de sección y los títulos de tarjeta repiten la escala de la página Aprende de todoaldia.cl: antetítulo de 14 px en peso 800 con el naranja de marca, título de sección de 24 px y título de tarjeta de 19 px, ambos en peso 800. El acento de toda la ayuda web es el naranja de marca: help.css redefine `--td-accent-text` para esta vista, así que la ruta de navegación, los enlaces de tarjeta y los botones de recorrido comparten ese tono. Las guías A4 no cargan help.css y conservan el naranja oscuro de tokens.css.

build-web.mjs genera el índice web; help.js controla la navegación y help.css define los estilos exclusivos de esta vista. npm run docs:html genera las tres guías y luego la ayuda web. npm run web:check verifica navegación, búsqueda, tema, imágenes ampliadas y ausencia de desbordamientos en los 89 temas a 1440 y 390 px. docs:check verifica únicamente las tres guías A4.

Las variantes HTML siguen siendo documentos independientes. Los PDF de output/pdf se conservan como hito y no se regeneran con el build HTML. No se publicó la ayuda en un servidor externo.
