// Contenido de la página inmersiva del taller "Experiencia Sensorial"
// (/talleres/experiencia-sensorial). Capa de datos desacoplada del JSX
// (AGENTS.md §7 / CONTENT.md §1).
//
// Los datos de negocio (precio, mínimo de personas, dirección, teléfono,
// horario) NO se duplican aquí: la página los toma de la fuente única
// `src/lib/site.ts`. Este archivo solo contiene el contenido editorial y
// educativo específico de la experiencia.
//
// Regla del proyecto: nunca inventar datos. Dos elementos del mockup original
// quedan FUERA por no estar confirmados/documentados (ver "información que
// falta" en Notion): (1) la duración del taller ("2 h aprox."), y (2) las
// estadísticas de consumo de café (68 % / 97 % / 29 %), sin fuente citable.

export type TasteSide = "left" | "right";

export type ExpImageKey =
  | "hero"
  | "cultivo"
  | "proceso"
  | "tueste"
  | "dulce"
  | "acido"
  | "amargo"
  | "salado"
  | "umami"
  | "cta"
  | "rueda"
  | "molecula";

export type ExpImage = { src: string; alt: string };

// Fotos ilustrativas (WebP en /public/images/experiencia-sensorial/). El `alt`
// describe la escena de forma honesta y nunca afirma que sea el local, un
// producto o un taller reales de Kimiya Café (DESIGN.md §10.1).
export const expImages: Record<ExpImageKey, ExpImage> = {
  hero: {
    src: "/images/experiencia-sensorial/hero.webp",
    alt: "Taza blanca rebosante de granos de café tostado sobre un fondo oscuro.",
  },
  cultivo: {
    src: "/images/experiencia-sensorial/cultivo.webp",
    alt: "Cerezas de café maduras y brillantes en la rama de un cafeto.",
  },
  proceso: {
    src: "/images/experiencia-sensorial/proceso.webp",
    alt: "Tres montones de granos de café —crudo, tostado medio y oscuro— sobre madera.",
  },
  tueste: {
    src: "/images/experiencia-sensorial/tueste.webp",
    alt: "Granos de café saliendo del tambor de un tostador iluminados con luz ámbar.",
  },
  dulce: {
    src: "/images/experiencia-sensorial/dulce.webp",
    alt: "Pastel de fresas con capas de crema, en corte.",
  },
  acido: {
    src: "/images/experiencia-sensorial/acido.webp",
    alt: "Gajo de cítrico traslúcido iluminado a contraluz.",
  },
  amargo: {
    src: "/images/experiencia-sensorial/amargo.webp",
    alt: "Humo y llamas anaranjadas sobre un fondo negro.",
  },
  salado: {
    src: "/images/experiencia-sensorial/salado.webp",
    alt: "Cristales de sal derramándose de un frasco de vidrio.",
  },
  umami: {
    src: "/images/experiencia-sensorial/umami.webp",
    alt: "Plato de pollo a la parrilla con arroz y verduras asadas.",
  },
  cta: {
    src: "/images/experiencia-sensorial/cta.webp",
    alt: "Capuchino con arte latte visto desde arriba sobre una mesa oscura.",
  },
  // Gráfico circular con las familias de sabor ilustradas con ingredientes
  // reales; las etiquetas y el texto central ya vienen incluidos en la imagen.
  rueda: {
    src: "/images/experiencia-sensorial/rueda-de-cata-sabores-cafe.webp",
    alt: "Rueda de cata de sabores del café: familias de aroma —dulce, floral, afrutado, ácido, vegetal, tostado, especias y cacao— ilustradas con ingredientes reales.",
  },
  // Ilustración estilizada de la molécula de cafeína.
  molecula: {
    src: "/images/experiencia-sensorial/molecula-cafeina-cafe.webp",
    alt: "Ilustración estilizada de la molécula de la cafeína.",
  },
};

export const experienciaSensorial = {
  hero: {
    eyebrow: "Taller · Kimiya Café",
    titleTop: "Experiencia",
    titleBottom: "Sensorial",
    lead: "Un recorrido para descubrir el café desde su origen hasta la taza. Aprende a reconocer aromas, sabores y sensaciones — y a entender por qué un café puede saber a fruta, flores o cacao.",
    // Solo datos confirmados. La duración se omite hasta confirmarla con el
    // cliente (ver "información que falta" en Notion).
    meta: [
      { strong: "$250", rest: "por persona" },
      { strong: "Grupos pequeños", rest: "· mínimo 4" },
      { strong: "Morelia", rest: "· García de León" },
    ],
  },

  hook: {
    question: "¿Cómo te gusta",
    questionEmphasis: "el café?",
    sub: "(¿o cómo crees que te gusta?)",
    body: "El café acompaña casi todos nuestros días, pero pocas veces nos detenemos a conocerlo. En este taller no necesitas ser experto: solo curiosidad. Vamos a despertar tus sentidos y a darte las palabras para describir lo que ya sientes en cada taza.",
    // Cifras de contexto de consumo de café en México aportadas por el cliente
    // en el cuestionario (historia del negocio, pregunta 8). No son inventadas.
    stats: [
      { n: "68%", l: "de los mexicanos toma café" },
      { n: "~97%", l: "de los hogares lo tiene presente" },
      { n: "29%", l: "compra café tostado o molido" },
    ],
  },

  programa: {
    eyebrow: "El programa",
    lead: "Cuatro momentos que van de lo que ya sabes hacia lo que vas a descubrir.",
    steps: [
      {
        n: "01",
        title: "Introducción",
        text: "Qué es el café de especialidad y por qué dos tazas pueden saber completamente distinto.",
      },
      {
        n: "02",
        title: "Análisis sensorial",
        text: "Cómo funcionan el gusto y el olfato, y cómo construyen juntos lo que llamamos sabor.",
      },
      {
        n: "03",
        title: "Evaluación del café",
        text: "Cataremos varios cafés de forma comparativa para reconocer sus diferencias.",
      },
      {
        n: "04",
        title: "Intercambio de resultados",
        text: "Compartimos lo que cada quien percibió — porque en la cata no hay respuestas incorrectas.",
      },
    ],
  },

  generalidades: {
    eyebrow: "Generalidades",
    lead: "Antes de probar, vale la pena ubicar de dónde viene esta bebida que tomamos casi sin pensar.",
    pillars: [
      {
        title: "Origen",
        text: "Nace de un fruto — la cereza de café — cultivado en las regiones montañosas del mundo.",
      },
      {
        title: "Importancia",
        text: "Detrás de cada taza hay productores, regiones y procesos que rara vez vemos.",
      },
      {
        title: "Popularidad",
        text: "Una de las bebidas más consumidas del planeta, y aun así, una gran desconocida.",
      },
    ],
  },

  cafeina: {
    eyebrow: "La molécula",
    lead: "El compuesto que nos despierta también da carácter a la taza. Aquí es donde el café se vuelve química — la kimiya que nos da nombre.",
    pillars: [
      {
        title: "Características",
        text: "Un alcaloide natural presente en el grano.",
      },
      { title: "Efecto", text: "Estimula y aporta ese impulso de energía." },
      { title: "Sabor", text: "Suma amargor y cuerpo al perfil del café." },
    ],
  },

  calidad: {
    eyebrow: "Cómo se habla de un buen café",
    lead: "Vas a escuchar muchas palabras para nombrar un café que vale la pena. Todas apuntan a lo mismo: cuidado, en cada etapa.",
    chips: [
      "Gama alta",
      "Microlote",
      "Exclusivo",
      "De altura",
      "Especial",
      "Selecto",
    ],
  },

  trazabilidad: {
    eyebrow: "De la semilla a tu taza",
    lead: "Conocer el camino del café es lo que convierte una taza cotidiana en algo interesante. Todo se resume en tres etapas.",
    rail: [
      { idx: "i", title: "Cultivo", text: "Dónde y cómo creció el grano." },
      {
        idx: "ii",
        title: "Proceso",
        text: "Cómo se trató la cereza después de la cosecha.",
      },
      {
        idx: "iii",
        title: "Tueste",
        text: "El punto de fuego que revela su sabor.",
      },
    ],
  },

  cultivo: {
    eyebrow: "Etapa 01 · ¿En dónde creció?",
    lead: "El origen deja su huella en la taza: la tierra, la altura y la variedad se prueban.",
    tags: ["Localización", "Variedad", "Cosecha", "Selecto", "General"],
  },

  proceso: {
    eyebrow: "Etapa 02 · Proceso / Beneficio",
    lead: "La forma de secar la cereza define buena parte del sabor. Tres caminos, tres personalidades.",
    trio: [
      { title: "Lavado", text: "Limpio, definido y brillante." },
      { title: "Honey", text: "Dulce, balanceado y aromático." },
      { title: "Natural", text: "Frutal, intenso y complejo." },
    ],
  },

  tueste: {
    eyebrow: "Etapa 03 · El punto de fuego",
    lead: "Del más claro al más oscuro, el tueste decide cuánto brilla la acidez o el cuerpo.",
    roast: [
      { color: "#b07a49", name: "Claro", value: "95 – 75" },
      { color: "#7a4a2c", name: "Medio", value: "65 – 55" },
      { color: "#3d251a", name: "Oscuro", value: "45 – 25" },
    ],
    note: "Valores en escala Agtron",
  },

  sca: {
    eyebrow: "El estándar del mundo",
    lead: "La SCA (Specialty Coffee Association) reúne a una comunidad global alrededor de una idea: café hecho con calidad, excelencia y respeto por su origen.",
    badges: [
      { big: "+100", caption: "países" },
      { big: "Miles", caption: "de profesionales" },
      { big: "Global", caption: "comunidad de cafés" },
    ],
    defiende: ["Calidad", "Excelencia", "Sostenibilidad", "Comercio justo"],
    scale: [
      { range: "90–100", label: "Excepcional", dim: false },
      { range: "85–89", label: "Excelente", dim: false },
      { range: "80–84", label: "Muy bueno", dim: false },
      { range: "75–79", label: "Buena calidad", dim: true },
      { range: "70–74", label: "Calidad baja", dim: true },
      { range: "<70", label: "Fuera de especialidad", dim: true },
    ],
    note: "Un café se considera «de especialidad» a partir de los 80 puntos.",
  },

  gustoIntro: {
    eyebrow: "Percepción",
    question: "¿A qué sabe",
    questionEmphasis: "el café?",
    body: "Todo lo que percibimos se apoya en cinco gustos básicos. Aprender a distinguirlos es la llave para nombrar lo que sientes en la taza.",
    list: ["Dulce", "Ácido", "Amargo", "Salado", "Umami"],
  },

  tastes: [
    {
      index: "01",
      name: "Dulce",
      image: "dulce" as ExpImageKey,
      side: "left" as TasteSide,
      desc: "La señal de energía y recompensa. En el café aparece como caramelo, chocolate o fruta madura.",
      notes: [
        { label: "Carbohidratos", key: true },
        { label: "Satisfacción", key: false },
        { label: "Energía", key: false },
      ],
    },
    {
      index: "02",
      name: "Ácido",
      image: "acido" as ExpImageKey,
      side: "right" as TasteSide,
      desc: "Brillo y vida en la taza. La buena acidez recuerda a cítricos, manzana o frutos rojos.",
      notes: [
        { label: "Agrio", key: false },
        { label: "Tartárico", key: false },
        { label: "Cítrico", key: true },
        { label: "Málico", key: false },
        { label: "Láctico", key: false },
      ],
    },
    {
      index: "03",
      name: "Amargo",
      image: "amargo" as ExpImageKey,
      side: "left" as TasteSide,
      desc: "Un gusto que se aprende a apreciar. En su punto justo aporta cuerpo; en exceso, avisa.",
      notes: [
        { label: "Desagradable", key: false },
        { label: "Adquirido", key: false },
        { label: "Defensa", key: true },
      ],
    },
    {
      index: "04",
      name: "Salado",
      image: "salado" as ExpImageKey,
      side: "right" as TasteSide,
      desc: "Sutil, casi imperceptible en el café, pero capaz de realzar y equilibrar otros sabores.",
      notes: [
        { label: "Sequedad", key: false },
        { label: "Potencializa", key: true },
        { label: "Sodio · Potasio", key: false },
      ],
    },
    {
      index: "05",
      name: "Umami",
      image: "umami" as ExpImageKey,
      side: "left" as TasteSide,
      desc: "El gusto de lo sabroso y profundo. Da esa sensación redonda y satisfactoria en boca.",
      notes: [
        { label: "Proteínas", key: false },
        { label: "+ Sabor", key: true },
        { label: "Delicioso", key: false },
      ],
    },
  ],

  cupping: {
    eyebrow: "Cupping · Cata",
    lead: "Al final, ponemos nombre a lo que percibimos con la rueda de sabores: la herramienta que usan los catadores de todo el mundo para pasar de «me gusta» a «sabe a…».",
    lead2:
      "Del centro hacia afuera, las familias se abren en matices — de lo afrutado y floral a lo tostado y las especias. Tú le pondrás las palabras a tu café.",
  },

  final: {
    eyebrow: "Reserva tu experiencia",
    titleTop: "Vívelo",
    titleBottom: "en Kimiya",
  },
} as const;
