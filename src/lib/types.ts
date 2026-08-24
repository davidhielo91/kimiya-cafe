// Modelos tipados de dominio de Kimiya Café.
//
// Regla (AGENTS.md §7 / CONTENT.md §1): el contenido comercial vive en la capa
// de datos (`src/content/*`), no dentro del JSX. Estos tipos son el contrato
// estable entre archivos estáticos hoy y un panel/CMS en el futuro.
//
// Un dato no confirmado se representa como `null` (nunca inventado). Los IDs y
// slugs deben permanecer estables para soportar rotación de catálogo.

export type MenuCategory =
  | "espresso-bar-caliente"
  | "espresso-bar-frio"
  | "brew-bar"
  | "cold-brew"
  | "talleres"
  | "alimentos"
  | "cafe-en-grano";

export type MenuItem = {
  id: string;
  slug?: string;
  name: string;
  description: string;
  category: MenuCategory;
  /** `null` = precio aún no transcrito del menú vigente. No inventar. */
  price: number | null;
  available: boolean;
  featured: boolean;
  image: string | null;
  tags: string[];
};

/** Proceso de beneficiado del café. */
export type CoffeeProcess =
  | "lavado"
  | "honey"
  | "natural"
  | "experimental";

export type Coffee = {
  id: string;
  slug: string;
  name: string;
  origin: string | null;
  producer: string | null;
  roaster: string | null;
  process: CoffeeProcess | null;
  /** Notas del perfil sensorial (aromas, sabores). */
  sensoryProfile: string[];
  /** Presentación habitual, p. ej. "250 g". */
  presentation: string | null;
  price: number | null;
  grindOnDemand: boolean;
  available: boolean;
  image: string | null;
};

export type BrewMethod = {
  id: string;
  slug: string;
  name: string;
  /** Explicación accesible del método (SEO.md §10: intención educativa). */
  description: string;
  image: string | null;
};

export type Workshop = {
  id: string;
  slug: string;
  name: string;
  purpose: string;
  /** Qué se explora durante la experiencia. */
  explores: string;
  /** Para quién es. */
  audience: string;
  pricePerPerson: number;
  minParticipants: number;
  requiresReservation: boolean;
  /** `null` = canal exacto de reserva pendiente (TODO_CLIENT). */
  reservationChannel: string | null;
  image: string | null;
};

export type Promotion = {
  id: string;
  name: string;
  description: string;
};
