import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { gallery } from "@/content/gallery";

const file = (src: string) => join(process.cwd(), "public", src);

describe("galería El espacio", () => {
  it("cada foto existe en disco", () => {
    for (const p of gallery) expect(existsSync(file(p.src)), p.src).toBe(true);
  });

  it("alts descriptivos y únicos; ids únicos; dimensiones reales", () => {
    const alts = gallery.map((p) => p.alt);
    for (const alt of alts) expect(alt.length).toBeGreaterThan(20);
    expect(new Set(alts).size).toBe(alts.length);
    expect(new Set(gallery.map((p) => p.id)).size).toBe(gallery.length);
    for (const p of gallery) {
      expect(p.width).toBeGreaterThan(0);
      expect(p.height).toBeGreaterThan(0);
    }
  });

  it("cada foto lleva metadatos XMP de Kimiya Café con ubicación", () => {
    for (const p of gallery) {
      const raw = readFileSync(file(p.src)).toString("latin1");
      expect(raw, p.src).toContain("<x:xmpmeta");
      expect(raw, p.src).toContain("GPSLatitude");
    }
  });
});
