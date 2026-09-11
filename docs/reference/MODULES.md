# Todoaldía — Fuente editorial y funcional del manual

Este documento contiene la descripción textual confirmada de los módulos de Todoaldía.

Su función es complementar las capturas almacenadas en `reference/screenshots/`.

Las capturas muestran **cómo se ve la interfaz**.
Este documento explica **qué hace cada elemento y cómo debe enseñarse**.

Ambas fuentes deben utilizarse juntas al crear la documentación.

---

# 1. Reglas editoriales generales

## 1.1 Objetivo del manual

Este manual está dirigido a personas que ya utilizan Todoaldía o están comenzando su periodo de prueba.

Debe responder principalmente:

> ¿Cómo hago esto en Todoaldía?

No debe transformarse en un curso teórico de administración.

Las explicaciones deben enseñar:

1. dónde se encuentra una función;
2. para qué sirve;
3. qué campos o controles contiene;
4. cómo utilizarla;
5. cómo se conecta con otras acciones;
6. un ejemplo sencillo de uso cuando corresponda.

---

## 1.2 Estructura recomendada de cada módulo

Cada módulo debe seguir, cuando corresponda, esta secuencia:

### Introducción
Explicar brevemente para qué sirve el módulo.

### Vista principal
Explicar qué información encuentra el usuario al ingresar.

### Acciones
Describir botones, campos, filtros, estados y controles relevantes.

### Procedimiento
Mostrar cómo realizar las tareas principales.

### Relaciones
Indicar si una función depende de otra configuración o módulo.

### Ejemplo práctico
Cerrar con una situación sencilla que conecte las acciones explicadas.

El ejemplo no debe introducir funciones nuevas que no hayan sido documentadas previamente.

---

## 1.3 Lenguaje

Utilizar español chileno neutro.

El lenguaje debe ser:

- claro;
- directo;
- cercano;
- breve;
- didáctico;
- no infantil;
- no innecesariamente técnico.

Preferir:

> Selecciona **Nuevo gasto** para registrar un gasto.

Evitar:

> Proceda a efectuar la creación de un nuevo registro de gasto.

---

## 1.4 No clasificar al usuario

No utilizar:

- Nivel 1;
- Nivel 2;
- básico;
- intermedio;
- avanzado;
- experto;
- dificultad;
- fácil;
- difícil;
- para principiantes.

La documentación clasifica tareas y contenidos, no personas.

---

## 1.5 Nombres de negocios

Las capturas pueden mostrar negocios utilizados para demostraciones.

No utilizar esos nombres en la redacción.

Preferir:

- **tu negocio** cuando se habla directamente al usuario;
- **el negocio** en explicaciones generales;
- **el negocio de ejemplo** en casos prácticos;
- **el restaurante de ejemplo** solamente cuando el rubro sea relevante.

---

## 1.6 Evidencia funcional

No deducir automáticamente el funcionamiento de un control solamente por su apariencia.

Una captura puede demostrar que un botón existe, pero no necesariamente todo lo que ocurre al presionarlo.

Cuando este archivo documenta expresamente un comportamiento, ese comportamiento puede explicarse aunque una captura individual no muestre todo el resultado.

Cuando ni las capturas ni este documento confirmen un comportamiento:

**no inventarlo.**

---

# 2. Acceso y creación de prueba

## Propósito

La pantalla inicial permite crear un espacio de prueba de Todoaldía y preparar el negocio para comenzar a utilizar la plataforma.

La prueba tiene una duración de **14 días**.

No se solicita tarjeta al momento del registro.

---

## Información inicial

La pantalla puede solicitar:

- Tu nombre
- WhatsApp
- Correo
- Nombre del negocio
- Rubro
- Dirección de Todoaldía

La dirección corresponde al espacio que utilizará el negocio dentro de Todoaldía y se genera a partir del nombre ingresado, pudiendo ajustarse desde el formulario cuando la interfaz lo permita.

---

## Rubro

El usuario puede seleccionar el tipo de negocio.

Entre las opciones observadas se encuentran:

### Restaurante
Orientado a:

- carta digital;
- pedidos;
- cocina;
- delivery.

### Minimarket
Orientado a:

- caja;
- inventario;
- ventas del día.

### Tienda online
Orientado a:

- catálogo;
- carrito;
- pedidos por internet.

---

## Datos de ejemplo

El espacio de prueba puede comenzar con información de ejemplo relacionada con el rubro seleccionado.

La interfaz indica que puede incluir:

- productos;
- clientes;
- ventas de ejemplo.

El propósito es permitir que el usuario conozca Todoaldía sin tener que configurar absolutamente todo antes de explorar la plataforma.

---

## Acción principal

**Crear mi prueba gratis**

Permite continuar con la creación del espacio de prueba después de completar la información requerida.

La interfaz indica que posteriormente se envía un correo para confirmar.

---

## Secuencia de uso

1. Ingresa tus datos.
2. Escribe el nombre del negocio.
3. Selecciona el rubro que mejor representa su funcionamiento.
4. Revisa la dirección generada.
5. Selecciona **Crear mi prueba gratis**.
6. Continúa con la confirmación indicada por Todoaldía.

---

## Ejemplo práctico

El negocio de ejemplo quiere conocer Todoaldía antes de comenzar a utilizarlo de forma permanente.

Completa los datos de contacto, indica el nombre del negocio, selecciona su rubro y revisa la dirección creada para su espacio.

Después selecciona **Crear mi prueba gratis** para comenzar el periodo de 14 días.

---

# 3. Caja

> Este módulo debe completarse y ajustarse utilizando las capturas existentes en `reference/screenshots/caja/`.

## Propósito

Caja reúne las acciones necesarias para registrar una venta desde el punto de atención del negocio.

Su documentación debe enseñar el flujo visible de una venta sin asumir comportamientos que todavía no hayan sido confirmados.

---

## Vista principal

Al documentar esta pantalla, identificar mediante las capturas:

- productos disponibles;
- categorías o agrupaciones visibles;
- búsqueda, si existe;
- contenido de la venta;
- cantidades;
- precios;
- total;
- acciones disponibles;
- controles para avanzar con la venta.

Utilizar siempre los nombres exactos mostrados por la interfaz.

---

## Flujo principal

La explicación debe seguir el orden natural observado en las capturas.

Conceptualmente:

**Entrar a Caja → seleccionar productos → revisar la venta → continuar con la operación**

No agregar pasos adicionales si todavía no están respaldados por las capturas o por información funcional confirmada.

---

## Selección de productos

Explicar:

- dónde aparecen los productos;
- cómo se identifican;
- qué información muestra cada producto;
- qué ocurre visualmente cuando forma parte de la venta, solamente si esto está confirmado.

---

## Revisión de la venta

Explicar el área donde el usuario puede revisar los productos incorporados a la operación.

Identificar mediante las capturas:

- nombre;
- cantidad;
- precio;
- subtotal o total;
- controles disponibles.

No asumir acciones que no estén confirmadas.

---

## Ejemplo práctico

El negocio de ejemplo recibe una venta.

Primero ingresa a **Caja** y localiza los productos solicitados por el cliente.

Añade los productos correspondientes y revisa la información de la venta antes de continuar con la siguiente acción disponible en la interfaz.

Este ejemplo deberá ampliarse cuando el flujo completo de Caja haya sido confirmado.

---

# 4. Clientes

## Propósito

El módulo **Clientes** permite consultar y administrar la información de las personas que compran en el negocio.

También entrega indicadores que ayudan a reconocer comportamiento de compra y clientes que podrían requerir seguimiento.

---

## Vista principal

El encabezado indica:

**Clientes**

Descripción:

> Quién compra, cuánto y hace cuánto no vuelve.

---

## Indicadores

La vista incluye:

### Clientes registrados
Cantidad de clientes registrados.

### Frecuentes
Clientes identificados como frecuentes.

### Ticket promedio
Valor promedio mostrado para las compras.

### Por recuperar
Clientes que pueden requerir seguimiento según los criterios utilizados por el sistema.

---

## Búsqueda

Permite buscar utilizando información como:

- cliente;
- teléfono;
- zona.

---

## Filtros

La interfaz presenta:

- Todos
- Frecuentes
- Nuevos
- Sin pedir hace rato
- Con cuenta

Estos filtros permiten reducir la lista según el tipo o situación del cliente.

---

## Tabla

La tabla contiene:

- Cliente
- Segmento
- Su favorito
- Pedidos
- Gastado
- Último

---

## Acciones de contacto

Al interactuar con los controles correspondientes pueden aparecer:

### WhatsApp
**Enviar mensaje por WhatsApp**

### Correo
**Enviar correo**

### Editar
Abre la edición del cliente.

---

## Nuevo cliente

Seleccionar **Nuevo** abre el formulario de creación.

Campos confirmados:

- Nombre
- WhatsApp
- Correo
- Dirección
- Tiene cuenta en el sitio

Acciones:

- Cancelar
- Guardar cliente

---

## Editar cliente

El lápiz abre **Editar cliente**.

Permite modificar:

- Nombre
- WhatsApp
- Correo
- Dirección
- Tiene cuenta en el sitio

Las métricas relacionadas con compras y pedidos son calculadas por el sistema y no se editan desde este formulario.

Acciones:

- Eliminar
- Cancelar
- Guardar cliente

---

## Exportación

El botón **Excel** exporta los datos de clientes en formato **CSV** para analizarlos en una hoja de cálculo.

---

## Secuencia de uso

**Buscar cliente → revisar información → contactar o editar → guardar cambios**

---

## Ejemplo práctico

El negocio necesita actualizar los datos de contacto de un cliente.

Primero lo busca desde **Clientes**, localiza su registro y selecciona el lápiz de edición.

Actualiza la información necesaria y finaliza con **Guardar cliente**.

Si solamente necesita comunicarse con él, puede utilizar las acciones disponibles de WhatsApp o correo.

---

# 5. Productos

## Propósito

El módulo **Productos** permite administrar los productos y servicios que el negocio ofrece.

Desde aquí se pueden revisar productos existentes, crear nuevos y editar su configuración.

---

## Vista principal

La tabla muestra:

- Producto
- Vendidos
- Precio y costo
- Margen
- Se vende
- Web

El lápiz permite editar un producto existente.

---

## Crear producto

Seleccionar **Nuevo producto** abre el proceso de creación.

La interfaz incluye una vista previa que permite observar cómo verá el cliente parte de la información introducida.

También existe una sección:

**PARA PODER GUARDAR**

que identifica información pendiente como:

- Nombre y categoría
- Precio de venta

Los elementos pendientes pueden dirigir al campo correspondiente cuando esta acción esté disponible.

---

## Lo básico

Incluye:

### Imagen
Permite cargar la fotografía del producto.

Referencia mostrada:

- 1000 × 1000 px o superior;
- cuadrada o 4:3;
- hasta 15 MB.

### Nombre

Nombre del producto.

### Categoría

Clasificación del producto.

### Descripción

Texto que podrá leer el cliente en el sitio web.

Límite observado:

**2000 caracteres.**

---

## Precio y venta

### Tipo de producto

**Físico**
Con inventario y despacho.

**Servicio**
Sin stock ni envío.

### ¿Cómo se vende?

**Por unidad**
Se cobra por pieza o combo.

**A granel**
Se cobra por peso o volumen.

### Valores

- Costo por unidad (CLP)
- Precio de venta (CLP)

---

## Variantes

Las variantes representan versiones del mismo producto.

Ejemplos:

- talla;
- color;
- tamaño.

Cada combinación puede definir información propia cuando la interfaz así lo permita.

La propia interfaz diferencia las variantes de los agregados adicionales.

---

## Pack y opciones

Permite configurar agregados que acompañan al producto.

Ejemplos mostrados:

- Garantía extendida
- Envoltorio de regalo
- Accesorios

Para tamaños o colores debe utilizarse **Variantes**.

---

## Web y stock

Incluye opciones como:

- Visible en el sitio web
- Controlar el stock de este producto
- Peso para envío (kg)
- Especificaciones

El peso puede utilizarse para el cálculo de tarifas de envío configuradas en el sistema.

También puede añadirse información mediante:

**Agregar especificación**

---

## Editar producto

El lápiz abre **Editar producto**.

La edición utiliza los mismos grupos principales de configuración disponibles durante la creación.

Acciones confirmadas:

- Eliminar
- Duplicar
- Cancelar
- Guardar producto

---

## Secuencia de uso

**Crear producto → completar información básica → definir precio y venta → configurar variantes/opciones si corresponde → configurar web y stock → guardar**

---

## Ejemplo práctico

El negocio quiere incorporar un nuevo producto.

Carga una imagen, escribe el nombre, selecciona su categoría y agrega una descripción.

Después define el costo y el precio de venta.

Si el producto tiene diferentes versiones, utiliza **Variantes**. Si ofrece agregados adicionales, utiliza **Pack y opciones**.

Finalmente revisa la configuración de **Web y stock** y guarda el producto.

---

# 6. Gastos

## Propósito

El módulo **Gastos** permite registrar y consultar los costos asociados al funcionamiento del negocio.

---

## Vista principal

El encabezado muestra el mes correspondiente y un resumen de los gastos.

Indicadores:

- Gasto del mes
- Costos fijos
- Costos variables
- Por pagar

---

## Búsqueda

Permite buscar por:

- gasto;
- proveedor;
- categoría.

---

## Filtros

- Todos
- Fijos
- Variables
- Por pagar
- Sin comprobante

---

## Tabla

Incluye:

- Gasto
- Tipo
- Categoría
- Fecha
- Monto
- Comprobante

El lápiz permite acceder a la edición cuando corresponda.

---

## Categorías de gastos

Seleccionar **Categorías** abre **Categorías de gastos**.

Las categorías pueden:

- agregarse;
- editarse;
- eliminarse.

Renombrar o eliminar una categoría no modifica el nombre guardado en gastos registrados previamente.

Para crear una se utiliza:

- Nueva categoría
- Agregar

---

## Registrar gasto

Seleccionar **Nuevo gasto** abre **Registrar gasto**.

### Tipo

**Variable**
Cambia mes a mes.

**Fijo**
Se repite cada mes.

### Información

- Categoría
- Proveedor
- Monto (CLP)
- Fecha
- Por pagar / Pagado
- Descripción opcional

La descripción admite hasta **200 caracteres** según la interfaz observada.

---

## Productos asociados

La sección **¿Qué compraste?** permite asociar productos mediante:

**Agregar producto**

La interfaz indica:

> Entra al inventario al guardar.

---

## Comprobante

Puede añadirse un comprobante o factura mediante:

**Subir archivo o foto**

La interfaz admite como ejemplos:

- boleta;
- factura;
- captura de transferencia;
- PDF;
- imagen.

---

## Exportación

El botón **Excel** exporta los gastos en formato **CSV** para analizarlos en una hoja de cálculo.

---

## Secuencia de uso

**Nuevo gasto → definir tipo → completar datos → agregar productos si corresponde → adjuntar comprobante → guardar**

---

## Ejemplo práctico

El negocio paga una compra de insumos.

Selecciona **Nuevo gasto**, lo clasifica como fijo o variable según corresponda, indica categoría, proveedor, monto y fecha.

Si la compra incorpora productos al inventario, utiliza **Agregar producto**.

Finalmente adjunta el comprobante y guarda el gasto.

---

# 7. Configuración — Negocio

## Propósito

Esta sección reúne configuraciones generales relacionadas con la identidad y funcionamiento comercial del negocio.

Incluye:

1. Datos del negocio
2. Banners
3. Métodos de pago
4. Canales de venta
5. Tienda online
6. Promociones
7. WhatsApp Business

Una secuencia práctica recomendada es:

**Datos del negocio → Métodos de pago → Canales de venta → WhatsApp Business → Tienda online → Banners → Promociones**

---

# 7.1 Datos del negocio

La interfaz indica que estos datos aparecen en:

- panel;
- sitio web;
- recibo impreso.

Campos:

- Logo del negocio
- Nombre comercial
- Razón social
- RUT
- Dirección
- Ciudad
- Teléfono
- Correo
- Mensaje del recibo

Acción:

**Guardar cambios**

---

## Logo

Formatos indicados:

- PNG
- JPG
- WebP

Referencia:

- imagen cuadrada;
- 400 × 400 o superior;
- hasta 15 MB.

---

## Horario de atención

Permite configurar los días y horarios de atención.

Cada día puede disponer de:

- abierto/cerrado;
- hora de apertura;
- hora de cierre;
- cierre al medio.

El horario configurado se muestra en el sitio destinado al cliente.

No documentar el comportamiento del icono de copia hasta que sea confirmado.

---

# 7.2 Banners

Permite administrar banners del sitio público.

Puede incluir:

### Desktop
Referencia recomendada:

**1920 × 550**

### Mobile
Opcional.

Referencia recomendada:

**1080 × 500**

Si no existe una imagen móvil, la interfaz indica que se utiliza un recorte de la versión de escritorio.

---

## Acción al hacer clic

Un banner puede configurarse para realizar una acción al seleccionarlo.

Ejemplo observado:

**Ir a una categoría**

Si una categoría enlazada deja de existir, la interfaz puede advertirlo.

También existe:

**Agregar banner**

---

# 7.3 Métodos de pago

Define qué medios acepta el negocio al cobrar.

Opciones observadas:

### Efectivo
Se cobra al entregar o en caja.

### Transferencia
Utiliza los datos bancarios configurados.

### Tarjeta
Débito o crédito con máquina.

---

## Datos para transferencias

Incluye:

- Titular
- RUT
- Banco
- Tipo de cuenta
- Número de cuenta

El titular y RUT provienen de los datos correspondientes del negocio según la interfaz.

Acción:

**Guardar cambios**

---

# 7.4 Canales de venta

Permite activar o desactivar canales utilizados por el negocio.

La interfaz advierte que siempre debe quedar al menos uno disponible.

Canales:

- Sitio web
- WhatsApp
- Teléfono
- En el local

Apagar un canal oculta aquello que depende de él según la advertencia mostrada por la interfaz.

---

# 7.5 Tienda online

Permite configurar métodos de entrega y costos relacionados con la tienda pública.

Opciones observadas:

### Retiro en tienda

### Delivery local

El cliente introduce su dirección.

El cálculo utiliza la configuración de **Zonas de reparto**.

### Envío por pagar

El cliente paga los productos y el costo del envío se informa posteriormente por WhatsApp según la descripción de la interfaz.

---

## Courier

Se observan configuraciones para servicios como:

- Bluexpress
- Starken

Pueden incluir:

- activación;
- tarifa base;
- costo por kg.

El cálculo mostrado conceptualmente utiliza:

**tarifa base + costo por kg × peso**

No extender esta explicación más allá de los campos confirmados.

---

# 7.6 Promociones

Las promociones activas pueden aplicarse en Caja y/o sitio web según su configuración.

Acción:

**Nueva promoción**

---

## Crear promoción

Campos y opciones observados:

### Nombre de la promoción

### Tipo

- % descuento
- $ descuento
- 2×1
- Envío gratis

### Dónde aplica

- Caja (POS)
- Sitio web

### Aplica a

- Todo el catálogo
- Categorías
- Productos

### Programación

Puede incluir:

- días de la semana;
- hora desde;
- hora hasta;
- fecha desde;
- fecha hasta.

Acciones:

- Cancelar
- Guardar promoción

Las promociones existentes pueden mostrar:

- nombre;
- descuento;
- canales;
- estado;
- activación;
- editar;
- eliminar.

---

# 7.7 WhatsApp Business

Permite configurar los datos del canal de WhatsApp.

Campos:

- Número
- Nombre visible

Acción:

**Guardar cambios**

Diferencia importante:

**WhatsApp Business** configura los datos del canal.

**Canales de venta** determina si WhatsApp se encuentra activo como canal.

---

# 8. Configuración — Operación

La sección Operación contiene:

1. Zonas de reparto
2. Repartidores
3. Red de reparto
4. Impresoras

Las referencias actualizadas de 11-configuracion/operacion permiten documentar las cuatro secciones dentro del alcance visible. Véase la actualización al final de este documento.

No inventar el funcionamiento de:

- Repartidores;
- Red de reparto;
- Impresoras.

---

# 8.1 Zonas de reparto

## Propósito

Permite ubicar el negocio, dibujar las áreas donde se realizan despachos y asignar un precio a cada una.

El flujo está dividido en:

**1. Ubicar local → 2. Dibujar zonas → 3. Revisar**

---

## Paso 1 — Ubicar local

Sección:

**Ubicación del local**

Campo:

**Dirección de tu local**

Acción:

**Ubicar en el mapa**

Después de localizarlo se muestran las coordenadas correspondientes.

La interfaz permite ajustar el punto arrastrando el pin cuando sea necesario.

Este punto funciona como referencia para crear las zonas.

---

## Paso 2 — Dibujar zonas

La interfaz muestra el mapa y el panel:

**Tus zonas**

Acción:

**+ Dibujar zona**

Al iniciar el dibujo, el usuario puede marcar vértices sobre el mapa para trazar la forma de la zona.

Cada zona dispone de un color para facilitar su identificación.

También puede tener:

- nombre;
- precio;
- acción de eliminación.

El principio funcional es:

**ubicación del negocio + área dibujada + tarifa = zona de reparto**

La zona puede adaptarse al área real de servicio y no necesita representar un círculo perfecto.

---

## Paso 3 — Revisar

La pantalla muestra conjuntamente las zonas creadas y sus precios.

Su propósito es revisar la configuración antes de guardarla.

---

## Fuera de las zonas

La sección **Cubrir el resto** define qué ocurre con una dirección situada fuera de las zonas dibujadas.

Opciones:

### Cobrar un precio único fuera de las zonas

Permite continuar ofreciendo reparto fuera de las áreas dibujadas utilizando una tarifa general.

### No repartir fuera de las zonas

Restringe el servicio a las zonas configuradas.

No inventar campos adicionales para la tarifa si no están presentes en la captura correspondiente.

---

## Envío gratis desde

Permite configurar un monto de compra a partir del cual se aplica envío gratuito.

La opción:

**Sin envío gratis**

indica que no se utilizará ese umbral.

---

## Guardar

Acciones finales:

- ← Atrás
- Guardar cambios

---

## Secuencia completa

**Ubicar local → Dibujar zonas → Revisar → definir comportamiento fuera de las zonas → configurar envío gratuito si corresponde → Guardar cambios**

---

## Ejemplo práctico

El negocio de ejemplo realiza despachos en diferentes sectores.

Primero ubica el local en el mapa.

Luego dibuja una zona cercana y le asigna un despacho de **$2.000**. Crea una segunda zona más alejada con un precio de **$2.500**.

Después revisa ambas áreas, decide si realizará entregas fuera de ellas y configura el envío gratuito si corresponde.

Finalmente selecciona **Guardar cambios**.

---

# 9. Relaciones importantes entre módulos

Estas relaciones deben explicarse cuando ayuden a comprender una tarea.

## Tienda online ↔ Zonas de reparto

**Delivery local** utiliza la configuración creada en **Zonas de reparto**.

## Canales de venta ↔ WhatsApp Business

**Canales de venta** activa o desactiva WhatsApp.

**WhatsApp Business** configura los datos utilizados por ese canal.

## Producto ↔ Tienda online

El peso configurado para un producto puede intervenir en el cálculo de envío cuando se utilizan tarifas basadas en peso.

## Gastos ↔ Inventario

La interfaz de registro de gastos indica que los productos añadidos en **¿Qué compraste?** entran al inventario al guardar.

---

# 10. Reglas para Codex

Antes de documentar un módulo:

1. Leer este archivo.
2. Revisar `reference/README.md`.
3. Examinar todas las capturas disponibles para ese módulo.
4. Comparar el texto confirmado con lo visible.
5. Diseñar la secuencia editorial.
6. Seleccionar las capturas necesarias.
7. Implementar el HTML.
8. Revisar visualmente el resultado.

Este archivo es la fuente de verdad para comportamientos confirmados por el proyecto.

Las capturas son la fuente de verdad para:

- apariencia;
- posición;
- nombres visibles;
- estados visibles;
- estructura visual.

Si existe una contradicción:

**no resolverla mediante una suposición.**

Registrar la discrepancia para revisión.

---

# 11. Regla de cierre de módulo

Siempre que exista información suficiente, finalizar el módulo con una secuencia o ejemplo práctico.

La finalidad es que el usuario pase de:

> “Entiendo qué hace cada botón”

a:

> “Entiendo cómo utilizar estas funciones juntas para completar una tarea.”

El ejemplo debe ser breve, concreto y basado exclusivamente en funciones ya explicadas.

---

# 12. Estado documental

## Con información suficiente

- Acceso / prueba
- Clientes
- Productos
- Gastos
- Configuración → Negocio
- Configuración → Operación → Zonas de reparto

## En validación mediante capturas

- Caja

## Pendientes de documentación funcional

- Configuración → Operación → Repartidores
- Configuración → Operación → Red de reparto
- Configuración → Operación → Impresoras

No completar las secciones pendientes mediante inferencias.

## Criterio común: botón Excel

El botón **Excel** exporta datos en formato **CSV** para su análisis en una hoja de cálculo. Se conserva el nombre visible del botón y se explica el formato real de exportación en todos los módulos donde aparezca, incluido el historial del módulo caja. Confirmado por el usuario.


### Impresión desde el historial de caja

El ícono de impresora al extremo derecho de cada fila del historial permite imprimir el cierre de turno correspondiente. Confirmado por el usuario y respaldado por `screenshots/5-caja/modulo-caja-vista-historial-imprimir-registro.png`.


## Inventario actualizado del menú — 10 de septiembre de 2026

Según las nuevas capturas de la carpeta 1-acceso, el menú presenta 12 módulos: 10 disponibles y 2 con etiqueta PRONTO.

| Grupo | Disponibles | PRONTO | Total |
| --- | --- | --- | --- |
| Servicio | pedidos, preparación, mesas | Ninguno | 3 |
| Operación diaria | caja, tienda | inbox | 3 |
| Gestión | ventas, productos, clientes, gastos, configuración | reportes | 6 |

Orden visible en Operación diaria: caja → inbox → tienda. El módulo tienda se describe como pedidos online con envío por courier. Su disponibilidad no implica que su documentación esté completa: sus referencias detalladas aún esperan actualización.

Referencias: acceso-menu-principal-operacion-servicio.png, acceso-menu-principal-operacion-diaria.png y acceso-menu-principal-gestion.png. Este inventario prevalece sobre las descripciones anteriores del menú.

## Módulo tienda — referencias 6-tienda

El módulo tienda reúne pedidos online pagados con envío por courier, delivery local o retiro. Sus capturas muestran las vistas Tablero y Listado vacías, indicadores Ventas online hoy, Pedidos pagados hoy, Por despachar y En tránsito, buscador por código/cliente/producto y filtros Todos, Bluexpress, Starken, Chilexpress, Delivery local, Retiro y Devoluciones.

La presencia de un filtro Devoluciones no confirma cómo se procesa una devolución. No hay capturas de registros ni acciones sobre un pedido individual. El recorrido introductorio explica únicamente el propósito, los indicadores y la consulta visibles.

## Alcance de Gestión actualizado — referencias 7 a 11

Las capturas descriptivas de 7-ventas, 8-productos, 9-clientes y 10-gastos respaldan el recorrido incorporado. La carpeta 11-configuracion ahora respalda Negocio, Operación y Sistema, según la actualización siguiente.

Ventas incluye selección Hoy/Semana/Mes/Todo, indicadores, ventas por canal, listado, exportación CSV mediante Excel e impresión por registro. Productos incluye catálogo, categorías, alta/edición, precios, variantes, pack/opciones, web/stock, importación CSV, stock y movimientos. Clientes incluye filtros, datos de compra, contacto y ficha. Gastos incluye tipos, estados de pago, comprobantes, compra de productos y categorías.

Este alcance reemplaza los avisos anteriores que dejaban todo el grupo Gestión pendiente. La pantalla actual de clientes muestra Frecuentes: ocho pedidos o más, y Por recuperar: más de treinta días sin pedir. Se explica como información de la referencia actual.


## Configuración completada con las referencias nuevas

Esta actualización reemplaza los estados documentales anteriores que dejaban Repartidores, Red de reparto, Impresoras y otros ajustes pendientes. Se revisaron las 27 capturas de 11-configuracion. El orden sigue el menú actual: Negocio → Operación → Sistema.

- Negocio: datos y horario; banners (escritorio, móvil, orden y destino); métodos de pago; canales; tienda online (modalidades, tarifas, peso por defecto y franja); promociones (beneficio, canales, alcance y programación); WhatsApp Business.
- Operación: zonas (ubicación, dibujo, tarifas, revisión, cobertura exterior y envío gratis); repartidores (modo visible, espera antes de avisar a la red, datos del equipo, disponibilidad e invitación); red (estado, habilitación y campos de conexión); impresoras (vistas previas, pruebas, QZ Tray, certificado, impresora y copias por documento, modo térmico, eventos automáticos y agente local).
- Sistema: Usuarios es un apartado del módulo configuración. Se muestran usuario, rol, último acceso y estado activo. Las cuentas con movimientos se desactivan en lugar de borrarse. Nuevo usuario pide nombre, correo y rol; Crear e invitar envía correo para crear una contraseña. El listado muestra Invitación pendiente y Reenviar.

No se documentan opciones ocultas del selector de roles ni del modo de reparto, ni pasos de instalación o resultados de conexión ausentes. La impresión de cierre de turno mantiene el significado confirmado por el usuario. Las capturas de red muestran credenciales abreviadas; no se trasladan sus valores a la redacción.
