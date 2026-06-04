const productos = [
  {
    id: 1,
    nombre: "Bolso/Mochila The North Face negro XS",
    precio: 240000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "The North Face",
    talle: "XS",
    condicion: "Nuevo",
    descripcion:
      "Bolso/mochila The North Face original, color negro, talle XS. Nuevo. Es súper versátil: se puede usar como bolso de viaje o como mochila gracias a sus tiras traseras. Tiene varios compartimentos, cierres y correas de ajuste. Ideal para viajes, escapadas, gimnasio o uso diario.",
    imagenes: [
      "img/Captura de pantalla 2026-03-15 163102.png",
      "img/Captura de pantalla 2026-03-15 163150.png",
      "img/Captura de pantalla 2026-03-15 163212.png",
      "img/Captura de pantalla 2026-03-15 163255.png"
    ],
    destacado: true
  },

  {
    id: 2,
    nombre: "Zapatillas Columbia Drainmaker negras",
    precio: 120000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Columbia",
    talle: "36",
    condicion: "Nuevo",
    descripcion:
      "Zapatillas Columbia Drainmaker nuevas, talle 36, color negro/gris. Modelo liviano, respirable y de secado rápido, pensado para actividades al aire libre, agua, caminatas o uso urbano cómodo. Tienen sistema de ajuste rápido con cordón elástico.",
    imagenes: [
      "img/columbia drainmaker 2.png",
      "img/columbia drainmaker 3.png",
      "img/columbia drainmaker.png"
    ],
    destacado: true
  },

  {
    id: 3,
    nombre: "Bolso Mountain Gear verde 71L",
    precio: 70000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Mountain Gear",
    talle: "71L",
    condicion: "Nuevo",
    descripcion:
      "Bolso Mountain Gear nuevo, color verde con detalles negros, capacidad 71 litros. Amplio, práctico y cómodo para viajes, deporte, camping o escapadas. Cuenta con manijas superiores y correa larga para llevar al hombro.",
    imagenes: [
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (1).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (2).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (3).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (4).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (5).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (6).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (7).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (8).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM (10).jpeg",
      "img/WhatsApp Image 2026-03-15 at 3.47.31 PM.jpeg"
    ],
    destacado: false
  },

  {
    id: 4,
    nombre: "Fundidor de cera depilatoria Europa 2000 doble",
    precio: 240000,
    categoria: "Electro",
    estado: "Disponible",
    marca: "Ceratermic Europa 2000",
    talle: "",
    condicion: "Usado impecable",
    descripcion:
      "Fundidor/calentador de cera depilatoria Europa 2000 doble, en estado como nuevo. Funciona perfecto y no tiene detalles. Tiene dos recipientes independientes con reguladores de temperatura. Incluye cera depilatoria vegetal Depimiel. Ideal para uso personal o gabinete.",
    imagenes: [
      "img/WhatsApp Image 2026-03-15 at 4.42.51 PM.jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (1).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (2).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (3).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (4).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (5).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (6).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (7).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM (8).jpeg",
      "img/WhatsApp Image 2026-03-15 at 4.42.52 PM.jpeg"
    ],
    destacado: false
  },

  {
    id: 5,
    nombre: "Biker negra Compañía del Sol",
    precio: 18000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Compañía del Sol",
    talle: "S",
    condicion: "Usada impecable",
    descripcion:
      "Biker negra Compañía del Sol, talle S. Está como nueva, en estado impecable. Modelo corto, tiro alto y de calce cómodo. Ideal para entrenar, usar con buzos oversize o armar looks casuales.",
    imagenes: [
      "img/Biker Compañia del sol.jpeg"
    ],
    destacado: false
  },

  {
    id: 6,
    nombre: "Cartera negra H&M con cadena",
    precio: 25000,
    categoria: "Accesorios",
    estado: "Disponible",
    marca: "H&M",
    talle: "Mediana",
    condicion: "Usada impecable",
    descripcion:
      "Cartera negra H&M de tamaño mediano, con cadena metálica y tira superior. Usada una sola vez, en estado impecable. Diseño simple y elegante, ideal para salida, evento o uso diario con lo justo.",
    imagenes: [
      "img/Cartera H&M.jpeg"
    ],
    destacado: false
  },

  {
    id: 7,
    nombre: "Palazzo beige con moño",
    precio: 20000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Sin marca",
    talle: "Único, va bien para 36 de jean",
    condicion: "Usado impecable",
    descripcion:
      "Palazzo beige con cintura elastizada y lazo/moño al frente. Talle único, va bien para un 36 de jean. Está como nuevo, en estado impecable. Tela liviana con caída cómoda, ideal para looks frescos, casuales o más arreglados.",
    imagenes: [
      "img/Palazo moño.jpeg"
    ],
    destacado: false
  },

  {
    id: 8,
    nombre: "Pantalón Forclaz desmontable negro/gris",
    precio: 75000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Forclaz",
    talle: "34/36 de jean",
    condicion: "Nuevo con etiqueta",
    descripcion:
      "Pantalón Forclaz técnico en negro y gris, nuevo con etiqueta. Talle aproximado 34/36 de jean. Es desmontable, por lo que se puede convertir en short. Ideal para trekking, camping, viaje o actividades al aire libre. Tiene bolsillos con cierre, cintura cómoda y diseño funcional.",
    imagenes: [
      "img/Pantalon Forclaz 1.jpeg",
      "img/Pantalon Florclaz 2.jpeg",
      "img/Pantalon Forclaz.jpeg"
    ],
    destacado: false
  },

  {
    id: 9,
    nombre: "Pantalón negro Key Biscayne",
    precio: 75000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Key Biscayne",
    talle: "M",
    condicion: "Usado",
    descripcion:
      "Pantalón negro Key Biscayne, talle M. Usado, pero está como nuevo. Corte clásico, tela con buena caída, cintura elastizada en la parte trasera, bolsillos y terminación prolija. Ideal para uso diario, oficina o looks casuales más arreglados.",
    imagenes: [
      "img/Pantalon Key Biscane 1.jpeg",
      "img/Pantalon Key Biscane.jpeg"
    ],
    destacado: false
  },

  {
    id: 10,
    nombre: "Pantalón beige Mango 100% lino",
    precio: 80000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Mango",
    talle: "M",
    condicion: "Nuevo",
    descripcion:
      "Pantalón beige Mango, talle M, nuevo. Composición 100% lino. Estilo clásico y elegante, con bolsillos y pasacintos. Ideal para looks neutros, de oficina, verano o media estación.",
    imagenes: [
      "img/Pantalon Mango 1.jpeg",
      "img/Pantalon Mango 2.jpeg"
    ],
    destacado: false
  },

  {
    id: 11,
    nombre: "Polar Quechua lila con cierre",
    precio: 30000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Quechua",
    talle: "14",
    condicion: "Nuevo con etiqueta",
    descripcion:
      "Polar Quechua color lila/grisáceo, talle 14, nuevo con etiqueta. Tiene medio cierre y cuello alto. Es liviano, abrigado y cómodo, ideal para trekking, viaje, camping o uso diario en días frescos.",
    imagenes: [
      "img/Polar Quechua 1.jpeg",
      "img/Polar Quechua 2.jpeg",
      "img/Polar Quechua.jpeg"
    ],
    destacado: false
  },

  {
    id: 12,
    nombre: "Sweater polera Burgues color crema",
    precio: 60000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Burgues",
    talle: "M",
    condicion: "Usado",
    descripcion:
      "Sweater polera Burgues color crema, talle M. Usado, en buen estado general. Tiene una pequeña manchita en la manga que no sé si sale con lavado. Tejido suave, cuello alto y diseño básico, ideal para usar solo o debajo de tapados, blazers o camperas.",
    imagenes: [
      "img/Polera Burges Crema.jpeg",
      "img/Polera Burgues Crema 1.jpeg"
    ],
    destacado: false
  },

  {
    id: 13,
    nombre: "Sweater polera Burgues azul",
    precio: 75000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Burgues",
    talle: "M",
    condicion: "Usado",
    descripcion:
      "Sweater polera Burgues azul, talle M. Usado, como nuevo. Tejido suave, cuello alto y diseño clásico. Básico, abrigado y fácil de combinar, ideal para invierno, oficina o looks simples más arreglados.",
    imagenes: [
      "img/Polera Burgues.jpeg",
      "img/Polera Burgues 1.jpeg"
    ],
    destacado: false
  },

  {
    id: 14,
    nombre: "Sweater polera Rochas negro",
    precio: 75000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Rochas",
    talle: "M",
    condicion: "Usado",
    descripcion:
      "Sweater polera Rochas negro, talle M. Usado, como nuevo. De cuello alto y diseño clásico. Prenda básica, abrigada y versátil, ideal para usar en invierno con jeans, pantalón sastrero o debajo de camperas.",
    imagenes: [
      "img/Polera Rochas.jpeg",
      "img/Polera Rochas 1.jpeg"
    ],
    destacado: false
  },
    {
    id: 15,
    nombre: "Remera de hilo rayada Lefties",
    precio: 20000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Lefties",
    talle: "XS, va bien para S y hasta M",
    condicion: "Nueva",
    descripcion:
      "Remera de hilo Lefties, rayada en blanco y negro. Talle XS, pero va bien para un S y hasta un M por el tipo de tejido. Nueva. Ideal para usar sola o debajo de blazer, camisa o campera.",
    imagenes: [
      "img/Remera Lefties.jpeg"
    ],
    destacado: false
  },

  {
    id: 16,
    nombre: "Remera negra de hilo Primark",
    precio: 20000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Primark",
    talle: "S",
    condicion: "Nueva",
    descripcion:
      "Remera negra de hilo Primark, talle S. Nueva. Modelo sin mangas, básico y súper combinable. Ideal para usar con jeans, pantalones sastreros, polleras o debajo de camisas y blazers.",
    imagenes: [
      "img/Remera primark.jpeg"
    ],
    destacado: false
  },

  {
    id: 17,
    nombre: "Ruanas nuevas con flecos",
    precio: 22000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Sin marca",
    talle: "Único",
    condicion: "Nuevas",
    descripcion:
      "Ruanas nuevas con flecos, disponibles en color marfil y mostaza. Talle único. Son cómodas, abrigadas y fáciles de combinar. Precio por unidad: $22.000. Promo por las dos: $40.000.",
    imagenes: [
      "img/Ruana marfil.jpeg",
      "img/Ruana.jpeg"
    ],
    destacado: false
  },

  {
    id: 18,
    nombre: "Sweater negro manga globo",
    precio: 40000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Sin marca",
    talle: "unico", // TODO: completar talle si lo sabés
    condicion: "Nuevo",
    descripcion:
      "Sweater negro nuevo, de calidad premium. Modelo corto con mangas globo y tejido gruesito. Tiene un diseño moderno y canchero, ideal para usar con jeans, pantalón tiro alto o polleras.",
    imagenes: [
      "img/Sweater negro globo.jpeg",
      "img/Sweater negro globo 1.jpeg",
      "img/Sweater negro globo 2.jpeg"
    ],
    destacado: false
  },

  {
    id: 19,
    nombre: "Sweater polera color camel",
    precio: 40000,
    categoria: "Ropa",
    estado: "Disponible",
    marca: "Sin marca",
    talle: "unico", // TODO: completar talle si lo sabés
    condicion: "Nuevo",
    descripcion:
      "Sweater polera nuevo, color camel, de calidad premium. Modelo corto, con cuello alto y tejido abrigado. Ideal para looks de invierno, para usar con jean tiro alto, pantalón sastrero o falda.",
    imagenes: [
      "img/Sweater polera.jpeg",
      "img/Sweater polera 1.jpeg"
    ],
    destacado: false
  }
];