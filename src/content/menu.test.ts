import { describe, it, expect } from "vitest";
import { menu, menuByCategory } from "@/content/menu";

describe("menu (contenido)", () => {
  it("no publica precios inventados: todos son null hasta transcribir el menú vigente", () => {
    expect(menu.every((item) => item.price === null)).toBe(true);
  });

  it("menuByCategory filtra por categoría", () => {
    const coldBrew = menuByCategory("cold-brew");
    expect(coldBrew.length).toBeGreaterThan(0);
    expect(coldBrew.every((i) => i.category === "cold-brew")).toBe(true);
  });

  it("destaca el Boost Cold Brew", () => {
    const boost = menu.find((i) => i.id === "boost-cold-brew");
    expect(boost?.featured).toBe(true);
  });
});
