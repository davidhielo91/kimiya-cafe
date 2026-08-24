import type { Coffee } from "@/lib/types";

// Café en grano (CONTENT.md §7).
//
// La selección es ROTATIVA: no existe una temporada fija y no debe afirmarse
// que todos los orígenes están disponibles a la vez. `coffees` arranca vacío a
// propósito — el modelo está listo para poblarse con el café realmente
// disponible sin cambiar el layout (DESIGN.md §11). No inventar cafés.

export const coffees: Coffee[] = [];

// Datos de referencia registrados (CONTENT.md §7). Sirven para el copy editorial
// de /cafe-en-grano; la disponibilidad puntual se refleja en `coffees`.

export const roasters = [
  "Sibarita",
  "Café Cortés",
  "Umbral",
  "Chabela de Mis Amores",
  "Mutante Tostadores",
  "Pólvora Fábrica de Cafés Especiales",
] as const;

export const producers = [
  { name: "Cruz José Argüello Enríquez", origin: "La Concordia, Chiapas" },
  { name: "Jesús Carlos Cadena Valdivia", origin: "Veracruz" },
  { name: "Emmanuel Rincón Vázquez", origin: "Veracruz" },
  { name: "Felipe Hernández", origin: "Compostela, Nayarit" },
  { name: "Fermín Temoxtle", origin: "Puebla" },
  { name: "Belén Arias", origin: "Puebla" },
  { name: "Efraín García López", origin: "Oaxaca" },
] as const;

// Rango aproximado registrado ($150–$500 MXN según café). Presentación habitual
// de 250 g. Mezcla de espresso de casa también en 1 kg (precio pendiente).
export const grainInfo = {
  usualPresentation: "250 g",
  priceRangeMxn: { min: 150, max: 500 },
  processes: ["lavado", "honey", "natural", "experimental"] as const,
  houseBlendKilo: { available: true, priceMxn: null }, // precio pendiente
} as const;
