import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { localBusinessJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { formatAddress, weekHours } from "@/lib/format";

export const metadata: Metadata = {
  title: "Ubicación y cómo llegar",
  description:
    "Kimiya Café está en Blvd. García de León 1201-A, Chapultepec Oriente, Morelia. Horarios, atributos y cómo llegar.",
  alternates: { canonical: "/ubicacion" },
};

// Resuelve dudas reales antes de visitar (DESIGN.md §9). Los horarios sin
// confirmar (sábado) NO se muestran como texto crudo (DEPLOYMENT.md §12): se
// omiten hasta confirmarse. Atributos locales en lenguaje natural (SEO.md §11).

const attributes: string[] = [
  siteConfig.attributes.wifi ? "Wi-Fi" : "",
  siteConfig.attributes.petFriendly ? "Pet friendly (con correa)" : "",
  siteConfig.attributes.laptopFriendly ? "Laptop bienvenida" : "",
  siteConfig.attributes.powerOutlets ? "Conexiones eléctricas" : "",
  siteConfig.attributes.takeaway ? "Para llevar" : "",
  "Sin estacionamiento propio",
  "Reservaciones solo para eventos especiales",
  siteConfig.attributes.seatedCapacity
    ? `Aforo aproximado: ${siteConfig.attributes.seatedCapacity} personas`
    : "",
].filter(Boolean);

export default function UbicacionPage() {
  const { contact, address } = siteConfig;
  const mapsQuery = encodeURIComponent(formatAddress());

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      <PageHeader
        eyebrow="Chapultepec · García de León"
        title="Visítanos"
        lede={formatAddress()}
      />

      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap gap-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Cómo llegar <span aria-hidden>→</span>
          </a>
          <a
            href={`tel:+52${contact.phone}`}
            className="inline-flex items-center rounded-full border border-black/20 px-7 py-3 text-sm font-medium hover:border-brand hover:text-brand"
          >
            Llamar {contact.phone}
          </a>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <p className="eyebrow text-brand">Horarios</p>
            <dl className="mt-4 border-t border-black/10">
              {weekHours()
                .filter((row) => row.range !== null)
                .map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between border-b border-black/10 py-3 text-foreground/80"
                  >
                    <dt>{row.day}</dt>
                    <dd className="tabular-nums">{row.range}</dd>
                  </div>
                ))}
            </dl>
            <p className="mt-4 text-sm text-foreground/50">
              {address.neighborhood}, {address.city}, {address.state}.
            </p>
          </section>

          <section>
            <p className="eyebrow text-brand">Antes de visitarnos</p>
            <ul className="mt-4 border-t border-black/10">
              {attributes.map((attr) => (
                <li
                  key={attr}
                  className="flex items-center gap-3 border-b border-black/10 py-3 text-foreground/80"
                >
                  <span aria-hidden className="text-brand">
                    ◦
                  </span>
                  {attr}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
