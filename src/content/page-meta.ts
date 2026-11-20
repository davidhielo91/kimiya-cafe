import { siteConfig } from "@/lib/site";
import { hoursSummary } from "@/lib/format";

// Title/description orientados a CTR (AGENTS.md §7: contenido desacoplado).
//
// Experimento iniciado tras el análisis de Search Console del 25 ago–17 nov
// 2026 (línea base en Notion):
// - /ubicacion: 568 impresiones, CTR 1.76 %, posición 4.4.
// - /menu: 99 impresiones, 0 clics, posición 6.8.
// Los atributos y el horario salen de site.ts; el menú solo nombra bebidas que
// existen en src/content/menu.ts y no menciona precios (TODO_CLIENT).

const attrs = [
  siteConfig.attributes.petFriendly && "Pet friendly",
  siteConfig.attributes.wifi && "Wi-Fi",
  siteConfig.attributes.takeaway && "para llevar",
].filter((a): a is string => Boolean(a));

/** "A, B y C" */
function joinEs(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}

export const ubicacionMeta = {
  title: `Cafetería pet friendly en García de León, Morelia | ${siteConfig.name}`,
  description: `${siteConfig.address.street}, ${siteConfig.address.city}. ${joinEs(
    attrs,
  )}. ${hoursSummary()}. Mira cómo llegar a ${siteConfig.name}.`,
};

export const menuMeta = {
  title: `Menú de ${siteConfig.name}: cold brew, espresso, matcha y chai`,
  description: `Cold brew clásico, tonic y de jamaica, espresso, flat white, dirty chai, frappé de matcha y brownies. Conoce la carta de ${siteConfig.name} en Morelia.`,
};
