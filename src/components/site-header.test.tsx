import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("muestra el logo con el nombre oficial de marca (alt) con acento", () => {
    render(<SiteHeader />);
    expect(screen.getAllByAltText("Kimiya Café").length).toBeGreaterThan(0);
  });

  it("expone las rutas de navegación de fase 1", () => {
    render(<SiteHeader />);
    // "Menú" aparece en desktop y móvil; basta con que exista al menos uno.
    expect(screen.getAllByRole("link", { name: "Café en grano" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Talleres" }).length).toBeGreaterThan(0);
  });
});
