import { describe, it, expect } from "vitest";
import {
  getImage,
  getOgImage,
  IMAGE_SLOTS,
  ROUTE_IMAGE_SLOTS,
} from "@/content/images";
import { expImages } from "@/content/experiencia-sensorial";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

describe("capa de imágenes", () => {
  it("todos los slots resuelven a una foto real existente", () => {
    for (const slot of IMAGE_SLOTS) {
      const img = getImage(slot);
      expect(img, `slot sin archivo: ${slot}`).not.toBeNull();
      expect(img!.src.startsWith("/images/")).toBe(true);
    }
  });

  it("cada alt es descriptivo y único", () => {
    const alts = IMAGE_SLOTS.map((s) => getImage(s)!.alt);
    for (const alt of alts) expect(alt.length).toBeGreaterThan(30);
    expect(new Set(alts).size).toBe(alts.length);
  });

  it("los nombres de archivo son descriptivos (kebab-case, sin genéricos)", () => {
    for (const slot of IMAGE_SLOTS) {
      const file = getImage(slot)!.src.replace("/images/", "");
      expect(file).toMatch(/^[a-z0-9-]+\.(webp|jpg|jpeg|png|avif)$/);
      expect(file).not.toMatch(/^(hero|image|img|foto)\./);
    }
  });

  it("el sitemap de imágenes solo referencia slots válidos", () => {
    for (const slots of Object.values(ROUTE_IMAGE_SLOTS)) {
      for (const slot of slots) expect(IMAGE_SLOTS).toContain(slot);
    }
  });

  it("cada foto real lleva metadatos XMP de Kimiya Café con ubicación", () => {
    for (const slot of IMAGE_SLOTS) {
      const src = getImage(slot)!.src;
      const raw = readFileSync(join(process.cwd(), "public", src)).toString(
        "latin1",
      );
      expect(raw, src).toContain("<x:xmpmeta");
      expect(raw, src).toContain("GPSLatitude");
    }
  });

  it("existe la imagen OG", () => {
    expect(getOgImage()).not.toBeNull();
  });

  it("las imágenes de Experiencia Sensorial existen en disco", () => {
    for (const { src } of Object.values(expImages)) {
      expect(existsSync(join(process.cwd(), "public", src)), src).toBe(true);
    }
  });
});
