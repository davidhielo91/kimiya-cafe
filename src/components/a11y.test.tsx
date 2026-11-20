import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SkipLink, MAIN_CONTENT_ID } from "@/components/skip-link";
import { MobileNav } from "@/components/mobile-nav";

describe("accesibilidad (WCAG 2.2 AA)", () => {
  it("el enlace 'Saltar al contenido' apunta al <main> (2.4.1)", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: "Saltar al contenido" });
    expect(link.getAttribute("href")).toBe(`#${MAIN_CONTENT_ID}`);
  });

  it("el menú móvil devuelve el foco al botón al cerrarse con Escape (2.4.3)", () => {
    render(<MobileNav />);
    const button = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");

    // El foco está dentro del menú (en un enlace) cuando se pulsa Escape.
    screen.getAllByRole("link")[0].focus();
    fireEvent.keyDown(document, { key: "Escape" });

    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
  });
});
