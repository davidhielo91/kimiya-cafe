import { siteConfig } from "@/lib/site";

// Formateadores de presentación derivados de la fuente única (site.ts).

export function formatAddress(): string {
  const a = siteConfig.address;
  return `${a.street}, ${a.neighborhood}, CP ${a.postalCode}, ${a.city}, ${a.state}`;
}

const DAY_LABELS: Record<string, string> = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo",
};

export type HoursRow = {
  day: string;
  /** Rango horario, `"Cerrado"` si cierra ese día, o `null` si no está
   *  confirmado (no publicar como texto crudo). */
  range: string | null;
};

/** Horarios en orden de semana. `"Cerrado"` para días cerrados, `null` para
 *  días sin confirmar. */
export function weekHours(): HoursRow[] {
  const order = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ] as const;

  return order.map((day) => {
    const h = siteConfig.hours[day];
    let range: string | null;
    if (h === "closed") range = "Cerrado";
    else if (h) range = `${h.open} – ${h.close}`;
    else range = null;
    return { day: DAY_LABELS[day], range };
  });
}

const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

const DAY_SHORT: Record<(typeof DAY_ORDER)[number], string> = {
  monday: "lun",
  tuesday: "mar",
  wednesday: "mié",
  thursday: "jue",
  friday: "vie",
  saturday: "sáb",
  sunday: "dom",
};

/**
 * Horario compacto para metadata/snippets: agrupa días consecutivos con el
 * mismo horario ("Lun–vie 08:00–20:00 · dom 08:00–17:00"). Omite días cerrados
 * y sin confirmar (no publica TODO_CLIENT). Fuente única: siteConfig.hours.
 */
export function hoursSummary(): string {
  const groups: { from: string; to: string; range: string }[] = [];
  for (const day of DAY_ORDER) {
    const h = siteConfig.hours[day];
    if (!h || h === "closed") continue;
    const range = `${h.open}–${h.close}`;
    const last = groups[groups.length - 1];
    const prevDay = DAY_ORDER[DAY_ORDER.indexOf(day) - 1];
    if (last && last.range === range && last.to === DAY_SHORT[prevDay]) {
      last.to = DAY_SHORT[day];
    } else {
      groups.push({ from: DAY_SHORT[day], to: DAY_SHORT[day], range });
    }
  }
  const text = groups
    .map((g) => `${g.from === g.to ? g.from : `${g.from}–${g.to}`} ${g.range}`)
    .join(" · ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Precio en MXN o `null`. No inventa precios ausentes. */
export function formatPrice(value: number | null): string | null {
  if (value === null) return null;
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}
