import { describe, it, expect } from "vitest";
import { formatPrice, weekHours, formatAddress } from "@/lib/format";

describe("formatPrice", () => {
  it("devuelve null cuando no hay precio (no inventa datos)", () => {
    expect(formatPrice(null)).toBeNull();
  });

  it("formatea MXN sin decimales", () => {
    expect(formatPrice(250)).toContain("250");
  });
});

describe("weekHours", () => {
  it("marca el sábado como null (TODO_CLIENT, sin confirmar)", () => {
    const saturday = weekHours().find((r) => r.day === "Sábado");
    expect(saturday?.range).toBeNull();
  });

  it("expone los días confirmados con rango", () => {
    const monday = weekHours().find((r) => r.day === "Lunes");
    expect(monday?.range).toBe("08:00 – 20:00");
  });
});

describe("formatAddress", () => {
  it("incluye calle, colonia y ciudad", () => {
    const address = formatAddress();
    expect(address).toContain("García de León");
    expect(address).toContain("Chapultepec Oriente");
    expect(address).toContain("Morelia");
  });
});
