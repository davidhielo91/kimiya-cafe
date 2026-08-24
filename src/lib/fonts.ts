// Fuentes de marca (DESIGN.md §4).
//
// - Be Vietnam (Pro): tipografía principal — navegación, cuerpo, UI, títulos.
// - Times New Roman: acento editorial. Fuente del sistema, se aplica vía token
//   CSS `--font-serif` (no requiere carga web).
// - Avalon Alt: acento urbano propietario. No se sirve por licencia web todavía;
//   se define un fallback coherente hasta confirmar licencia (DESIGN.md §4).

import { Be_Vietnam_Pro } from "next/font/google";

export const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});
