import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, type FaqItem } from "@/lib/schema";
import { coffees, roasters, producers, grainInfo } from "@/content/coffees";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Café en grano de especialidad",
  description:
    "Compra café en grano de especialidad en Morelia: selección rotativa de orígenes y procesos, en 250 g y molido a tu método. Descubre algo nuevo cada mes.",
  alternates: { canonical: "/cafe-en-grano" },
};

// Landing comercial + editorial (SEO.md §7 / DESIGN.md §11). La selección es
// rotativa: el catálogo (`coffees`) se llena con lo realmente disponible sin
// cambiar el layout. No se afirma disponibilidad simultánea de todos.

const faqs: FaqItem[] = [
  {
    q: "¿Qué presentaciones de café en grano manejan?",
    a: "La selección rotativa viene en 250 g. Además, nuestro blend de la casa está disponible en presentación de 1 kg.",
  },
  {
    q: "¿Muelen el café?",
    a: "Sí, molemos el café según tu método de preparación (espresso, prensa francesa, V60, Chemex, entre otros).",
  },
  {
    q: "¿Cada cuánto cambia la selección?",
    a: "No hay una temporada fija, pero la intención es incorporar nuevas opciones aproximadamente cada mes.",
  },
  {
    q: "¿Cuánto cuesta el café en grano?",
    a: "El rango aproximado es de $150 a $500 por 250 g, según las características de cada café.",
  },
  {
    q: "¿Qué procesos de café manejan?",
    a: "Lavado, honey, natural y procesos experimentales según disponibilidad.",
  },
];

export default function CafeEnGranoPage() {
  const priceRange = `${formatPrice(grainInfo.priceRangeMxn.min)} – ${formatPrice(
    grainInfo.priceRangeMxn.max,
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        eyebrow="Para llevar · selección rotativa"
        title="Café en grano de especialidad en Morelia"
        lede="Distintos orígenes, variedades y procesos —lavado, honey, natural y experimentales— según disponibilidad."
      />

      <Container className="py-16 md:py-24">
        <SlotImage
          slot="grano"
          sizes="100vw"
          className="mb-16 h-64 rounded-lg md:h-96"
        />
        <dl className="grid gap-8 border-b border-black/10 pb-12 sm:grid-cols-3">
          <Fact term="Presentación" value={grainInfo.usualPresentation} />
          <Fact term="Rango aproximado" value={priceRange} />
          <Fact term="Molienda" value="A tu método" />
        </dl>

        {grainInfo.houseBlendKilo.available && (
          <p className="mt-8 max-w-2xl text-foreground/70">
            También contamos con nuestro <span className="text-foreground">blend de la casa</span>,
            el café que usamos en la barra para el espresso, disponible en
            presentación de <span className="text-foreground">1 kg</span>. Además, podemos
            molerlo según tu método de preparación.
          </p>
        )}

        <section className="mt-16">
          <p className="eyebrow text-brand-ink">En barra esta temporada</p>
          <h2 className="font-editorial mt-3 text-2xl md:text-3xl">
            Cafés disponibles
          </h2>
          {coffees.length === 0 ? (
            <p className="mt-6 max-w-xl text-foreground/60">
              La selección cambia con frecuencia. Visítanos para conocer los
              cafés en barra esta temporada.
            </p>
          ) : (
            <ul className="mt-8 grid gap-px border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {coffees.map((c) => (
                <li key={c.id} className="border-b border-black/10 py-6 md:pr-8">
                  <h3 className="font-editorial text-xl">{c.name}</h3>
                  {c.origin && (
                    <p className="mt-1 text-sm text-foreground/60">
                      {c.origin}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-16 grid gap-10 border-t border-black/10 pt-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-foreground/60">Tostadores</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-editorial text-lg text-foreground/80">
              {roasters.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-foreground/60">Productores</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {producers.map((p) => (
                <li key={p.name} className="flex justify-between gap-4">
                  <span>{p.name}</span>
                  <span className="shrink-0 text-foreground/60">
                    {p.origin}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-12 max-w-2xl text-foreground/70">
          ¿Quieres sacarle el máximo en casa? Conoce los{" "}
          <Link
            href="/metodos"
            className="text-brand-ink underline underline-offset-4"
          >
            métodos de extracción
          </Link>{" "}
          y pídelo molido para el tuyo.
        </p>

        <Faq items={faqs} />
      </Container>
    </>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-foreground/60">{term}</dt>
      <dd className="font-editorial mt-2 text-3xl">{value}</dd>
    </div>
  );
}
