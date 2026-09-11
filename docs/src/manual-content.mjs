export const pages = [
  {
    "id": "portada",
    "group": "Primeros pasos",
    "title": "Primeros pasos",
    "lead": "Un recorrido por tu restaurante,\ndel pedido a la mesa.",
    "blocks": [],
    "cover": true
  },
  {
    "id": "proposito",
    "group": "Introducción",
    "title": "Bienvenido al recorrido de tu restaurante",
    "lead": "Todo al Día reúne las herramientas que acompañan una atención: recibir un pedido, prepararlo y seguir el trabajo del salón.",
    "blocks": [
      {
        "title": "Un trabajo conectado",
        "text": "Una atención puede comenzar en una mesa y continuar en el módulo preparación. Los módulos reúnen las funciones que intervienen en esos distintos momentos."
      },
      {
        "title": "Cómo seguiremos el recorrido",
        "text": "Después de ingresar, conoceremos los grupos del menú: Servicio, Operación diaria y Gestión. Dentro de cada grupo, presentaremos sus módulos en orden y cerraremos cada uno con una actividad de ejemplo."
      },
      {
        "title": "Las imágenes como referencia",
        "text": "Las capturas muestran un negocio de ejemplo. Sus datos y cantidades pueden variar; las pantallas que aún faltan se señalan como pendientes."
      }
    ],
    "flow": [
      "Ingresar",
      "Ubicarse",
      "Conocer un módulo",
      "Actividad"
    ]
  },
  {
    "id": "indice",
    "group": "Antes de comenzar",
    "title": "Nuestro recorrido · 1",
    "lead": "Desde el menú de inicio, cada módulo sigue la misma secuencia: su propósito, sus funciones y una actividad de ejemplo.",
    "blocks": [],
    "toc": true,
    "tocIndex": 0
  },
  {
    "id": "indice-2",
    "group": "Antes de comenzar",
    "title": "Nuestro recorrido · 2",
    "lead": "Continuación del índice. Cada entrada enlaza con su página del recorrido.",
    "blocks": [],
    "toc": true,
    "tocIndex": 1
  },
  {
    "id": "indice-3",
    "group": "Antes de comenzar",
    "title": "Nuestro recorrido · 3",
    "lead": "Continuación del índice. Cada entrada enlaza con su página del recorrido.",
    "blocks": [],
    "toc": true,
    "tocIndex": 2
  },
  {
    "id": "sesion",
    "group": "0 · Inicio de sesión",
    "title": "El primer encuentro con el panel",
    "lead": "La pantalla de ingreso permite identificarse con una cuenta existente antes de abrir el panel del negocio.",
    "blocks": [
      {
        "title": "Correo y contraseña",
        "text": "Los campos <strong>Correo</strong> y <strong>Contraseña</strong> reúnen los datos de acceso. La contraseña aparece oculta en la captura."
      },
      {
        "title": "Entrar al negocio",
        "text": "El botón <strong>Entrar</strong> continúa el inicio de sesión. A continuación conoceremos el menú principal que recibe al usuario."
      }
    ],
    "images": [
      {
        "asset": "login",
        "caption": "Detalle del formulario de inicio de sesión."
      }
    ],
    "flow": [
      "Correo y contraseña",
      "Entrar",
      "Inicio"
    ]
  },
  {
    "id": "inicio",
    "group": "1 · Acceso",
    "title": "El menú organiza el recorrido",
    "lead": "El menú reúne 12 módulos: 10 disponibles y 2 marcados como PRONTO, distribuidos en tres grupos.",
    "blocks": [
      {
        "title": "Disponibles",
        "text": "Módulos pedidos, preparación, mesas, caja, tienda, ventas, productos, clientes, gastos y configuración."
      },
      {
        "title": "Próximamente",
        "text": "Los módulos inbox y reportes aparecen como <strong>PRONTO</strong> en el menú."
      }
    ],
    "images": [
      {
        "asset": "servicioActual",
        "caption": "Servicio · 3 módulos disponibles."
      },
      {
        "asset": "operacionActual",
        "caption": "Operación diaria · 2 disponibles y 1 marcado como PRONTO."
      },
      {
        "asset": "gestionActual",
        "caption": "Gestión · 5 disponibles y 1 marcado como PRONTO."
      }
    ],
    "wide": true
  },
  {
    "id": "modulos",
    "group": "Los módulos del restaurante",
    "title": "Para qué sirven los módulos",
    "lead": "Los módulos reúnen herramientas con un propósito común. El menú los agrupa según la parte del trabajo del restaurante que acompañan.",
    "blocks": [
      {
        "title": "Servicio · acompañar la atención",
        "text": "Sus módulos ayudan a recibir solicitudes, coordinar la preparación y atender el salón. Este es el primer grupo que recorreremos."
      },
      {
        "title": "Operación diaria · sostener la jornada",
        "text": "Sus módulos reúnen tareas del funcionamiento cotidiano del negocio, como los cobros y el cierre del turno."
      },
      {
        "title": "Gestión · conocer y organizar el negocio",
        "text": "Sus módulos permiten consultar información y mantener los datos y ajustes del restaurante. Los conoceremos después de la operación diaria, cuando estén disponibles sus referencias actualizadas."
      }
    ],
    "flow": [
      "Servicio",
      "Operación diaria",
      "Gestión"
    ],
    "overview": true
  },
  {
    "id": "grupo-servicio",
    "group": "Grupos del restaurante",
    "title": "Servicio",
    "lead": "Este grupo reúne 3 módulos disponibles para acompañar la atención, desde la llegada de una solicitud hasta el trabajo del salón.",
    "blocks": [
      {
        "title": "El recorrido de este grupo",
        "text": "El módulo pedidos reúne las solicitudes; el módulo preparación acompaña al equipo que las prepara; el módulo mesas organiza la atención del salón."
      },
      {
        "title": "Cómo lo conoceremos",
        "text": "En cada módulo veremos su propósito y sus funciones, y terminaremos con una actividad que enlaza con el siguiente."
      }
    ],
    "divider": true,
    "images": [
      {
        "asset": "servicioActual",
        "caption": "Servicio: módulos pedidos, preparación y mesas."
      }
    ],
    "wide": true
  },
  {
    "id": "pedidos",
    "group": "Servicio · Módulo Pedidos",
    "title": "Módulo Pedidos: acompañar cada solicitud",
    "lead": "Comenzamos por Servicio, el primer grupo del menú. Su primer módulo es el módulo pedidos: reúne las solicitudes del restaurante y ayuda a seguir su atención.",
    "blocks": [
      {
        "title": "Recibir y organizar",
        "text": "La franja de nuevos pedidos ofrece <strong>Aceptar</strong> y <strong>Aceptar todos</strong>. Las columnas ordenan el trabajo en En preparación, Listos y En ruta."
      },
      {
        "title": "Buscar y consultar",
        "text": "El buscador ayuda a encontrar una solicitud. <strong>Tablero</strong> muestra tarjetas y <strong>Listado</strong> organiza la información por filas; al abrir un pedido se consulta su detalle."
      }
    ],
    "images": [
      {
        "asset": "pedidos",
        "caption": "Vista «Pedidos en vivo» del módulo Pedidos, en el grupo Servicio."
      }
    ],
    "wide": true
  },
  {
    "id": "estados-pedidos",
    "group": "Servicio · Módulo Pedidos",
    "title": "Cada columna señala una tarea diferente",
    "lead": "Separar los estados permite reconocer qué necesita cada pedido: terminar su preparación, continuar la entrega o confirmar que llegó a destino.",
    "blocks": [
      {
        "title": "En preparación",
        "text": "Reúne los pedidos que están en la etapa de preparación. Por ejemplo, una solicitud cuyos productos aún se preparan permanece aquí; <strong>Marcar listo</strong> permite señalar el siguiente paso."
      },
      {
        "title": "Listos",
        "text": "Identifica pedidos que ya terminaron su preparación. La atención continúa según su modalidad: en el ejemplo de delivery aparece <strong>Despachar</strong> para seguir con el envío."
      },
      {
        "title": "En ruta",
        "text": "Muestra los pedidos que van hacia su destino. En el ejemplo de delivery, <strong>Marcar entregado</strong> permite confirmar la entrega. Este estado describe el servicio, no si el pedido está pagado."
      }
    ],
    "images": [
      {
        "asset": "pedidos",
        "caption": "Las columnas del módulo pedidos distinguen preparación, pedidos listos y pedidos en ruta."
      }
    ],
    "wide": true
  },
  {
    "id": "detalle-pedido",
    "group": "Servicio · Módulo Pedidos",
    "title": "Los datos que acompañan al pedido",
    "lead": "El detalle reúne lo necesario para comprender la solicitud y reconocer su siguiente paso.",
    "blocks": [
      {
        "title": "Qué se pidió",
        "text": "El número identifica la solicitud. El canal, los productos, las cantidades y las notas ayudan a entender cómo llegó y qué requiere."
      },
      {
        "title": "Cómo se entrega y se paga",
        "text": "Entrega indica la modalidad y el destino cuando corresponde. Pago distingue el medio, el estado y el total: <strong>Pagado</strong> o <strong>Por cobrar</strong> son datos distintos de la etapa del servicio."
      },
      {
        "title": "Cómo continúa",
        "text": "Según el estado, aparecen acciones como <strong>Marcar listo</strong>, <strong>Despachar</strong> o <strong>Marcar entregado</strong>."
      }
    ],
    "images": [
      {
        "asset": "detalle",
        "caption": "Detalle ampliado del pedido: identificación, productos y observaciones."
      }
    ]
  },
  {
    "id": "ejemplo-pedidos",
    "group": "Servicio · Módulo Pedidos · Actividad de ejemplo",
    "title": "Acompañemos un pedido recién llegado",
    "lead": "Imaginemos que entra una solicitud mientras el restaurante atiende otros pedidos.",
    "blocks": [
      {
        "title": "1. Reconocer la solicitud",
        "text": "Podemos ubicarla entre los pedidos nuevos y abrir su detalle para leer los productos y las observaciones."
      },
      {
        "title": "2. Identificar la siguiente acción",
        "text": "Después de <strong>Aceptar</strong>, podemos seguir la solicitud en <strong>En preparación</strong>. En un ejemplo de delivery, pasará a <strong>Listos</strong> al terminar de prepararse y a <strong>En ruta</strong> al despacharse. Cada columna orienta una tarea distinta."
      },
      {
        "title": "3. Seguir con el equipo",
        "text": "Con el pedido identificado, seguiremos dentro del grupo <strong>Servicio</strong> hacia el <strong>módulo preparación</strong>, el siguiente módulo del menú."
      }
    ],
    "flow": [
      "Pedido nuevo",
      "Revisar el detalle",
      "Aceptar",
      "Módulo Preparación"
    ],
    "next": "preparacion"
  },
  {
    "id": "preparacion",
    "group": "Servicio · Módulo Preparación",
    "title": "Módulo Preparación: coordinar al equipo",
    "lead": "Continuamos en el grupo Servicio. Después del módulo pedidos, el módulo preparación ayuda al equipo a organizar el trabajo y reconocer qué está pendiente y qué está listo.",
    "blocks": [
      {
        "title": "Reconocer lo pendiente",
        "text": "Las columnas <strong>Por aceptar</strong>, <strong>Preparando</strong> y <strong>Listos</strong> ordenan los pedidos del más antiguo al más nuevo."
      },
      {
        "title": "Acompañar el avance",
        "text": "Cada tarjeta muestra productos, notas y tiempos. Al tocar los productos se van tachando; el contador indica cuántos están listos y <strong>Marcar listo</strong> permite continuar la etapa."
      }
    ],
    "images": [
      {
        "asset": "preparacion",
        "caption": "Vista general del módulo Preparación, en el grupo Servicio."
      }
    ],
    "wide": true
  },
  {
    "id": "estados-preparacion",
    "group": "Servicio · Módulo Preparación",
    "title": "Distinguir lo pendiente de lo terminado",
    "lead": "El módulo preparación utiliza la misma organización por estados para ayudar al equipo a reconocer qué debe aceptar, qué está preparando y qué ya está listo.",
    "blocks": [
      {
        "title": "Por aceptar",
        "text": "Reúne las solicitudes que esperan aceptación. Por ejemplo, un ticket recién recibido presenta <strong>Aceptar</strong> como acción para comenzar su atención."
      },
      {
        "title": "Preparando",
        "text": "Reúne el trabajo en curso. Los productos y las notas orientan la preparación; al tachar productos, el contador ayuda a reconocer el avance dentro del ticket."
      },
      {
        "title": "Listos",
        "text": "Separa los tickets cuya preparación ha terminado. Así el equipo distingue lo finalizado de lo que sigue en curso. El menú de estos tickets también ofrece <strong>Volver una etapa</strong>."
      }
    ],
    "images": [
      {
        "asset": "preparacion",
        "caption": "Por aceptar, Preparando y Listos organizan el trabajo dentro del módulo preparación."
      }
    ],
    "wide": true
  },
  {
    "id": "opciones-preparacion",
    "group": "Servicio · Módulo Preparación",
    "title": "Las funciones que acompañan al ticket",
    "lead": "El menú de tres puntos reúne opciones de consulta y apoyo para el trabajo de preparación.",
    "blocks": [
      {
        "title": "Consultar y avisar",
        "text": "Permite <strong>Ver el detalle</strong> y ofrece avisos de retraso de <strong>5 o 10 minutos</strong>, además de Marcar como no visto y Copiar los datos del pedido."
      },
      {
        "title": "Imprimir documentos",
        "text": "El apartado Imprimir distingue <strong>Orden de preparación</strong> y <strong>Ticket de pedido recibido</strong>."
      },
      {
        "title": "Revisar una etapa anterior",
        "text": "En el menú de un pedido Listo aparece también <strong>Volver una etapa</strong>."
      }
    ],
    "images": [
      {
        "asset": "opciones",
        "caption": "Menú de un pedido en la columna Preparando."
      }
    ]
  },
  {
    "id": "ejemplo-preparacion",
    "group": "Servicio · Módulo Preparación · Actividad de ejemplo",
    "title": "Sigamos un pedido que viene del salón",
    "lead": "En el módulo preparación, dentro del grupo Servicio, aparece un ticket para servir en el restaurante.",
    "blocks": [
      {
        "title": "1. Leer antes de preparar",
        "text": "Podemos reconocer los productos y revisar la observación del ticket, como la indicación sobre una porción."
      },
      {
        "title": "2. Acompañar el avance",
        "text": "En <strong>Preparando</strong>, los productos se van tachando y el contador muestra el avance. La acción <strong>Marcar listo</strong> permite distinguir el ticket terminado de los que continúan en preparación."
      },
      {
        "title": "3. Conocer el origen",
        "text": "Lo enviado desde una mesa llega a este tablero. Para conocer el origen de esa atención, continuaremos en el grupo <strong>Servicio</strong> con el <strong>módulo mesas</strong>."
      }
    ],
    "images": [
      {
        "asset": "ticket",
        "caption": "Detalle de un ticket: productos, observaciones y contador de avance."
      }
    ],
    "flow": [
      "Leer el ticket",
      "Seguir la preparación",
      "Módulo Mesas"
    ],
    "next": "mesas"
  },
  {
    "id": "mesas",
    "group": "Servicio · Módulo Mesas",
    "title": "Módulo Mesas: acompañar el salón",
    "lead": "El módulo mesas completa el grupo Servicio, después del módulo preparación. Su propósito es organizar la atención del salón y reconocer la situación de cada mesa.",
    "blocks": [
      {
        "title": "Ubicar y abrir una mesa",
        "text": "Las pestañas, como Interior y Terraza, separan las zonas. <strong>Plano</strong> muestra su distribución y <strong>Lista</strong> presenta número, capacidad y estado; desde ambas vistas se accede a una mesa."
      },
      {
        "title": "Reconocer su situación",
        "text": "La leyenda distingue Libre, Tomando pedido, En cocina, Listo para servir, Servida y Pidiendo la cuenta. Así se reconoce el momento de atención de cada mesa."
      }
    ],
    "images": [
      {
        "asset": "mesas",
        "caption": "Módulo Mesas: plano de Interior y leyenda de estados."
      }
    ],
    "wide": true
  },
  {
    "id": "editar-salon",
    "group": "Servicio · Módulo Mesas",
    "title": "Las funciones para organizar el salón",
    "lead": "Editar salón permite representar las zonas, las mesas y las referencias del espacio del restaurante.",
    "blocks": [
      {
        "title": "Organizar las zonas",
        "text": "<strong>+ Nueva zona</strong> permite incorporar otro espacio. Cada zona dispone de nombre y descripción."
      },
      {
        "title": "Distribuir las mesas",
        "text": "Las piezas se arrastran para ubicarlas. Cada toque cambia la capacidad entre <strong>2, 4 y 6 personas</strong>; <strong>+ Mesa</strong> agrega una y la × quita una pieza."
      },
      {
        "title": "Dar contexto y guardar",
        "text": "Las referencias identifican lugares como la entrada, la cocina o la caja. <strong>Listo, guardar salón</strong> permite terminar la edición."
      }
    ],
    "images": [
      {
        "asset": "editar",
        "caption": "Modo de edición de Interior y controles del plano."
      }
    ],
    "wide": true
  },
  {
    "id": "mesas-nueva-zona",
    "group": "Servicio · Módulo Mesas",
    "title": "Crear una zona para otro espacio",
    "lead": "Una zona permite reunir las mesas de un mismo sector del restaurante. Puede representar, por ejemplo, un patio o un segundo salón.",
    "blocks": [
      {
        "title": "Comenzar desde la edición",
        "text": "Dentro de <strong>Editar salón</strong>, la opción <strong>+ Nueva zona</strong> incorpora otro espacio junto a las zonas existentes. La captura muestra la nueva pestaña con cero mesas."
      },
      {
        "title": "Identificar el espacio",
        "text": "El primer campo permite darle un nombre. La descripción ayuda a reconocer su entrada, salida o forma. El plano vacío queda disponible para organizar sus mesas."
      }
    ],
    "images": [
      {
        "asset": "nuevaZona",
        "caption": "Una nueva zona seleccionada en el modo de edición del salón."
      }
    ],
    "wide": true
  },
  {
    "id": "mesas-zona-mesas",
    "group": "Servicio · Módulo Mesas",
    "title": "Añadir mesas dentro de la nueva zona",
    "lead": "Una vez identificada la zona, sus mesas y referencias permiten representar cómo se distribuye ese espacio del restaurante.",
    "blocks": [
      {
        "title": "Añadir y ubicar",
        "text": "<strong>+ Mesa</strong> agrega una mesa a la zona seleccionada. La ayuda del editor indica que las piezas se arrastran para ubicarlas y que cada toque cambia la capacidad entre <strong>2, 4 y 6 personas</strong>."
      },
      {
        "title": "Orientar y guardar",
        "text": "Las referencias, como <strong>Entrada</strong>, <strong>Salida</strong> o <strong>Ventana</strong>, ayudan a reconocer el espacio. Al terminar, <strong>Listo, guardar salón</strong> permite finalizar la edición."
      },
      {
        "title": "Un ejemplo para continuar",
        "text": "Si el restaurante habilita un patio, podemos crear esa zona, nombrarla y añadir sus mesas. Después, la atención continúa desde una mesa del salón, como veremos a continuación."
      }
    ],
    "images": [
      {
        "asset": "zonaElementos",
        "caption": "Controles de la zona: nombre, descripción, + Mesa y referencias. La captura todavía muestra el plano vacío."
      }
    ],
    "wide": true
  },
  {
    "id": "mesas-responsable",
    "group": "Servicio · Módulo Mesas",
    "title": "Elegir quién atenderá la mesa",
    "lead": "Al abrir una mesa libre, el panel permite identificar a la persona que acompañará esa atención antes de tomar el pedido.",
    "blocks": [
      {
        "title": "Reconocer la mesa",
        "text": "El encabezado muestra el número, la zona y el estado <strong>Libre</strong>. Debajo aparece la pregunta <strong>¿Quién atiende esta mesa?</strong> y las personas disponibles."
      },
      {
        "title": "Comenzar la atención",
        "text": "Al elegir al garzón, la mesa se abre para tomar el pedido. La persona seleccionada aparece en el panel, junto al tiempo de atención."
      }
    ],
    "images": [
      {
        "asset": "mesaResponsable",
        "caption": "Detalle de la selección de quien atiende; se muestra parte de la lista disponible."
      },
      {
        "asset": "mesaAyuda",
        "caption": "La indicación de la interfaz explica qué ocurre al elegir al garzón."
      }
    ],
    "pair": true
  },
  {
    "id": "mesa-pedido",
    "group": "Servicio · Módulo Mesas",
    "title": "De la mesa a la preparación",
    "lead": "Al abrir una mesa aparece el panel para tomar el pedido. Desde aquí se eligen los productos y se prepara su envío a cocina.",
    "blocks": [
      {
        "title": "Encontrar los productos",
        "text": "El campo <strong>Buscar en la carta…</strong> y las tarjetas permiten localizar lo solicitado. El encabezado identifica la mesa, la zona y el estado Tomando pedido."
      },
      {
        "title": "Revisar lo que se enviará",
        "text": "Los productos seleccionados aparecen en <strong>Por enviar</strong>, con controles para ajustar la cantidad. <strong>Enviar a cocina</strong> conecta la atención con el módulo preparación."
      }
    ],
    "images": [
      {
        "asset": "mesaAsignada",
        "caption": "Panel de una mesa con un producto por enviar a cocina."
      }
    ]
  },
  {
    "id": "mesas-seguimiento",
    "group": "Servicio · Módulo Mesas",
    "title": "Reconocer la atención desde la lista",
    "lead": "La vista Lista permite distinguir las mesas libres de las que ya comenzaron su atención dentro de la zona seleccionada.",
    "blocks": [
      {
        "title": "Las mesas disponibles",
        "text": "Las filas con el estado <strong>Libre</strong> muestran la capacidad y la indicación <strong>Toca para abrir la mesa</strong>."
      },
      {
        "title": "La atención en curso",
        "text": "En una mesa con el estado <strong>Tomando pedido</strong> aparecen la persona que atiende, el tiempo y el importe. Estos datos ayudan a reconocer quién está a cargo y en qué momento se encuentra la atención."
      }
    ],
    "images": [
      {
        "asset": "mesaSeguimiento",
        "caption": "Vista Lista con mesas libres y una mesa en el estado Tomando pedido."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-mesas",
    "group": "Servicio · Módulo Mesas · Actividad de ejemplo",
    "title": "Acompañemos una mesa durante la atención",
    "lead": "Una mesa libre recibe clientes y comienza una nueva atención en el restaurante.",
    "blocks": [
      {
        "title": "1. Ubicar la mesa",
        "text": "Podemos encontrar una mesa libre en el plano o la lista y elegir quién la atenderá. El panel pasa a <strong>Tomando pedido</strong> y muestra a la persona seleccionada."
      },
      {
        "title": "2. Conectar con el módulo Preparación",
        "text": "En el panel podemos buscar un producto, revisar su cantidad en <strong>Por enviar</strong> y reconocer el botón <strong>Enviar a cocina</strong>. El pedido continúa en el módulo preparación."
      },
      {
        "title": "3. Mirar lo que sigue",
        "text": "En la lista podemos reconocer el estado de la mesa y quién la atiende. Con este ejemplo terminamos el recorrido del módulo mesas y reunimos lo aprendido antes de pasar a la operación diaria."
      }
    ],
    "flow": [
      "Mesa libre",
      "Elegir quién atiende",
      "Tomar pedido",
      "Enviar a cocina"
    ],
    "next": "cierre-servicio",
    "images": [
      {
        "asset": "mesaAtendida",
        "caption": "Mesa abierta: responsable de la atención, estado y productos disponibles."
      }
    ]
  },
  {
    "id": "cierre-servicio",
    "group": "Cierre del grupo Servicio",
    "title": "Del salón al siguiente momento de la jornada",
    "lead": "Hasta aquí conocimos cómo se conectan los módulos que acompañan la atención del restaurante.",
    "blocks": [
      {
        "title": "Recibir y preparar",
        "text": "El módulo pedidos permite seguir las solicitudes por estado. El módulo preparación ayuda al equipo a reconocer lo pendiente, lo que está en curso y lo que ya está listo."
      },
      {
        "title": "Organizar y atender el salón",
        "text": "En el módulo mesas recorrimos las zonas, la distribución de mesas, la elección de quien atiende y la toma del pedido para enviarlo a cocina."
      },
      {
        "title": "Continuar con la operación diaria",
        "text": "El siguiente grupo reúne el trabajo cotidiano de caja. Comenzaremos por el módulo caja para conocer la apertura del turno, las ventas, los movimientos de efectivo y el cierre."
      }
    ],
    "flow": [
      "Servicio",
      "Atención del restaurante",
      "Operación diaria"
    ],
    "divider": true
  },
  {
    "id": "grupo-operacion",
    "group": "Grupos del restaurante",
    "title": "Operación diaria",
    "lead": "Después de Servicio, pasamos a Operación diaria: 3 módulos en el orden del menú, 2 disponibles y 1 marcado como PRONTO.",
    "blocks": [
      {
        "title": "Módulo Caja",
        "text": "Acompaña los cobros y el cierre de turno. Su recorrido se desarrolla a continuación."
      },
      {
        "title": "Módulo Inbox · PRONTO",
        "text": "El menú lo presenta para WhatsApp e Instagram, todavía marcado como PRONTO."
      },
      {
        "title": "Módulo Tienda",
        "text": "Reúne pedidos online pagados con envío por courier, delivery local o retiro. Lo conoceremos después del módulo caja."
      }
    ],
    "divider": true,
    "images": [
      {
        "asset": "operacionActual",
        "caption": "Operación diaria: módulos caja, inbox (PRONTO) y tienda."
      }
    ],
    "wide": true
  },
  {
    "id": "caja",
    "group": "Operación diaria · Módulo Caja",
    "title": "Módulo Caja: acompañar el turno",
    "lead": "El módulo caja es el primer módulo de Operación diaria. Reúne las ventas y el control del efectivo durante el turno.",
    "blocks": [
      {
        "title": "Comenzar con el fondo inicial",
        "text": "Cuando la caja está cerrada, se indica el <strong>Efectivo inicial en el cajón</strong>. La pantalla aclara que este fondo sirve para dar vuelto y no cuenta como venta."
      },
      {
        "title": "Abrir el turno",
        "text": "El botón <strong>Abrir caja y empezar a vender</strong> permite comenzar. El monto visible corresponde al negocio de ejemplo."
      }
    ],
    "images": [
      {
        "asset": "cajaInicio",
        "caption": "Formulario de apertura: efectivo inicial y acción para abrir la caja."
      }
    ],
    "wide": false
  },
  {
    "id": "caja-turno",
    "group": "Operación diaria · Módulo Caja",
    "title": "Reconocer la caja abierta",
    "lead": "Con el turno abierto, el resumen reúne la información del momento y los accesos a las tareas principales.",
    "blocks": [
      {
        "title": "Leer el resumen",
        "text": "Se muestran la apertura, el fondo inicial y el total del turno, separado en <strong>Efectivo</strong>, <strong>Transferencia</strong> y <strong>Tarjeta</strong>."
      },
      {
        "title": "Elegir la tarea",
        "text": "Los botones <strong>Nueva venta</strong>, <strong>Cerrar turno</strong> y <strong>Movimiento de efectivo</strong> permiten continuar el trabajo. La pestaña <strong>Historial</strong> reúne los turnos registrados."
      }
    ],
    "images": [
      {
        "asset": "cajaTurno",
        "caption": "Resumen de la caja abierta y sus acciones principales."
      }
    ],
    "wide": false
  },
  {
    "id": "caja-venta",
    "group": "Operación diaria · Módulo Caja",
    "title": "De la carta a la cuenta",
    "lead": "Nueva venta presenta la carta, el contenido de la venta y los datos que se revisan antes de cobrar.",
    "blocks": [
      {
        "title": "La carta y la cuenta",
        "text": "El buscador y las categorías ayudan a encontrar productos. Al seleccionarlos, se incorporan al contenido de la venta."
      },
      {
        "title": "Antes de cobrar",
        "text": "La columna lateral reúne la modalidad de entrega, el cliente, las notas, las salsas, la propina y el medio de pago. El total y la acción <strong>Cobrar</strong> aparecen al pie."
      }
    ],
    "images": [
      {
        "asset": "cajaVenta",
        "caption": "Vista de Nueva venta: carta, contenido de la venta y datos previos al cobro."
      }
    ],
    "wide": true
  },
  {
    "id": "caja-movimiento",
    "group": "Operación diaria · Módulo Caja",
    "title": "Registrar entradas y salidas de efectivo",
    "lead": "Movimiento de efectivo permite distinguir un retiro de un ingreso durante el turno.",
    "blocks": [
      {
        "title": "Identificar el movimiento",
        "text": "Se elige <strong>Retiro</strong> o <strong>Ingreso</strong> y se completan <strong>Monto</strong> y <strong>Motivo</strong>."
      },
      {
        "title": "Dejarlo registrado",
        "text": "El botón <strong>Registrar</strong> permite continuar con los datos del movimiento; <strong>Cancelar</strong> ofrece salir del formulario."
      }
    ],
    "images": [
      {
        "asset": "cajaMovimiento",
        "caption": "Formulario de movimiento de efectivo."
      }
    ],
    "wide": true
  },
  {
    "id": "caja-cierre",
    "group": "Operación diaria · Módulo Caja",
    "title": "Comparar el efectivo al cerrar",
    "lead": "Cerrar turno presenta el espacio para cuadrar la caja con el efectivo que se cuenta al terminar.",
    "blocks": [
      {
        "title": "Lo esperado y lo contado",
        "text": "<strong>Debería haber</strong> muestra el importe esperado. En <strong>Efectivo contado</strong> se registra lo que hay en el cajón para conocer la diferencia."
      },
      {
        "title": "Terminar el turno",
        "text": "La acción visible es <strong>Cerrar e imprimir</strong>. La captura muestra el formulario previo al cierre; no incluye el comprobante resultante."
      }
    ],
    "images": [
      {
        "asset": "cajaCierre",
        "caption": "Formulario de cierre: efectivo esperado, efectivo contado y acción final."
      }
    ],
    "wide": true
  },
  {
    "id": "caja-historial",
    "group": "Operación diaria · Módulo Caja",
    "title": "Volver a los turnos registrados",
    "lead": "Historial permite consultar la información de turnos anteriores y sus resultados.",
    "blocks": [
      {
        "title": "Una mirada al período",
        "text": "Las tarjetas muestran el total del período, el ticket promedio, el efectivo y los descuadres."
      },
      {
        "title": "Encontrar un turno",
        "text": "El buscador indica fecha o cajero. La tabla reúne día, horario, cajero, total, efectivo, tarjeta y cuadre. El botón <strong>Excel</strong> exporta los datos en formato <strong>CSV</strong> para analizarlos en una hoja de cálculo."
      },
      {
        "title": "Imprimir el cierre de turno",
        "text": "El <strong>ícono de impresora</strong>, al extremo derecho de cada fila del historial, permite <strong>imprimir el cierre de turno correspondiente</strong>. Así se puede obtener una copia del turno que se está consultando."
      }
    ],
    "images": [
      {
        "asset": "cajaHistorial",
        "caption": "Historial de turnos del negocio de ejemplo."
      },
      {
        "asset": "cajaImprimir",
        "caption": "Detalle de un registro: el ícono de impresora aparece al extremo derecho de la fila."
      }
    ],
    "wide": true
  },
  {
    "id": "caja-indicadores",
    "group": "Operación diaria · Módulo Caja",
    "title": "Leer el resumen del historial",
    "lead": "Sobre el listado, las tarjetas reúnen indicadores del período. Ayudan a reconocer los importes y los turnos que presentan diferencias antes de revisar cada registro.",
    "blocks": [
      {
        "title": "Total del período",
        "text": "Presenta el importe total del período consultado. Debajo se muestra la cantidad de turnos que acompaña ese resumen."
      },
      {
        "title": "Ticket promedio",
        "text": "Indica el importe promedio por venta. La cantidad de ventas aparece debajo para dar contexto al valor mostrado."
      },
      {
        "title": "Efectivo",
        "text": "Muestra el importe identificado como efectivo en caja dentro del resumen del historial."
      },
      {
        "title": "Descuadres",
        "text": "Indica cuántos turnos presentan una diferencia. Por ejemplo, el valor <strong>1</strong> de la captura corresponde a un turno con diferencia, no a un importe en dinero."
      }
    ],
    "images": [
      {
        "asset": "cajaIndicadores",
        "caption": "Indicadores del historial, buscador por fecha o cajero y botón Excel para exportar datos en CSV."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-caja",
    "group": "Operación diaria · Módulo Caja · Actividad de ejemplo",
    "title": "Acompañemos una venta del turno",
    "lead": "Con la caja abierta, una persona se acerca al mostrador para hacer un pedido.",
    "blocks": [
      {
        "title": "1. Armar la cuenta",
        "text": "Desde <strong>Nueva venta</strong> podemos encontrar los productos en la carta y revisar el contenido de la venta."
      },
      {
        "title": "2. Revisar antes de cobrar",
        "text": "La modalidad de entrega, las observaciones, el medio de pago y el total ayudan a comprobar la atención antes de usar <strong>Cobrar</strong>."
      },
      {
        "title": "3. Continuar con las compras online",
        "text": "En Operación diaria, el módulo inbox permanece marcado como <strong>PRONTO</strong>. Seguiremos con el módulo tienda para conocer cómo se consultan los pedidos online pagados."
      }
    ],
    "flow": [
      "La carta",
      "La cuenta",
      "Antes de cobrar"
    ],
    "next": "tienda"
  },
  {
    "id": "tienda",
    "group": "Operación diaria · Módulo Tienda",
    "title": "Módulo Tienda: seguir los pedidos online",
    "lead": "Continuamos en Operación diaria con el módulo tienda. Reúne los pedidos online pagados con envío por courier, delivery local o retiro.",
    "blocks": [
      {
        "title": "De la compra al seguimiento",
        "text": "La pantalla indica que los pedidos con envío a domicilio de la tienda pública aparecen aquí en cuanto se pagan. Este módulo permite consultar esa parte de la atención online."
      },
      {
        "title": "Reconocer la vista inicial",
        "text": "Los controles <strong>Tablero</strong> y <strong>Listado</strong> permiten elegir cómo consultar los pedidos. En la captura aparece <strong>Aún no hay pedidos online</strong>, porque no hay registros para mostrar."
      }
    ],
    "images": [
      {
        "asset": "tiendaPrincipal",
        "caption": "Vista Tablero del módulo tienda, sin pedidos online registrados en el ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "tienda-consulta",
    "group": "Operación diaria · Módulo Tienda",
    "title": "Encontrar un pedido y reconocer su avance",
    "lead": "El resumen superior y los filtros ayudan a orientar la consulta según la actividad del día y la modalidad de entrega.",
    "blocks": [
      {
        "title": "La actividad del día",
        "text": "<strong>Ventas online hoy</strong> muestra un importe y <strong>Pedidos pagados hoy</strong> una cantidad. Permiten distinguir cuánto se ha vendido de cuántos pedidos se han pagado."
      },
      {
        "title": "El avance de los envíos",
        "text": "<strong>Por despachar</strong> cuenta pedidos pendientes de despacho; <strong>En tránsito</strong> señala los que están en camino. Estas tarjetas son indicadores del resumen."
      },
      {
        "title": "Buscar y filtrar",
        "text": "El buscador permite localizar por código, cliente o producto. Los filtros visibles son <strong>Todos</strong>, <strong>Bluexpress</strong>, <strong>Starken</strong>, <strong>Chilexpress</strong>, <strong>Delivery local</strong>, <strong>Retiro</strong> y <strong>Devoluciones</strong>."
      },
      {
        "title": "Consultar el listado",
        "text": "La vista <strong>Listado</strong> conserva los indicadores, el buscador y los filtros. En esta referencia está vacía; las filas y las acciones de un pedido se incorporarán cuando haya capturas con registros."
      }
    ],
    "images": [
      {
        "asset": "tiendaListado",
        "caption": "Detalle de la vista Listado: indicadores, buscador y filtros de consulta."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-tienda",
    "group": "Operación diaria · Módulo Tienda · Actividad de ejemplo",
    "title": "Orientemos la consulta de una compra online",
    "lead": "Imaginemos que una persona consulta por una compra pagada que recibirá mediante delivery local.",
    "blocks": [
      {
        "title": "1. Ubicar la consulta",
        "text": "En el módulo tienda podemos buscar por el código del pedido, el cliente o el producto. El filtro <strong>Delivery local</strong> ayuda a enfocar la consulta en esa modalidad."
      },
      {
        "title": "2. Leer el resumen con contexto",
        "text": "Las tarjetas <strong>Por despachar</strong> y <strong>En tránsito</strong> permiten reconocer el avance general. Para conocer la situación de una compra concreta, hace falta consultar su registro; los totales por sí solos no la identifican."
      },
      {
        "title": "3. Continuar hacia la gestión",
        "text": "Con esta consulta terminamos el recorrido de Operación diaria. El siguiente grupo es <strong>Gestión</strong>, que comienza por el módulo ventas y reúne herramientas para conocer y organizar el negocio."
      }
    ],
    "flow": [
      "Buscar la compra",
      "Filtrar la entrega",
      "Consultar el registro",
      "Gestión"
    ],
    "next": "grupo-gestion"
  },
  {
    "id": "grupo-gestion",
    "group": "Grupos del restaurante",
    "title": "Gestión",
    "lead": "Gestión reúne 6 módulos para conocer los resultados y mantener la información del restaurante: 5 disponibles y el módulo reportes marcado como PRONTO.",
    "blocks": [
      {
        "title": "Resultados e información comercial",
        "text": "El módulo ventas permite consultar la actividad; el módulo productos reúne el catálogo y el stock; el módulo clientes organiza la información de quienes compran."
      },
      {
        "title": "Gastos, reportes y configuración",
        "text": "El módulo gastos reúne los costos del negocio. El módulo reportes aparece como <strong>PRONTO</strong>. El módulo configuración concentra los usuarios, roles y datos del local."
      },
      {
        "title": "Cómo seguiremos",
        "text": "Recorreremos los módulos ventas, productos, clientes y gastos, y los apartados Negocio, Operación y Sistema del módulo configuración. El módulo reportes continúa marcado como PRONTO."
      }
    ],
    "divider": true,
    "images": [
      {
        "asset": "gestionActual",
        "caption": "Gestión: seis módulos; el módulo reportes aparece como PRONTO."
      }
    ],
    "wide": true
  },
  {
    "id": "ventas",
    "group": "Gestión · Módulo Ventas",
    "title": "Módulo Ventas: conocer la actividad",
    "lead": "Comenzamos el grupo Gestión con el módulo ventas. Permite consultar los resultados del negocio y reconocer cómo se distribuyen sus ventas.",
    "blocks": [
      {
        "title": "Elegir el período",
        "text": "<strong>Hoy</strong>, <strong>Semana</strong>, <strong>Mes</strong> y <strong>Todo</strong> delimitan la consulta. El buscador permite localizar por pedido, cliente, canal o producto."
      },
      {
        "title": "Leer el tablero",
        "text": "Las tarjetas reúnen <strong>Ventas</strong>, <strong>Pedidos</strong>, <strong>Ticket promedio</strong> y <strong>Tiempo de entrega</strong>. Los gráficos muestran los últimos siete días y los productos más vendidos."
      }
    ],
    "images": [
      {
        "asset": "gestion14",
        "caption": "Módulo Ventas: conocer la actividad. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ventas-canales",
    "group": "Gestión · Módulo Ventas",
    "title": "Reconocer de dónde vienen las ventas",
    "lead": "Ventas por canal ayuda a distinguir la participación de los distintos puntos de entrada al negocio.",
    "blocks": [
      {
        "title": "Importes y participación",
        "text": "Se presentan <strong>Sitio web</strong>, <strong>WhatsApp</strong>, <strong>Teléfono</strong> y <strong>En el local</strong>. Cada tarjeta muestra el importe y su porcentaje de las ventas."
      },
      {
        "title": "Comparar con contexto",
        "text": "Por ejemplo, podemos observar qué parte corresponde al sitio web y cuál al local. Las cifras pertenecen al período consultado y al negocio de ejemplo."
      }
    ],
    "images": [
      {
        "asset": "gestion12",
        "caption": "Reconocer de dónde vienen las ventas. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ventas-listado",
    "group": "Gestión · Módulo Ventas",
    "title": "Consultar las ventas una por una",
    "lead": "La vista Listado permite relacionar cada pedido con su cliente, canal, atención, entrega y total.",
    "blocks": [
      {
        "title": "Leer el registro",
        "text": "Las columnas separan pedido, cliente, canal, quién atendió, entrega, ítems, pago, estado y total. El estado describe el avance del pedido; el medio de pago aparece por separado."
      },
      {
        "title": "Analizar o imprimir",
        "text": "El botón <strong>Excel</strong> exporta datos en <strong>CSV</strong> para analizarlos. El ícono de impresora al final de la fila permite acceder a la impresión de esa venta."
      }
    ],
    "images": [
      {
        "asset": "gestion11",
        "caption": "Consultar las ventas una por una. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-ventas",
    "group": "Gestión · Módulo Ventas · Actividad de ejemplo",
    "title": "Del resultado a los productos",
    "lead": "Imaginemos que queremos conocer qué se vendió durante el día.",
    "blocks": [
      {
        "title": "1. Elegir la consulta",
        "text": "Podemos seleccionar <strong>Hoy</strong> y revisar el total, los pedidos y los productos más vendidos."
      },
      {
        "title": "2. Relacionar la información",
        "text": "El listado y las ventas por canal permiten situar esos resultados. Si necesitamos revisar la oferta o el precio de un producto, el siguiente paso del recorrido es el módulo productos."
      }
    ],
    "flow": [
      "Consultar ventas",
      "Reconocer productos",
      "Módulo Productos"
    ],
    "next": "productos"
  },
  {
    "id": "productos",
    "group": "Gestión · Módulo Productos",
    "title": "Módulo Productos: organizar la oferta",
    "lead": "Después del módulo ventas, el módulo productos reúne la carta, los precios, los costos y el control del inventario.",
    "blocks": [
      {
        "title": "Tres espacios de trabajo",
        "text": "<strong>Catálogo</strong> presenta la oferta; <strong>Stock</strong> permite consultar las existencias; <strong>Movimientos</strong> reúne las entradas, salidas y ajustes."
      },
      {
        "title": "Encontrar y revisar",
        "text": "El buscador y las categorías ayudan a ubicar un producto. En la tabla aparecen vendidos, precio y costo, margen, <strong>Se vende</strong>, presencia en la web y acceso de edición."
      }
    ],
    "images": [
      {
        "asset": "gestion31",
        "caption": "Módulo Productos: organizar la oferta. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "productos-categorias",
    "group": "Gestión · Módulo Productos",
    "title": "Dar orden a las categorías",
    "lead": "Las categorías permiten agrupar productos y facilitar su búsqueda en la carta.",
    "blocks": [
      {
        "title": "Agregar una categoría",
        "text": "Desde <strong>Categorías</strong> se escribe el nombre y se utiliza <strong>+ Agregar</strong>. Cada fila muestra la cantidad de productos y los controles de edición."
      },
      {
        "title": "Mantener el orden",
        "text": "La indicación permite arrastrar para reordenar: ese orden se utiliza en los filtros y en el módulo caja. Al renombrar una categoría, sus productos se actualizan."
      },
      {
        "title": "Editar o quitar",
        "text": "El lápiz permite editar y la papelera identifica la acción de eliminar. Las capturas muestran estos controles, sin un diálogo posterior de confirmación."
      }
    ],
    "images": [
      {
        "asset": "gestion26",
        "caption": "Dar orden a las categorías. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-nuevo",
    "group": "Gestión · Módulo Productos",
    "title": "Comenzar la ficha de un producto",
    "lead": "Nuevo producto abre una ficha organizada en secciones y una vista previa de cómo lo verá el cliente.",
    "blocks": [
      {
        "title": "Lo básico",
        "text": "La primera sección reúne foto, <strong>Nombre</strong>, <strong>Categoría</strong> y <strong>Descripción</strong>. La vista previa se actualiza mientras se completa la información."
      },
      {
        "title": "Reconocer lo pendiente",
        "text": "El resumen <strong>Para guardar</strong> indica nombre y categoría, y precio de venta. El botón inferior orienta hacia la siguiente sección cuando falta información."
      }
    ],
    "images": [
      {
        "asset": "gestion16",
        "caption": "Comenzar la ficha de un producto. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-precio",
    "group": "Gestión · Módulo Productos",
    "title": "Definir cómo se vende",
    "lead": "Precio y venta distingue el tipo de producto, la forma de cobro y sus importes.",
    "blocks": [
      {
        "title": "Tipo y modalidad",
        "text": "<strong>Físico</strong> contempla inventario y despacho; <strong>Servicio</strong> se presenta sin stock ni envío. <strong>Por unidad</strong> cobra por pieza o combo; <strong>A granel</strong>, por peso o volumen."
      },
      {
        "title": "Costo y precio",
        "text": "Los campos de costo y precio de venta permiten diferenciar lo que cuesta el producto de lo que paga el cliente. Debajo se muestra una referencia de ganancia y margen."
      }
    ],
    "images": [
      {
        "asset": "gestion17",
        "caption": "Detalle de Precio y venta: tipo, modalidad, costo y precio."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-variantes",
    "group": "Gestión · Módulo Productos",
    "title": "Distinguir versiones de un producto",
    "lead": "Variantes permite representar versiones del mismo producto; no corresponde a los agregados que se suman por separado.",
    "blocks": [
      {
        "title": "Activar versiones",
        "text": "<strong>Este producto viene en versiones</strong> habilita la definición de atributos. La pantalla indica que cada combinación tiene su precio, costo y stock."
      },
      {
        "title": "Completar los atributos",
        "text": "Se escriben valores y se usa Enter para agregarlos. <strong>Agregar segundo atributo</strong> permite ampliar la definición. La captura recuerda que se necesita al menos un valor para generar combinaciones."
      }
    ],
    "images": [
      {
        "asset": "gestion18",
        "caption": "Detalle de Variantes: activación de versiones y atributos."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-opciones",
    "group": "Gestión · Módulo Productos",
    "title": "Añadir opciones y controlar la presencia web",
    "lead": "La ficha también contempla agregados y la forma en que el producto aparece en la tienda.",
    "blocks": [
      {
        "title": "Pack y opciones",
        "text": "Agrupa agregados sobre el producto cuyos precios se suman. Las opciones visibles permiten crear grupos; para versiones del producto se utiliza Variantes."
      },
      {
        "title": "Web y stock",
        "text": "<strong>Visible en el sitio web</strong> permite que aparezca en la carta online. <strong>Controlar el stock de este producto</strong> indica que las ventas descuentan existencias y que se avisa cuando queda poco."
      },
      {
        "title": "Datos complementarios",
        "text": "También aparecen peso para envío y <strong>Agregar especificación</strong>, para incorporar información técnica del producto."
      }
    ],
    "images": [
      {
        "asset": "gestion22",
        "caption": "Detalle de Web y stock: visibilidad, inventario y datos complementarios."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-guardar",
    "group": "Gestión · Módulo Productos",
    "title": "Guardar y mantener la ficha",
    "lead": "Una vez completos los datos necesarios, Guardar producto permite finalizar la creación o la edición.",
    "blocks": [
      {
        "title": "Un producto sin variantes",
        "text": "La referencia muestra que se puede guardar directamente cuando no hay versiones y los requisitos están completos. Otra captura confirma el resultado con <strong>Producto creado</strong>."
      },
      {
        "title": "Volver a editar",
        "text": "La ficha de edición conserva las secciones y permite <strong>Guardar producto</strong>. También muestra las acciones <strong>Duplicar</strong> y <strong>Eliminar</strong>."
      }
    ],
    "images": [
      {
        "asset": "gestion27",
        "caption": "Guardar y mantener la ficha. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-importar",
    "group": "Gestión · Módulo Productos",
    "title": "Incorporar un listado de productos",
    "lead": "Importar permite trabajar con un archivo o con filas copiadas desde una hoja de cálculo.",
    "blocks": [
      {
        "title": "Preparar el archivo",
        "text": "<strong>Descargar plantilla</strong> entrega una plantilla CSV. Las columnas comienzan con Nombre, Categoría y Precio; desde Costo en adelante se indican como opcionales."
      },
      {
        "title": "Cargar o pegar",
        "text": "Se puede usar <strong>Subir archivo CSV</strong> o pegar las filas en el campo lateral. <strong>Importar</strong> es la acción para continuar con el listado preparado."
      }
    ],
    "images": [
      {
        "asset": "gestion29",
        "caption": "Incorporar un listado de productos. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "productos-stock",
    "group": "Gestión · Módulo Productos",
    "title": "Reconocer la situación del inventario",
    "lead": "La vista Stock ayuda a conocer cuánto queda y qué productos requieren atención.",
    "blocks": [
      {
        "title": "Los indicadores",
        "text": "<strong>Con control de stock</strong> cuenta los productos controlados; <strong>Bajo mínimo</strong> señala existencias bajas; <strong>Agotados</strong> identifica faltantes. <strong>Valor del inventario</strong> se presenta valorizado al costo."
      },
      {
        "title": "Leer la tabla",
        "text": "Las columnas muestran stock, mínimo, valor y estado. <strong>Sin control</strong> identifica productos cuyo stock no está siendo controlado; no equivale a un producto agotado."
      }
    ],
    "images": [
      {
        "asset": "gestion34",
        "caption": "Reconocer la situación del inventario. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "productos-movimiento",
    "group": "Gestión · Módulo Productos",
    "title": "Registrar un cambio de inventario",
    "lead": "El botón de movimiento abre un formulario para indicar cómo cambian las existencias de un producto.",
    "blocks": [
      {
        "title": "Tipo, cantidad y motivo",
        "text": "El formulario ofrece <strong>Entrada</strong>, <strong>Salida</strong> y <strong>Ajuste</strong>. Se completan cantidad y motivo; la vista muestra la existencia resultante antes de <strong>Registrar</strong>."
      },
      {
        "title": "Consultar lo ocurrido",
        "text": "La pestaña <strong>Movimientos</strong> reúne producto, cambio, motivo, quién y cuándo. Ayuda a revisar las cargas, mermas y ajustes registrados."
      }
    ],
    "images": [
      {
        "asset": "gestion33",
        "caption": "Registrar un cambio de inventario. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "ejemplo-productos",
    "group": "Gestión · Módulo Productos · Actividad de ejemplo",
    "title": "Una nueva bebida en la carta",
    "lead": "Imaginemos que el restaurante incorporará una bebida a su oferta.",
    "blocks": [
      {
        "title": "1. Preparar la ficha",
        "text": "Podemos elegir una categoría, completar el nombre y la descripción y definir costo y precio de venta."
      },
      {
        "title": "2. Revisar antes de guardar",
        "text": "La visibilidad web y el control de stock se ajustan según corresponda. Con los requisitos completos, <strong>Guardar producto</strong> termina la ficha."
      },
      {
        "title": "3. Continuar el recorrido",
        "text": "Después de organizar lo que se ofrece, conoceremos a quienes compran mediante el módulo clientes."
      }
    ],
    "flow": [
      "Crear la ficha",
      "Revisar y guardar",
      "Módulo Clientes"
    ],
    "next": "clientes"
  },
  {
    "id": "clientes",
    "group": "Gestión · Módulo Clientes",
    "title": "Módulo Clientes: conocer a quienes compran",
    "lead": "Continuamos en Gestión con el módulo clientes. Reúne datos de contacto e información sobre la actividad de compra.",
    "blocks": [
      {
        "title": "Una mirada al conjunto",
        "text": "Las tarjetas muestran <strong>Clientes registrados</strong>, <strong>Frecuentes</strong>, <strong>Ticket promedio</strong> y <strong>Por recuperar</strong>. La captura describe frecuentes como ocho pedidos o más y por recuperar como más de treinta días sin pedir."
      },
      {
        "title": "Leer la actividad",
        "text": "Cada fila reúne cliente, segmento, producto favorito, pedidos, gasto y última compra. Estos datos ayudan a situar la relación del cliente con el negocio."
      }
    ],
    "images": [
      {
        "asset": "gestion42",
        "caption": "Módulo Clientes: conocer a quienes compran. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "clientes-consulta",
    "group": "Gestión · Módulo Clientes",
    "title": "Encontrar un cliente y contactarlo",
    "lead": "El buscador y los filtros permiten orientar la consulta según los datos o la actividad del cliente.",
    "blocks": [
      {
        "title": "Buscar y filtrar",
        "text": "Se puede buscar cliente, teléfono o zona. Los filtros son <strong>Todos</strong>, <strong>Frecuentes</strong>, <strong>Nuevos</strong>, <strong>Sin pedir hace rato</strong> y <strong>Con cuenta</strong>."
      },
      {
        "title": "Las acciones de cada fila",
        "text": "Los íconos permiten enviar un mensaje por <strong>WhatsApp</strong>, enviar un <strong>correo</strong> o <strong>editar</strong> el registro. El botón <strong>Excel</strong> exporta datos en CSV para analizarlos."
      }
    ],
    "images": [
      {
        "asset": "gestion39",
        "caption": "Encontrar un cliente y contactarlo. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "clientes-ficha",
    "group": "Gestión · Módulo Clientes",
    "title": "Crear y actualizar un registro",
    "lead": "Nuevo cliente y Editar cliente reúnen los datos que permiten identificar y contactar a la persona.",
    "blocks": [
      {
        "title": "Datos de contacto",
        "text": "La ficha incluye <strong>Nombre</strong>, <strong>WhatsApp</strong>, <strong>Correo</strong> y <strong>Dirección</strong>. El control <strong>Tiene cuenta en el sitio</strong> registra esa condición."
      },
      {
        "title": "Guardar los cambios",
        "text": "<strong>Guardar cliente</strong> permite terminar. En edición aparece también <strong>Eliminar</strong>; la nota indica que los números de compra los calcula el sistema y no se editan."
      }
    ],
    "images": [
      {
        "asset": "gestion40",
        "caption": "Detalle de los datos editables del cliente y su condición de cuenta en el sitio."
      }
    ],
    "wide": false
  },
  {
    "id": "ejemplo-clientes",
    "group": "Gestión · Módulo Clientes · Actividad de ejemplo",
    "title": "Retomar el contacto con un cliente",
    "lead": "Imaginemos que queremos reconocer a quienes llevan tiempo sin comprar.",
    "blocks": [
      {
        "title": "1. Orientar la búsqueda",
        "text": "El filtro <strong>Sin pedir hace rato</strong> ayuda a encontrar esos registros. La última compra y la actividad aportan contexto."
      },
      {
        "title": "2. Elegir el contacto",
        "text": "Podemos revisar los datos y reconocer las opciones de WhatsApp o correo. El mensaje se prepara según la atención que el negocio desea ofrecer."
      },
      {
        "title": "3. Mirar los costos",
        "text": "El recorrido sigue con el módulo gastos, que reúne la otra parte de la gestión cotidiana: lo que cuesta operar el negocio."
      }
    ],
    "flow": [
      "Buscar al cliente",
      "Revisar y contactar",
      "Módulo Gastos"
    ],
    "next": "gastos"
  },
  {
    "id": "gastos",
    "group": "Gestión · Módulo Gastos",
    "title": "Módulo Gastos: acompañar los costos",
    "lead": "El módulo gastos reúne los costos del restaurante, sus comprobantes y lo que queda por pagar.",
    "blocks": [
      {
        "title": "Distinguir importes",
        "text": "<strong>Gasto del mes</strong> resume el total. <strong>Costos fijos</strong> y <strong>Costos variables</strong> distinguen los tipos; <strong>Por pagar</strong> señala lo pendiente."
      },
      {
        "title": "Consultar los registros",
        "text": "El buscador admite gasto, proveedor o categoría. Los filtros incluyen Todos, Fijos, Variables, Por pagar y Sin comprobante. <strong>Excel</strong> exporta datos en CSV para su análisis."
      }
    ],
    "images": [
      {
        "asset": "gestion7",
        "caption": "Módulo Gastos: acompañar los costos. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "gastos-registro",
    "group": "Gestión · Módulo Gastos",
    "title": "Registrar un gasto con su contexto",
    "lead": "Nuevo gasto permite describir el costo y reunir los datos necesarios para consultarlo después.",
    "blocks": [
      {
        "title": "Identificar el gasto",
        "text": "Se completa qué gasto es, su tipo <strong>Variable</strong> o <strong>Fijo</strong>, categoría, proveedor, monto y fecha. La descripción permite añadir contexto."
      },
      {
        "title": "Pago y respaldo",
        "text": "<strong>Por pagar</strong> y <strong>Pagado</strong> describen el estado del pago. <strong>Subir archivo o foto</strong> permite adjuntar un comprobante en PDF o imagen; <strong>Guardar gasto</strong> termina el registro."
      }
    ],
    "images": [
      {
        "asset": "gestion5",
        "caption": "Registrar un gasto con su contexto. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "gastos-productos",
    "group": "Gestión · Módulo Gastos",
    "title": "Relacionar una compra con el inventario",
    "lead": "El apartado ¿Qué compraste? permite asociar productos al gasto. La pantalla indica que entran al inventario al guardar.",
    "blocks": [
      {
        "title": "Agregar los productos",
        "text": "<strong>Agregar producto</strong> incorpora una fila para seleccionar el producto, indicar cantidad e importe y revisar el total."
      },
      {
        "title": "Relacionar los montos",
        "text": "<strong>Usar como monto</strong> toma el total de productos como monto del gasto. El control <strong>Actualizar el costo de estos productos con lo que pagaste</strong> permite indicar si se actualiza su costo."
      }
    ],
    "images": [
      {
        "asset": "gestion4",
        "caption": "Relacionar una compra con el inventario. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "gastos-categorias",
    "group": "Gestión · Módulo Gastos",
    "title": "Organizar y mantener los gastos",
    "lead": "Las categorías agrupan los costos y facilitan interpretar en qué se utiliza el dinero del negocio.",
    "blocks": [
      {
        "title": "Mantener las categorías",
        "text": "El panel permite agregar, reordenar, editar y eliminar categorías. La nota aclara que renombrar o eliminar no cambia los gastos ya registrados: conservan el nombre con que se guardaron."
      },
      {
        "title": "Revisar un registro",
        "text": "El lápiz de una fila abre <strong>Editar gasto</strong>, donde se actualizan datos y comprobante. Aparecen <strong>Guardar gasto</strong> y <strong>Eliminar</strong>."
      },
      {
        "title": "Interpretar la distribución",
        "text": "El resumen <strong>En qué se va la plata</strong> muestra importes y porcentajes por agrupación de gasto para comparar su participación."
      }
    ],
    "images": [
      {
        "asset": "gestion3",
        "caption": "Organizar y mantener los gastos. Referencia del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "ejemplo-gastos",
    "group": "Gestión · Módulo Gastos · Actividad de ejemplo",
    "title": "Acompañar una compra de insumos",
    "lead": "Imaginemos que llega una compra para el restaurante.",
    "blocks": [
      {
        "title": "1. Registrar el costo",
        "text": "Podemos identificar el gasto, proveedor, fecha, categoría y estado del pago, y adjuntar el comprobante."
      },
      {
        "title": "2. Relacionar la compra",
        "text": "Cuando corresponda, los productos comprados se agregan al registro para su ingreso al inventario al guardar."
      },
      {
        "title": "3. Continuar con los ajustes",
        "text": "El menú presenta el módulo reportes como PRONTO. Continuaremos con el módulo configuración para conocer los ajustes de Negocio, Operación y Sistema."
      }
    ],
    "flow": [
      "Registrar el gasto",
      "Guardar el respaldo",
      "Módulo Configuración"
    ],
    "next": "configuracion"
  },
  {
    "id": "configuracion",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Módulo Configuración: datos del negocio",
    "lead": "El módulo configuración reúne los ajustes del restaurante en Negocio, Operación y Sistema. Comenzamos por la identidad y el contacto, dentro de Negocio.",
    "blocks": [
      {
        "title": "Identidad y contacto",
        "text": "Se reúnen logo, nombre comercial, razón social, RUT, dirección, ciudad, teléfono y correo. La pantalla indica que los datos aparecen en el panel, el sitio web y el recibo impreso."
      },
      {
        "title": "Mensaje y guardado",
        "text": "El <strong>Mensaje del recibo</strong> define el texto al pie de cada recibo. <strong>Guardar cambios</strong> aplica la edición. Después del horario conoceremos los banners y los demás ajustes de Negocio."
      }
    ],
    "images": [
      {
        "asset": "gestion9",
        "caption": "Datos del negocio: identidad, contacto y mensaje del recibo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-horario",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Indicar cuándo atiende el negocio",
    "lead": "Dentro de Datos del negocio también se encuentra Horario de atención, que se muestra en el sitio del cliente.",
    "blocks": [
      {
        "title": "Días abiertos y cerrados",
        "text": "Cada día permite indicar <strong>Abierto</strong> o <strong>Cerrado</strong>. Un día cerrado aparece con la indicación de que no se reciben pedidos."
      },
      {
        "title": "Horas de atención",
        "text": "Para los días abiertos se muestran horas de inicio y término. <strong>+ Cierre al medio</strong> permite indicar una interrupción dentro de la jornada. La captura presenta los controles previos a ese ajuste."
      }
    ],
    "images": [
      {
        "asset": "gestion8",
        "caption": "Indicar cuándo atiende el negocio. Referencia del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-banners",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Presentar la tienda con banners",
    "lead": "Después de los datos y el horario, Banners permite preparar las imágenes del encabezado de la tienda.",
    "blocks": [
      {
        "title": "Una imagen para cada pantalla",
        "text": "La referencia recomienda <strong>1920 × 550 px</strong> para escritorio y <strong>1080 × 500 px</strong> para móvil. La versión móvil es opcional; si falta, se utiliza un recorte de la imagen de escritorio."
      },
      {
        "title": "Orden y destino",
        "text": "Podemos usar <strong>Agregar banner</strong>, cambiar imágenes y ajustar su orden. En <strong>Al hacer clic</strong> se define el destino; si la categoría ya no existe, aparece un aviso para corregir el enlace antes de <strong>Guardar cambios</strong>."
      }
    ],
    "images": [
      {
        "asset": "config0",
        "caption": "Presentar la tienda con banners. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-pagos",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Elegir los medios de pago",
    "lead": "Métodos de pago reúne las opciones que acepta el negocio al cobrar.",
    "blocks": [
      {
        "title": "Medios disponibles",
        "text": "Los interruptores corresponden a <strong>Efectivo</strong>, <strong>Transferencia</strong> y <strong>Tarjeta</strong>. La pantalla describe tarjeta como débito o crédito con máquina."
      },
      {
        "title": "Cuenta para transferencias",
        "text": "Titular y RUT provienen de <strong>Datos del negocio</strong>. Aquí se completan banco, tipo y número de cuenta; luego se utiliza <strong>Guardar cambios</strong>."
      }
    ],
    "images": [
      {
        "asset": "config4",
        "caption": "Elegir los medios de pago. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-canales",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Reconocer de dónde llegan los pedidos",
    "lead": "Canales de venta permite mantener disponibles los puntos de entrada que utiliza el restaurante.",
    "blocks": [
      {
        "title": "Cuatro canales",
        "text": "Aparecen <strong>Sitio web</strong>, <strong>WhatsApp</strong>, <strong>Teléfono</strong> y <strong>En el local</strong>, cada uno con su interruptor."
      },
      {
        "title": "Una decisión que afecta al recorrido",
        "text": "La interfaz advierte que apagar un canal oculta lo que depende de él y que siempre debe quedar al menos uno activo. Los datos de WhatsApp se completan en su propia sección."
      }
    ],
    "images": [
      {
        "asset": "config1",
        "caption": "Reconocer de dónde llegan los pedidos. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-tienda",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Preparar las modalidades de entrega",
    "lead": "Tienda online configura la entrega de la tienda pública; el módulo tienda permite consultar sus pedidos.",
    "blocks": [
      {
        "title": "Retiro y reparto local",
        "text": "<strong>Retiro en tienda</strong> permite recoger el pedido en el local. <strong>Delivery local</strong> utiliza la dirección del cliente y las zonas de reparto para cotizar el envío."
      },
      {
        "title": "Envíos por courier",
        "text": "<strong>Envío por pagar</strong> indica que se pagan los productos y el costo de envío se informa por WhatsApp. También aparecen Bluexpress, Starken y Chilexpress; las tarifas visibles combinan base más costo por kilo multiplicado por el peso."
      }
    ],
    "images": [
      {
        "asset": "config8",
        "caption": "Preparar las modalidades de entrega. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-tienda-costos",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Completar costos y presentación del envío",
    "lead": "La continuación de Tienda online reúne valores de referencia y el mensaje superior de la tienda.",
    "blocks": [
      {
        "title": "Valores de envío",
        "text": "<strong>Costo de envío base</strong> se usa cuando no hay courier seleccionado. <strong>Envío gratis desde</strong> define el umbral; vacío o cero no ofrece envío gratis. <strong>Peso por defecto</strong> se utiliza cuando el producto no tiene peso."
      },
      {
        "title": "Mensaje de la tienda",
        "text": "<strong>Franja superior de la tienda</strong> permite activar la cinta y escribir su texto. Si queda vacío, se usa el texto automático. Después de revisar la configuración se utiliza <strong>Guardar cambios</strong>."
      }
    ],
    "images": [
      {
        "asset": "config9",
        "caption": "Completar costos y presentación del envío. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-promociones",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Acompañar las ventas con promociones",
    "lead": "Las promociones activas se aplican en caja y en el sitio web según los canales elegidos.",
    "blocks": [
      {
        "title": "Leer una promoción",
        "text": "El registro muestra nombre, descuento, canales y estado. La referencia presenta una promoción <strong>Pausada</strong>, junto al interruptor y las acciones de editar y eliminar."
      },
      {
        "title": "Preparar una nueva",
        "text": "<strong>Nueva promoción</strong> abre el formulario para definir el beneficio, su alcance y su programación. En la página siguiente conoceremos esos campos antes de practicar."
      }
    ],
    "images": [
      {
        "asset": "config6",
        "caption": "Acompañar las ventas con promociones. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-promocion-crear",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Definir el alcance de una promoción",
    "lead": "El formulario permite relacionar un beneficio con productos, canales y momentos de atención.",
    "blocks": [
      {
        "title": "Beneficio y alcance",
        "text": "Se indica un nombre y un tipo: <strong>% descuento</strong>, <strong>$ descuento</strong>, <strong>2×1</strong> o <strong>Envío gratis</strong>. Se elige <strong>Caja (POS)</strong> y/o <strong>Sitio web</strong>, y todo el catálogo, categorías o productos."
      },
      {
        "title": "Programación",
        "text": "Días de la semana, horas y fechas son opcionales. Con los valores revisados, <strong>Guardar promoción</strong> completa el formulario; <strong>Cancelar</strong> permite salir de la edición."
      }
    ],
    "images": [
      {
        "asset": "config5",
        "caption": "Definir el alcance de una promoción. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-whatsapp",
    "group": "Gestión · Módulo Configuración · Negocio",
    "title": "Identificar el canal de WhatsApp",
    "lead": "WhatsApp Business reúne el número y el nombre visible del negocio.",
    "blocks": [
      {
        "title": "Datos del contacto",
        "text": "Los campos <strong>Número</strong> y <strong>Nombre visible</strong> se revisan antes de usar <strong>Guardar cambios</strong>."
      },
      {
        "title": "Conectar ambos ajustes",
        "text": "Esta sección configura los datos del canal. En <strong>Canales de venta</strong> se determina si WhatsApp está activo para el negocio."
      }
    ],
    "images": [
      {
        "asset": "config10",
        "caption": "Identificar el canal de WhatsApp. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-configuracion-negocio",
    "group": "Gestión · Módulo Configuración · Negocio · Actividad de ejemplo",
    "title": "Preparar una atención por internet",
    "lead": "Imaginemos que el restaurante revisa cómo se presenta y recibe pedidos en la web.",
    "blocks": [
      {
        "title": "1. Presentar el negocio",
        "text": "Podemos comprobar datos, horario y banners, y revisar que los medios de pago correspondan a los que se aceptan."
      },
      {
        "title": "2. Revisar la entrega",
        "text": "En canales y tienda online se comprueban la disponibilidad del sitio y las modalidades ofrecidas al cliente."
      },
      {
        "title": "3. Continuar con el reparto",
        "text": "Si se ofrece delivery local, el siguiente tramo permite revisar dónde se reparte y cuánto cuesta el envío."
      }
    ],
    "flow": [
      "Presentación",
      "Venta online",
      "Zonas de reparto"
    ]
  },
  {
    "id": "configuracion-operacion",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Operación: reparto e impresión",
    "lead": "Dentro del módulo configuración, Operación reúne los ajustes que acompañan la entrega y los documentos del trabajo diario.",
    "blocks": [
      {
        "title": "Zonas de reparto",
        "text": "Primero ubicaremos el local, conoceremos el dibujo de zonas y revisaremos tarifas y cobertura."
      },
      {
        "title": "Equipo y conexión",
        "text": "Después veremos repartidores y red de reparto, que presentan el equipo local y la conexión con la central."
      },
      {
        "title": "Documentos de trabajo",
        "text": "Finalmente, impresoras permite revisar tickets, equipos de destino y eventos de impresión antes de pasar a Sistema."
      }
    ]
  },
  {
    "id": "configuracion-zonas-local",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Ubicar el punto de partida del reparto",
    "lead": "Zonas de reparto propone tres pasos: Ubicar local, Dibujar zonas y Revisar.",
    "blocks": [
      {
        "title": "Encontrar el local",
        "text": "En <strong>Dirección de tu local</strong> se escribe calle, número y comuna. <strong>Ubicar en el mapa</strong> muestra el punto y sus coordenadas."
      },
      {
        "title": "Ajustar la referencia",
        "text": "El pin puede arrastrarse para precisar la ubicación. Esa posición sirve de referencia para las zonas que conoceremos a continuación."
      }
    ],
    "images": [
      {
        "asset": "config22",
        "caption": "Ubicar el punto de partida del reparto. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-zonas-mapa",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Comprobar la ubicación en el mapa",
    "lead": "Antes de dibujar la cobertura, podemos reconocer el punto del local y su entorno.",
    "blocks": [
      {
        "title": "Leer el mapa",
        "text": "El pin identifica el local. Las áreas de colores corresponden a zonas presentes en el negocio de ejemplo, con sus nombres y tarifas."
      },
      {
        "title": "Continuar el recorrido",
        "text": "Cuando la ubicación represente al negocio, <strong>Continuar</strong> lleva al siguiente paso: dibujar las zonas de atención."
      }
    ],
    "images": [
      {
        "asset": "config23",
        "caption": "Comprobar la ubicación en el mapa. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-zonas-dibujar",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Dibujar el área de atención",
    "lead": "En Dibujar zonas se traza la forma del área donde el negocio realiza despachos.",
    "blocks": [
      {
        "title": "Marcar el contorno",
        "text": "<strong>+ Dibujar zona</strong> inicia el trazado. Los puntos sobre el mapa forman los vértices; la indicación visible señala volver al primer punto para terminar."
      },
      {
        "title": "Representar la cobertura",
        "text": "La forma puede adaptarse a las calles y al área de servicio. Cada zona se distingue por un color y luego se relaciona con un nombre y un precio."
      }
    ],
    "images": [
      {
        "asset": "config19",
        "caption": "Dibujar el área de atención. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-zonas-tarifas",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Relacionar cada zona con su tarifa",
    "lead": "El panel Tus zonas acompaña al mapa y permite reconocer las áreas creadas.",
    "blocks": [
      {
        "title": "Nombre y precio",
        "text": "Cada fila reúne color, nombre y precio de la zona. Así podemos comparar lo que se observa en el mapa con su costo de despacho."
      },
      {
        "title": "Mantener la lista",
        "text": "El botón de papelera aparece junto a cada registro. Antes de pasar a <strong>Revisar</strong>, conviene comprobar que las zonas y sus importes representen la atención del negocio."
      }
    ],
    "images": [
      {
        "asset": "config18",
        "caption": "Relacionar cada zona con su tarifa. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "configuracion-zonas-revisar",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Revisar la cobertura completa",
    "lead": "El tercer paso reúne el mapa y la lista de precios para comprobar el conjunto.",
    "blocks": [
      {
        "title": "Comparar áreas e importes",
        "text": "Los colores y nombres relacionan el mapa con las filas de la lista. Esta vista ayuda a revisar las tarifas antes de guardar."
      },
      {
        "title": "Continuar hasta las condiciones",
        "text": "Más abajo se define qué ocurre fuera de las zonas y si habrá un monto de compra para envío gratis. Lo veremos en la siguiente página."
      }
    ],
    "images": [
      {
        "asset": "config20",
        "caption": "Revisar la cobertura completa. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-zonas-limites",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Definir qué ocurre fuera de las zonas",
    "lead": "Cubrir el resto completa las condiciones del reparto antes de guardar.",
    "blocks": [
      {
        "title": "Fuera de la cobertura",
        "text": "Podemos elegir <strong>Cobrar un precio único fuera de las zonas</strong> o <strong>No repartir fuera de las zonas</strong>. La captura muestra seleccionada la segunda opción."
      },
      {
        "title": "Envío gratuito y guardado",
        "text": "<strong>Envío gratis desde</strong> permite fijar el monto de compra; <strong>Sin envío gratis</strong> indica que no se utiliza. <strong>Guardar cambios</strong> finaliza la revisión y <strong>Atrás</strong> permite volver."
      }
    ],
    "images": [
      {
        "asset": "config21",
        "caption": "Definir qué ocurre fuera de las zonas. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-repartidores",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Organizar el equipo de reparto",
    "lead": "Repartidores reúne el modo de asignación y los datos del equipo local.",
    "blocks": [
      {
        "title": "Modo y espera",
        "text": "En <strong>Modo de reparto</strong> la referencia muestra <strong>Los dos</strong>, dentro del ajuste entre red y equipo. También aparece <strong>Minutos antes de avisar a la red</strong> y <strong>Guardar cambios</strong>."
      },
      {
        "title": "Datos del repartidor",
        "text": "Para agregarlo se presentan nombre, WhatsApp, vehículo, patente y correo. La ficha muestra disponibilidad y cuenta; <strong>Invitar</strong> requiere un correo, según la nota del panel."
      }
    ],
    "images": [
      {
        "asset": "config16",
        "caption": "Organizar el equipo de reparto. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-red",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Reconocer la conexión con la red de reparto",
    "lead": "Esta sección relaciona el negocio con la central de reparto.",
    "blocks": [
      {
        "title": "Estado y disponibilidad",
        "text": "<strong>Estado de la conexión</strong> muestra <strong>Conectada</strong> en la referencia. <strong>Habilitar red de reparto</strong> permite ofrecer pedidos a la central."
      },
      {
        "title": "Datos de conexión",
        "text": "El panel reúne URL de la central, identificador del negocio, dirección de retiro y credenciales. La nota indica dejar los secretos vacíos para conservar los actuales. <strong>Guardar cambios</strong> aplica los ajustes."
      }
    ],
    "images": [
      {
        "asset": "config15",
        "caption": "Reconocer la conexión con la red de reparto. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-impresoras",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Reconocer los documentos impresos",
    "lead": "Impresoras comienza con una vista previa de los tickets que acompañan la atención.",
    "blocks": [
      {
        "title": "Un documento para cada momento",
        "text": "Se presentan <strong>Recibo del cliente</strong>, <strong>Pedido recibido</strong>, <strong>Orden de preparación</strong> y <strong>Etiqueta de envío</strong>, con una opción <strong>Imprimir prueba</strong> para cada vista."
      },
      {
        "title": "Comprobar el resultado",
        "text": "La vista previa ayuda a comparar el ancho, margen y tamaño de fuente del documento. A continuación veremos la conexión y el destino de cada impresión."
      }
    ],
    "images": [
      {
        "asset": "config11",
        "caption": "Reconocer los documentos impresos. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-impresoras-conexion",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Comprobar la conexión de impresión",
    "lead": "El estado de QZ Tray permite reconocer si el equipo está listo para imprimir mediante esa conexión.",
    "blocks": [
      {
        "title": "Estado y certificado",
        "text": "La captura muestra <strong>Sin conexión</strong> y <strong>Reintentar conexión</strong>. También presenta el certificado de impresión y sus opciones de descarga e instalación."
      },
      {
        "title": "Impresión desde el navegador",
        "text": "La advertencia indica que, sin QZ Tray, el recibo se abre en la ventana de impresión del navegador. En <strong>Qué imprime cada documento</strong> se eligen impresora y cantidad de copias."
      }
    ],
    "images": [
      {
        "asset": "config12",
        "caption": "Comprobar la conexión de impresión. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-impresoras-documentos",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Asignar impresora y copias",
    "lead": "Cada documento tiene su propio destino de impresión.",
    "blocks": [
      {
        "title": "Documentos del recorrido",
        "text": "Además del recibo aparecen ticket de pedido recibido, orden de preparación, etiqueta de envío y <strong>Cierre de turno</strong>. Este último corresponde al cierre de caja."
      },
      {
        "title": "Modo de impresión",
        "text": "<strong>Térmica rápida (ESC/POS)</strong> envía comandos a una impresora térmica compatible. La nota indica apagarla si el equipo no es térmico ESC/POS; la referencia distingue este modo del modo lento por imagen."
      }
    ],
    "images": [
      {
        "asset": "config13",
        "caption": "Asignar impresora y copias. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-impresoras-automaticas",
    "group": "Gestión · Módulo Configuración · Operación",
    "title": "Elegir cuándo se imprime automáticamente",
    "lead": "La impresión automática se organiza por eventos del pedido.",
    "blocks": [
      {
        "title": "Momentos de impresión",
        "text": "Los controles corresponden a ticket al recibir el pedido, orden al aceptarlo y etiqueta al asignar reparto o despachar en tienda."
      },
      {
        "title": "Equipos y agente local",
        "text": "<strong>Impresoras detectadas</strong> muestra las que QZ Tray encuentra en el equipo. El apartado <strong>Agente de impresión</strong> describe impresión con el navegador cerrado y ofrece <strong>Generar token</strong>; la referencia muestra el agente sin configurar."
      }
    ],
    "images": [
      {
        "asset": "config14",
        "caption": "Elegir cuándo se imprime automáticamente. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-configuracion-operacion",
    "group": "Gestión · Módulo Configuración · Operación · Actividad de ejemplo",
    "title": "Acompañar un pedido a domicilio",
    "lead": "Podemos relacionar los ajustes del reparto con los documentos que usa el equipo.",
    "blocks": [
      {
        "title": "1. Revisar la cobertura",
        "text": "Se comprueban el punto del local, las zonas, sus tarifas y las condiciones fuera del área de reparto."
      },
      {
        "title": "2. Reconocer el equipo",
        "text": "En repartidores y red de reparto se revisan los datos del equipo y el estado de conexión de la central."
      },
      {
        "title": "3. Preparar el trabajo compartido",
        "text": "La asignación de impresoras acompaña los distintos momentos del pedido. Para terminar, conoceremos las cuentas con que las personas entran al panel."
      }
    ],
    "flow": [
      "Cobertura",
      "Reparto e impresión",
      "Usuarios"
    ]
  },
  {
    "id": "configuracion-sistema",
    "group": "Gestión · Módulo Configuración · Sistema",
    "title": "Sistema: cuentas y acceso al panel",
    "lead": "El último apartado del módulo configuración reúne Usuarios, donde se administran las cuentas del equipo.",
    "blocks": [
      {
        "title": "Leer el listado",
        "text": "Cada fila presenta usuario, rol, último acceso y estado <strong>Activo</strong>. La referencia muestra los roles Dueño y Cajero."
      },
      {
        "title": "Conservar los registros",
        "text": "La nota aclara que las cuentas con movimientos no se borran: se desactivan y la persona ya no puede entrar. <strong>Nuevo usuario</strong> abre el formulario que veremos a continuación."
      }
    ],
    "images": [
      {
        "asset": "config25",
        "caption": "Sistema: cuentas y acceso al panel. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "configuracion-usuario-nuevo",
    "group": "Gestión · Módulo Configuración · Sistema",
    "title": "Invitar a una persona al panel",
    "lead": "Nuevo usuario reúne los datos de la persona y el rol que se le asignará.",
    "blocks": [
      {
        "title": "Identificar la cuenta",
        "text": "El formulario pide <strong>Nombre</strong>, <strong>Correo</strong> y <strong>Rol</strong>. El selector permite elegir el rol; la captura no despliega su lista de opciones."
      },
      {
        "title": "Continuar por correo",
        "text": "<strong>Crear e invitar</strong> envía un correo para que la persona cree su propia contraseña y entre al panel, según la explicación del formulario."
      }
    ],
    "images": [
      {
        "asset": "config24",
        "caption": "Invitar a una persona al panel. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": false
  },
  {
    "id": "configuracion-usuarios-invitacion",
    "group": "Gestión · Módulo Configuración · Sistema",
    "title": "Reconocer una invitación pendiente",
    "lead": "El listado también permite distinguir las cuentas que aún esperan completar su invitación.",
    "blocks": [
      {
        "title": "Estado de la invitación",
        "text": "En las filas de referencia aparece <strong>Invitación pendiente</strong> en el lugar del último acceso, junto a la opción <strong>Reenviar</strong>."
      },
      {
        "title": "Separar acceso e invitación",
        "text": "El interruptor <strong>Activo</strong> se muestra por separado. Así podemos reconocer tanto el estado de acceso de la cuenta como la invitación que todavía está pendiente."
      }
    ],
    "images": [
      {
        "asset": "config26",
        "caption": "Reconocer una invitación pendiente. Detalle de la interfaz del negocio de ejemplo."
      }
    ],
    "wide": true
  },
  {
    "id": "ejemplo-configuracion",
    "group": "Gestión · Módulo Configuración · Sistema · Actividad de ejemplo",
    "title": "Preparar el acceso de una nueva persona",
    "lead": "Para cerrar el módulo configuración, imaginemos que se incorpora alguien al equipo del restaurante.",
    "blocks": [
      {
        "title": "1. Completar sus datos",
        "text": "Desde <strong>Nuevo usuario</strong> podemos indicar nombre, correo y rol antes de <strong>Crear e invitar</strong>."
      },
      {
        "title": "2. Acompañar la invitación",
        "text": "La persona recibe el correo para crear su contraseña. En el listado se puede reconocer una invitación pendiente y la opción de reenviarla."
      },
      {
        "title": "3. Volver al trabajo diario",
        "text": "Con la cuenta preparada, el recorrido vuelve al ingreso y a los módulos del restaurante. Podemos consultar cada sección cuando llegue el momento de realizar esa tarea."
      }
    ],
    "flow": [
      "Crear e invitar",
      "Completar el acceso",
      "Volver al recorrido"
    ]
  },
  {
    "id": "pendientes",
    "group": "Cierre del recorrido",
    "title": "Volver al recorrido cuando lo necesites",
    "lead": "Conocimos los módulos del restaurante y los ajustes que acompañan su uso. El índice permite volver a cada tarea cuando haga falta.",
    "blocks": [
      {
        "title": "Servicio",
        "text": "Los módulos pedidos, preparación y mesas acompañan la atención desde la solicitud hasta el trabajo del salón."
      },
      {
        "title": "Operación diaria y Gestión",
        "text": "Los módulos caja y tienda reúnen cobros y pedidos online. Los módulos ventas, productos, clientes, gastos y configuración permiten consultar y mantener la información del negocio."
      },
      {
        "title": "Lo que puede ampliarse",
        "text": "Los módulos inbox y reportes aparecen como PRONTO. Las acciones sobre pedidos de tienda y los resultados no mostrados en las capturas podrán incorporarse cuando existan nuevas referencias."
      }
    ]
  },
  {
    "id": "glosario",
    "group": "Consulta breve",
    "title": "Palabras que acompañan el recorrido",
    "lead": "Algunas distinciones ayudan a leer las pantallas y a conectar una etapa con la siguiente.",
    "blocks": [
      {
        "title": "Módulo y zona",
        "text": "Un <strong>módulo</strong> reúne herramientas para una tarea. Una <strong>zona</strong> es un espacio del salón, como Interior o Terraza."
      },
      {
        "title": "Canal y modalidad de entrega",
        "text": "El <strong>canal</strong> indica el origen del pedido, como Web, WhatsApp o Local. La entrega distingue Delivery, Para llevar o Servir aquí."
      },
      {
        "title": "Estado del pedido y estado del pago",
        "text": "En preparación, Listo y En ruta describen el servicio. <strong>Pagado</strong> y <strong>Por cobrar</strong> describen el pago; conviene leer ambos datos por separado."
      }
    ]
  }
];
