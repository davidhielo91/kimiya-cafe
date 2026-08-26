// Fuente única de verdad para NAP (Name, Address, Phone) y datos operativos.
//
// Consistencia crítica para SEO local (SEO.md §13): este objeto alimenta
// metadata, schema JSON-LD, footer y página de ubicación. Nombre público
// oficial exacto: "Kimiya Café" (con acento). Los identificadores técnicos
// (dominio, slugs) permanecen sin acento.
//
// Datos no confirmados => `null` (TODO_CLIENT). Nunca inventar.

// URL base del sitio. Se toma de SITE_URL para que canonical/OG/schema apunten
// al dominio donde realmente está servido (preview de Coolify, staging o prod).
// Fallback al dominio de producción. Configurar SITE_URL en el entorno del
// despliegue (sin barra final).
const SITE_URL = (process.env.SITE_URL ?? "https://kimiyacafe.com.mx").replace(
  /\/+$/,
  "",
);

export const siteConfig = {
  name: "Kimiya Café",
  legalDomain: "kimiyacafe.com.mx",
  url: SITE_URL,
  positioning:
    "Café de especialidad en Morelia para descubrir, aprender y experimentar.",
  brandPhrase:
    "Kimiya: café para descubrir, comunidad para compartir y experiencias para vivir.",
  foundingYear: 2026,

  contact: {
    phone: "4436971306",
    // Correo profesional público. Configurar el buzón del dominio (o una
    // redirección al correo real del negocio) antes de producción para no
    // perder mensajes.
    email: "contacto@kimiyacafe.com.mx",
    whatsapp: null as string | null,
  },

  social: {
    instagram: "https://www.instagram.com/kimiya.cafe",
    // Enlace canónico a la ficha de Google Business por CID.
    googleBusiness: "https://www.google.com/maps?cid=247101415948109667",
  },

  // Analítica. El Measurement ID de GA4 es público (va en el HTML del cliente).
  // Solo se carga en el dominio de producción (ver layout).
  analytics: {
    ga4Id: "G-STST166XH4",
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

  // Coordenadas del pin de Google Maps (para el geo del schema local).
  geo: {
    latitude: 19.6891623,
    longitude: -101.1648761,
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

// Verdadero solo cuando el sitio se sirve desde el dominio de producción
// (kimiyacafe.com.mx o un subdominio suyo). Fuente única para decidir qué se
// indexa: layout (robots meta) y robots.txt la comparten para no divergir.
export function isProductionHost(): boolean {
  const host = new URL(siteConfig.url).hostname;
  return (
    host === siteConfig.legalDomain ||
    host.endsWith("." + siteConfig.legalDomain)
  );
}
