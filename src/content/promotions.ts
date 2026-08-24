import type { Promotion } from "@/lib/types";

// Promociones confirmadas (CONTENT.md §11, PRODUCT.md §7).

export const promotions: Promotion[] = [
  {
    id: "kilometros",
    name: "KILÓMETROS",
    description:
      "1 km recorrido equivale a 1% de descuento durante las siguientes 24 horas.",
  },
  {
    id: "lealtad",
    name: "Tarjeta de lealtad",
    description:
      "Tras 6 visitas registradas, la 7.ª visita incluye una bebida gratis.",
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños",
    description:
      "Presentando identificación oficial que compruebe la fecha, recibes una bebida de regalo.",
  },
];
