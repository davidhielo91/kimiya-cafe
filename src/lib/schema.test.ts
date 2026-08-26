import { describe, it, expect } from "vitest";
import { localBusinessJsonLd } from "@/lib/schema";

describe("localBusinessJsonLd", () => {
  const data = localBusinessJsonLd() as {
    "@type": string;
    openingHoursSpecification: {
      dayOfWeek: string;
      opens: string;
      closes: string;
    }[];
  };

  it("declara el tipo CafeOrCoffeeShop", () => {
    expect(data["@type"]).toBe("CafeOrCoffeeShop");
  });

  it("declara el sábado como cerrado (opens = closes = 00:00)", () => {
    const saturday = data.openingHoursSpecification.find(
      (s) => s.dayOfWeek === "Saturday",
    );
    expect(saturday).toBeDefined();
    expect(saturday?.opens).toBe("00:00");
    expect(saturday?.closes).toBe("00:00");
  });

  it("publica los 7 días de la semana", () => {
    expect(data.openingHoursSpecification).toHaveLength(7);
  });
});
