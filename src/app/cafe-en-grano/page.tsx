import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import { coffees, roasters, producers, grainInfo } from "@/content/coffees";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Café en grano de especialidad",
  description:
    "Selección rotativa de café en grano de especialidad en Morelia. Distintos orígenes y procesos, presentación de 250 g y molienda según método.",
  alternates: { canonical: "/cafe-en-grano" },
};

// Landing comercial + editorial (SEO.md §7 / DESIGN.md §11). La selección es
// rotativa: el catálogo (`coffees`) se llena con lo realmente disponible sin
// cambiar el layout. No se afirma disponibilidad simultánea de todos.

export default function CafeEnGranoPage() {
  const priceRange = `${formatPrice(grainInfo.priceRangeMxn.min)} – ${formatPrice(
    grainInfo.priceRangeMxn.max,
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Para llevar · selección rotativa"
        title="Café en grano de especialidad"
        lede="Distintos orígenes, variedades y procesos —lavado, honey, natural y experimentales— según disponibilidad. Molienda a tu método."
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
          <p className="eyebrow text-brand">En barra esta temporada</p>
          <h2 className="font-editorial mt-3 text-2xl md:text-3xl">
            Cafés disponibles
          </h2>
          {coffees.length === 0 ? (
            <p className="mt-6 max-w-xl text-foreground/60">
              La selección cambia con frecuencia. Escríbenos o visítanos para
              conocer los cafés en barra esta temporada.
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
            <p className="eyebrow text-foreground/40">Tostadores</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-editorial text-lg text-foreground/80">
              {roasters.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-foreground/40">Productores</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {producers.map((p) => (
                <li key={p.name} className="flex justify-between gap-4">
                  <span>{p.name}</span>
                  <span className="shrink-0 text-foreground/40">
                    {p.origin}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-foreground/40">{term}</dt>
      <dd className="font-editorial mt-2 text-3xl">{value}</dd>
    </div>
  );
}
