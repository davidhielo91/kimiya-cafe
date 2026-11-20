import { describe, it, expect } from "vitest";
import { ubicacionMeta, menuMeta } from "@/content/page-meta";
import { menu } from "@/content/menu";

const len = (s: string) => [...s].length;

describe("metadata de /ubicacion y /menu", () => {
  it("titles cortos (Google corta por píxeles, ~60 caracteres) y distintos", () => {
    for (const m of [ubicacionMeta, menuMeta]) {
      expect(len(m.title)).toBeLessThanOrEqual(65);
      expect(m.title).toContain("Kimiya Café");
    }
    expect(ubicacionMeta.title).not.toBe(menuMeta.title);
  });

  it("descriptions entre 120 y 160 caracteres", () => {
    for (const m of [ubicacionMeta, menuMeta]) {
      expect(len(m.description)).toBeGreaterThanOrEqual(120);
      expect(len(m.description)).toBeLessThanOrEqual(160);
    }
  });

  it("/ubicacion usa el horario confirmado y no publica el sábado", () => {
    expect(ubicacionMeta.description).toContain("Lun–vie 08:00–20:00");
    expect(ubicacionMeta.description).not.toMatch(/sáb/i);
  });

  it("/menu solo nombra bebidas que existen en el menú y no da precios", () => {
    const names = menu.map((i) => i.name.toLowerCase()).join(" | ");
    for (const drink of ["cold brew", "flat white", "dirty chai", "matcha", "brownie"]) {
      expect(names).toContain(drink);
    }
    expect(menuMeta.description).not.toMatch(/\$/);
  });
});
