import { describe, it, expect } from "vitest";
import { localBusinessJsonLd } from "@/lib/schema";

describe("localBusinessJsonLd", () => {
  const data = localBusinessJsonLd() as {
    "@type": string;
    openingHoursSpecification: { dayOfWeek: string }[];
  };

  it("declara el tipo CafeOrCoffeeShop", () => {
    expect(data["@type"]).toBe("CafeOrCoffeeShop");
  });

  it("omite el sábado del horario hasta confirmarse (SEO.md §13)", () => {
    const days = data.openingHoursSpecification.map((s) => s.dayOfWeek);
    expect(days).not.toContain("Saturday");
  });

  it("publica solo los 6 días confirmados", () => {
    expect(data.openingHoursSpecification).toHaveLength(6);
  });
});
