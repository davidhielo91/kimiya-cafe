import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { SlotImage } from "@/components/slot-image";
import { Faq } from "@/components/faq";
import { localBusinessJsonLd, faqJsonLd, type FaqItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { formatAddress, weekHours } from "@/lib/format";
import { ubicacionMeta } from "@/content/page-meta";

export const metadata: Metadata = {
  title: { absolute: ubicacionMeta.title },
  description: ubicacionMeta.description,
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

const faqs: FaqItem[] = [
  {
    q: "¿Kimiya Café es pet friendly?",
    a: "Sí. Aceptamos perros siempre que permanezcan con su correa.",
  },
  {
    q: "¿Tienen Wi-Fi y puedo trabajar con laptop?",
    a: "Sí, hay Wi-Fi para clientes y conexiones eléctricas junto a las mesas. Trabajar o estudiar es bienvenido, aunque el espacio no está planteado como coworking.",
  },
  {
    q: "¿Cuentan con estacionamiento?",
    a: "No tenemos estacionamiento propio. El de la zona del Bulevar García de León puede ser limitado, tenlo en cuenta al planear tu visita.",
  },
  {
    q: "¿Aceptan reservaciones?",
    a: "Solo para eventos especiales. El espacio es pequeño (cuatro mesas y barra con cinco bancos), así que el consumo habitual es por disponibilidad de lugares.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, transferencia y tarjeta.",
  },
  {
    q: "¿Tienen servicio para llevar?",
    a: "Sí, con envases y desechables reciclables.",
  },
];

export default function UbicacionPage() {
  const { contact, address } = siteConfig;

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      <PageHeader
        eyebrow="Visítanos · El Bulevar García de León"
        title="Cafetería en El Bulevar García de León, Morelia"
        lede={formatAddress()}
      />

      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Cómo llegar <span aria-hidden>→</span>
          </a>
          <a
            href={`tel:+52${contact.phone}`}
            className="inline-flex items-center rounded-full border border-black/20 px-7 py-3 text-sm font-medium hover:border-brand hover:text-brand-ink"
          >
            Llamar {contact.phone}
          </a>
        </div>

        {/* Foto vertical del interior junto al mapa: en escritorio se ve
            completa (3:4) en lugar de recortarse en una franja panorámica. */}
        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_3fr] md:items-stretch">
          <div>
            <SlotImage
              slot="interior"
              sizes="(min-width: 768px) 40vw, 100vw"
              showCaption
              className="aspect-[4/5] rounded-lg md:aspect-[3/4]"
            />
            <Link
              href="/nosotros#el-espacio"
              className="mt-3 inline-block text-sm font-medium text-brand-ink underline-offset-8 hover:underline"
            >
              Ver más fotos del espacio →
            </Link>
          </div>

          <iframe
            title="Ubicación de Kimiya Café en Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              formatAddress(),
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-72 w-full rounded-lg border border-black/10 md:h-full md:min-h-96"
          />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <p className="eyebrow text-brand-ink">Horarios</p>
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
            <p className="mt-4 text-sm text-foreground/70">
              {address.neighborhood}, {address.city}, {address.state}.
            </p>
          </section>

          <section>
            <p className="eyebrow text-brand-ink">Antes de visitarnos</p>
            <ul className="mt-4 border-t border-black/10">
              {attributes.map((attr) => (
                <li
                  key={attr}
                  className="flex items-center gap-3 border-b border-black/10 py-3 text-foreground/80"
                >
                  <span aria-hidden className="text-brand-ink">
                    ◦
                  </span>
                  {attr}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Faq items={faqs} />
        <JsonLd data={faqJsonLd(faqs)} />
      </Container>
    </>
  );
}
