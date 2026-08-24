import { describe, it, expect } from "vitest";
import { getImage, type ImageSlot } from "@/content/images";

const SLOTS: ImageSlot[] = [
  "coldBrew",
  "grano",
  "metodos",
  "talleres",
  "espresso",
];

describe("capa de imágenes", () => {
  it("cada slot resuelve a un placeholder (null) o a una imagen válida", () => {
    // Contrato resiliente: si el archivo existe en /public/images se devuelve
    // una SiteImage con ruta bajo /images/ y alt honesto; si no, null y la UI
    // muestra un placeholder neutral (DESIGN.md §10.1).
    for (const slot of SLOTS) {
      const img = getImage(slot);
      if (img === null) continue;
      expect(img.src.startsWith("/images/")).toBe(true);
      expect(img.alt.length).toBeGreaterThan(0);
    }
  });
});
