import { siteConfig } from "@/lib/site";
import { weekHours, formatAddress } from "@/lib/format";
import { navItems } from "@/lib/nav";

// llms.txt para buscadores con IA (ChatGPT, Perplexity, AI Overviews).
// Se genera desde la fuente única (site.ts) para no desincronizarse. Solo datos
// confirmados: el sábado se omite mientras no esté confirmado.

export const dynamic = "force-static";

export function GET() {
  const { name, url, positioning, contact, social } = siteConfig;
  const hours = weekHours()
    .filter((r) => r.range !== null)
    .map((r) => `${r.day}: ${r.range}`)
    .join("; ");

  const pages = navItems
    .map((i) => `- [${i.label}](${url}${i.href})`)
    .join("\n");

  const body = `# ${name}

> ${positioning} Cafetería en El Bulevar García de León (Morelia) con cold brew, café en grano, métodos de extracción y talleres.

## Negocio
- Nombre: ${name}
- Dirección: ${formatAddress()}
- Teléfono: ${contact.phone}
- Correo: ${contact.email}
- Horario: ${hours}
- Instagram: ${social.instagram}
- Google Maps: ${social.googleBusiness}

## Páginas
- [Inicio](${url}/)
${pages}

## Atributos
- Para llevar, Wi-Fi, pet friendly (con correa), laptop bienvenida, conexiones eléctricas junto a las mesas.
- Pagos: efectivo, transferencia y tarjeta.
- Sin estacionamiento propio. Reservaciones solo para eventos especiales.

## Talleres
- Experiencia Sensorial y Ritual del Café. $250 MXN por persona, mínimo 4 participantes, reserva presencial en el local.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
