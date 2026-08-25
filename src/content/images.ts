import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Capa de imágenes desacoplada (DESIGN.md §10.1 / §11).
//
// Cada "slot" es una posición visual del sitio y apunta a un archivo en
// /public/images/. El `alt` es AUTORADO aquí, honesto y genérico: describe la
// escena de forma ilustrativa y nunca afirma que sea el local, un producto o un
// taller reales de Kimiya Café.
//
// Detección automática: se resuelve el archivo por nombre base probando varias
// extensiones. Si no existe ninguno, el slot devuelve null y la UI muestra un
// placeholder neutral. Al subir el archivo, la imagen aparece sin tocar nada.

export type ImageSlot =
  | "hero"
  | "coldBrew"
  | "grano"
  | "metodos"
  | "talleres"
  | "espresso"
  | "comunidad";

type SlotDef = { base: string; alt: string };

const SLOTS: Record<ImageSlot, SlotDef> = {
  hero: {
    base: "hero",
    alt: "Ambiente cálido alrededor de una taza de café de especialidad.",
  },
  comunidad: {
    base: "comunidad",
    alt: "Persona con un estilo de vida activo disfrutando un café para llevar.",
  },
  coldBrew: {
    base: "cold-brew",
    alt: "Café frío servido sobre hielo en un vaso de vidrio.",
  },
  grano: {
    base: "cafe-en-grano",
    alt: "Granos de café tostado de especialidad vistos de cerca.",
  },
  metodos: {
    base: "metodos",
    alt: "Preparación de café por goteo en un método de filtrado.",
  },
  talleres: {
    base: "talleres",
    alt: "Personas catando y comparando tazas de café sobre una mesa.",
  },
  espresso: {
    base: "menu-espresso",
    alt: "Extracción de un espresso en una máquina de café.",
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

export type SiteImage = { src: string; alt: string };

/** Devuelve la imagen del slot si existe algún archivo, o null. */
export function getImage(slot: ImageSlot): SiteImage | null {
  const def = SLOTS[slot];
  const file = resolveFile(def.base);
  if (!file) return null;
  return { src: `/images/${file}`, alt: def.alt };
}

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
