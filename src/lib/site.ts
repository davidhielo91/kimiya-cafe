// Fuente única de verdad para NAP (Name, Address, Phone) y datos operativos.
//
// Consistencia crítica para SEO local (SEO.md §13): este objeto alimenta
// metadata, schema JSON-LD, footer y página de ubicación. Nombre público
// oficial exacto: "Kimiya Café" (con acento). Los identificadores técnicos
// (dominio, slugs) permanecen sin acento.
//
// Datos no confirmados => `null` (TODO_CLIENT). Nunca inventar.

export const siteConfig = {
  name: "Kimiya Café",
  legalDomain: "kimiyacafe.com.mx",
  url: "https://kimiyacafe.com.mx",
  positioning:
    "Café de especialidad en Morelia para descubrir, aprender y experimentar.",
  brandPhrase:
    "Kimiya: café para descubrir, comunidad para compartir y experiencias para vivir.",
  foundingYear: 2026,

  contact: {
    phone: "4436971306",
    email: "kimiya231088@gmail.com",
    whatsapp: null as string | null,
  },

  social: {
    instagram: "https://www.instagram.com/kimiya.cafe",
    // Enlace canónico a la ficha de Google Business por CID.
    googleBusiness: "https://www.google.com/maps?cid=247101415948109667",
  },

  // Fechas relevantes del negocio (confirmadas en el cuestionario).
  keyDates: [
    { date: "05-20", name: "Aniversario de Kimiya Café" },
    { date: "10-01", name: "Día Internacional del Café" },
  ],

  address: {
    street: "Blvd. García de León 1201-A",
    neighborhood: "Chapultepec Oriente",
    postalCode: "58260",
    city: "Morelia",
    state: "Michoacán",
    country: "MX",
  },

  // Horarios en formato 24h. `null` = pendiente de confirmar (TODO_CLIENT).
  // El sábado bloquea el schema de horario definitivo hasta confirmarse.
  hours: {
    monday: { open: "08:00", close: "20:00" },
    tuesday: { open: "08:00", close: "20:00" },
    wednesday: { open: "08:00", close: "20:00" },
    thursday: { open: "08:00", close: "20:00" },
    friday: { open: "08:00", close: "20:00" },
    saturday: null,
    sunday: { open: "08:00", close: "17:00" },
  } as Record<string, { open: string; close: string } | null>,

  // Atributos locales para /ubicacion, FAQ y Google Business Profile.
  attributes: {
    takeaway: true,
    delivery: false,
    payments: ["efectivo", "transferencia", "tarjeta"],
    petFriendly: true,
    wifi: true,
    laptopFriendly: true,
    powerOutlets: true,
    ownParking: false,
    reservations: "solo eventos especiales",
    seatedCapacity: 20,
  },
} as const;

export type SiteConfig = typeof siteConfig;
