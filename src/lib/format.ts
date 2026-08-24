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
  /** `null` = horario aún no confirmado (no publicar como texto crudo). */
  range: string | null;
};

/** Horarios en orden de semana, con `null` para días sin confirmar. */
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
    return {
      day: DAY_LABELS[day],
      range: h ? `${h.open} – ${h.close}` : null,
    };
  });
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
