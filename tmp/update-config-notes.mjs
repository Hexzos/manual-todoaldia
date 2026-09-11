import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../docs/',import.meta.url);
const edit=async(file,fn)=>writeFile(new URL(file,root),fn(await readFile(new URL(file,root),'utf8')));
await edit('src/manual-content.mjs',s=>s.replace('y la primera sección de configuración.','y los apartados Negocio, Operación y Sistema del módulo configuración.'));
await edit('README.md',s=>s.replace('68 páginas','94 páginas').replace('módulo configuración limitado a Datos del negocio y Horario de atención.','módulo configuración con Negocio, Operación y Sistema.').replace('Los restantes ajustes de configuración esperan nuevas referencias.','Configuración incluye datos, horario, banners, pagos, canales, tienda online, promociones, WhatsApp, zonas, repartidores, red, impresoras y usuarios, con actividades entre apartados y cierre del recorrido.'));
await writeFile(new URL('REVISION-EDITORIAL.md',root),`# Revisión editorial — cierre de configuración

Se revisaron las 27 capturas de 11-configuracion, incluidas las nuevas referencias de Negocio, Operación y Sistema. Se seleccionaron 23 recursos adicionales, con recortes registrados en el manifiesto y originales intactos.

La guía queda en 94 páginas, con tres páginas de índice (30 entradas por página). Se conservan los módulos anteriores y se completa configuración siguiendo el orden de su menú: Negocio, Operación y Sistema. Sistema se presenta como un apartado de configuración, no como un módulo independiente.

Negocio incorpora banners, métodos de pago, canales, tienda online, promociones y WhatsApp, además de datos y horario ya documentados. Operación incorpora el recorrido de zonas, repartidores, red de reparto e impresión. Sistema incorpora listado de usuarios, alta e invitación, estado de acceso y reenvío de invitaciones pendientes. Hay actividades entre apartados y cierre general.

Las explicaciones se limitan a lo confirmado en MODULES.md y las capturas. No se inventan opciones no desplegadas de roles o reparto, instalación detallada del agente ni resultados de conexiones. Inbox y reportes permanecen PRONTO. Las acciones sobre pedidos de tienda esperan referencias con registros.

Validación de 94 páginas en Chromium, en pantalla e impresión: dimensiones A4 horizontal, fuentes, imágenes, enlaces y límites del contenido sin errores. Revisión visual de las páginas nuevas y recortes. No se exportó PDF.
`);
await edit('reference/MODULES.md',s=>s.replace('Actualmente solo **Zonas de reparto** dispone de suficiente información funcional confirmada para documentarse en detalle.','Las referencias actualizadas de 11-configuracion/operacion permiten documentar las cuatro secciones dentro del alcance visible. Véase la actualización al final de este documento.').replace('La carpeta 11-configuracion respalda únicamente Datos del negocio y su Horario de atención; no se desarrollan las demás secciones todavía.','La carpeta 11-configuracion ahora respalda Negocio, Operación y Sistema, según la actualización siguiente.')+`

## Configuración completada con las referencias nuevas

Esta actualización reemplaza los estados documentales anteriores que dejaban Repartidores, Red de reparto, Impresoras y otros ajustes pendientes. Se revisaron las 27 capturas de 11-configuracion. El orden sigue el menú actual: Negocio → Operación → Sistema.

- Negocio: datos y horario; banners (escritorio, móvil, orden y destino); métodos de pago; canales; tienda online (modalidades, tarifas, peso por defecto y franja); promociones (beneficio, canales, alcance y programación); WhatsApp Business.
- Operación: zonas (ubicación, dibujo, tarifas, revisión, cobertura exterior y envío gratis); repartidores (modo visible, espera antes de avisar a la red, datos del equipo, disponibilidad e invitación); red (estado, habilitación y campos de conexión); impresoras (vistas previas, pruebas, QZ Tray, certificado, impresora y copias por documento, modo térmico, eventos automáticos y agente local).
- Sistema: Usuarios es un apartado del módulo configuración. Se muestran usuario, rol, último acceso y estado activo. Las cuentas con movimientos se desactivan en lugar de borrarse. Nuevo usuario pide nombre, correo y rol; Crear e invitar envía correo para crear una contraseña. El listado muestra Invitación pendiente y Reenviar.

No se documentan opciones ocultas del selector de roles ni del modo de reparto, ni pasos de instalación o resultados de conexión ausentes. La impresión de cierre de turno mantiene el significado confirmado por el usuario. Las capturas de red muestran credenciales abreviadas; no se trasladan sus valores a la redacción.
`);
