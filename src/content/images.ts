import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Capa de imágenes desacoplada (DESIGN.md §10.1 / §11).
//
// Cada "slot" es una posición visual del sitio y apunta a un archivo en
// /public/images/. Son FOTOGRAFÍAS REALES de Kimiya Café (nov 2026). El `alt`
// describe solo lo que se ve: no afirma bebidas, orígenes ni ingredientes que
// la foto no muestre (p. ej. el slot de cold brew usa la barra de métodos y su
// alt no dice "cold brew"). Solo se usan fotos sin personas reconocibles.
//
// Detección automática: se resuelve el archivo por nombre base probando varias
// extensiones. Si no existe ninguno, el slot devuelve null y la UI muestra un
// placeholder neutral. Al reemplazar el archivo (mismo nombre base), la imagen
// cambia sin tocar componentes.

export type ImageSlot =
  | "hero"
  | "coldBrew"
  | "grano"
  | "metodos"
  | "talleres"
  | "espresso"
  | "comunidad"
  | "brownie"
  | "mostrador"
  | "interior";

type SlotDef = {
  base: string;
  alt: string;
  /** Pie de foto visible (opcional). Da contexto a Google Imágenes y a la IA. */
  caption?: string;
  /** CSS object-position para encuadrar recortes panorámicos. */
  position?: string;
};

const SLOTS: Record<ImageSlot, SlotDef> = {
  hero: {
    base: "barra-kimiya-cafe-morelia",
    alt: "Barra de Kimiya Café en Morelia con el mural de grafiti, métodos de filtrado, frascos de café en grano y bancos metálicos.",
    position: "center 40%",
  },
  comunidad: {
    base: "interior-kimiya-cafe-mesas",
    alt: "Interior de Kimiya Café visto desde una mesa: taza de café en primer plano, mesas de madera y la barra al fondo.",
  },
  coldBrew: {
    base: "barra-metodos-sifon-origami",
    alt: "Barra de métodos de Kimiya Café con gotero Origami, sifón japonés y frascos de café en grano.",
    position: "center 60%",
  },
  grano: {
    base: "cafe-en-grano-kimiya",
    alt: "Granos de café tostado en una bandeja junto a un frasco con la etiqueta de Kimiya Café.",
  },
  metodos: {
    base: "metodo-filtrado-bascula",
    alt: "Gotero de filtrado sobre una jarra de servir y una báscula, entre frascos de café en grano, en la barra de Kimiya Café.",
    position: "center 30%",
  },
  talleres: {
    base: "filtrado-cafe-bloom",
    alt: "Café molido en pre-infusión dentro de un filtro de papel, visto desde arriba.",
  },
  espresso: {
    base: "maquina-espresso-kimiya-cafe",
    alt: "Máquina de espresso de dos grupos con tazas de vidrio en la barra de Kimiya Café, frente al mural de grafiti.",
    position: "center 60%",
  },
  brownie: {
    base: "brownie-red-velvet-kimiya",
    alt: "Brownie Red Velvet con vetas blancas junto a una taza de café, sobre una bandeja de vidrio.",
    caption: "Brownie Red Velvet acompañado de un café.",
  },
  mostrador: {
    base: "mostrador-tostadores-kimiya",
    alt: "Mostrador de Kimiya Café con cafés de tostadores invitados, gotero Origami, frascos de café en grano y vitrina de pan.",
    caption:
      "En la barra: cafés de tostadores con los que trabajamos, listos para llevar.",
    position: "center 30%",
  },
  interior: {
    base: "interior-kimiya-cafe-morelia",
    alt: "Interior de Kimiya Café: mesas de madera, lámpara de luz fría y la barra con el mural de grafiti al fondo.",
    caption:
      "Así nos encuentras: cuatro mesas y barra con cinco bancos frente al mural de grafiti.",
    position: "center 55%",
  },
};

// Extensiones aceptadas, en orden de preferencia (formatos ligeros primero).
const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png", ".avif"];

/** Resuelve el nombre de archivo real de /public/images/ para un nombre base. */
function resolveFile(base: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(join(process.cwd(), "public", "images", base + ext))) {
      return base + ext;
    }
  }
  return null;
}

export type SiteImage = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};

export const IMAGE_SLOTS = Object.keys(SLOTS) as ImageSlot[];

/** Devuelve la imagen del slot si existe algún archivo, o null. */
export function getImage(slot: ImageSlot): SiteImage | null {
  const def = SLOTS[slot];
  const file = resolveFile(def.base);
  if (!file) return null;
  return {
    src: `/images/${file}`,
    alt: def.alt,
    ...(def.caption ? { caption: def.caption } : {}),
    ...(def.position ? { position: def.position } : {}),
  };
}

/** Imágenes existentes de varios slots (para schema y sitemap). */
export function getImages(slots: ImageSlot[]): SiteImage[] {
  return slots
    .map((s) => getImage(s))
    .filter((img): img is SiteImage => img !== null);
}

/**
 * Fotos reales que aparecen en cada ruta, para el sitemap de imágenes.
 * `next/image` sirve /_next/image?url=…; declarar el original ayuda a que
 * Google Imágenes lo descubra.
 */
export const ROUTE_IMAGE_SLOTS: Record<string, ImageSlot[]> = {
  "/": ["hero", "coldBrew", "grano", "comunidad"],
  "/menu": ["espresso", "brownie"],
  "/cafe-en-grano": ["grano"],
  "/metodos": ["metodos"],
  "/talleres": ["talleres"],
  "/nosotros": ["mostrador"],
  "/ubicacion": ["interior"],
};

export type OgImage = { url: string; width: number; height: number };

/** Imagen Open Graph (og.*) con dimensiones reales del archivo, o null. */
export function getOgImage(): OgImage | null {
  const file = resolveFile("og");
  if (!file) return null;
  let width = 1200;
  let height = 630;
  if (file.endsWith(".png")) {
    // Dimensiones desde el IHDR del PNG (bytes 16/20).
    try {
      const buf = readFileSync(join(process.cwd(), "public", "images", file));
      width = buf.readUInt32BE(16);
      height = buf.readUInt32BE(20);
    } catch {
      /* usa los valores por defecto */
    }
  }
  return { url: `/images/${file}`, width, height };
}
