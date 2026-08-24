import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { SlotImage } from "@/components/slot-image";
import { getImage } from "@/content/images";
import { JsonLd } from "@/components/json-ld";
import { localBusinessJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { menuByCategory } from "@/content/menu";
import { methods } from "@/content/methods";
import { workshops } from "@/content/workshops";
import { promotions } from "@/content/promotions";
import { roasters, grainInfo } from "@/content/coffees";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Café de especialidad en Morelia",
  description:
    "Kimiya Café: cafetería de especialidad en Chapultepec, Morelia. Cold brew, café en grano, métodos de extracción y talleres para descubrir el café.",
  alternates: { canonical: "/" },
};

// Homepage. Dirección editorial de "transformación del café" (grano → tueste →
// extracción → taza), fijada por DESIGN.md §3/§7. Todo el contenido proviene de
// la capa de datos (AGENTS.md §7). El naranja actúa como catalizador/acento.

export default function HomePage() {
  const heroImg = getImage("hero");
  const comunidadImg = getImage("comunidad");
  const coldBrew = menuByCategory("cold-brew");
  const priceRange = `${formatPrice(grainInfo.priceRangeMxn.min)} – ${formatPrice(
    grainInfo.priceRangeMxn.max,
  )}`;

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        {heroImg && (
          <>
            <Image
              src={heroImg.src}
              alt={heroImg.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Overlay para contraste del texto (accesibilidad). */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
            />
          </>
        )}
        <Container className="relative z-10 animate-rise py-24 md:py-36">
          <p className="eyebrow text-brand">
            Morelia · Chapultepec · García de León
          </p>
          <h1 className="font-editorial mt-6 max-w-4xl text-[clamp(2.75rem,8vw,6rem)] leading-[0.98]">
            Café de <em className="text-brand not-italic">especialidad</em>
            <br />
            en Morelia
          </h1>
          <p className="mt-8 max-w-md text-lg text-white/70">
            {siteConfig.positioning}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/ubicacion"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Cómo llegar
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/menu"
              className="text-sm font-medium text-white/80 underline-offset-8 hover:text-brand hover:underline"
            >
              Ver menú
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Qué es Kimiya · la tríada de marca ───────────────── */}
      <section className="border-b border-black/10">
        <Container className="py-20 md:py-28">
          <p className="font-editorial max-w-3xl text-2xl leading-snug text-foreground md:text-4xl">
            {siteConfig.brandPhrase}
          </p>
          <p className="mt-6 max-w-xl text-foreground/60">
            No necesitas ser experto para disfrutar un buen café. Aquí se
            descubre sin pretensión y se aprende experimentando.
          </p>

          <ul className="mt-14 grid gap-px border-t border-black/10 sm:grid-cols-3">
            {[
              ["Descubrir", "Orígenes rotativos y bebidas de autor."],
              ["Aprender", "Talleres y catas para entender el café."],
              ["Experimentar", "Un Brew Bar donde cada método cambia la taza."],
            ].map(([title, body], i) => (
              <li key={title} className="pt-6">
                <span className="eyebrow text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-editorial mt-2 text-2xl">{title}</h2>
                <p className="mt-2 max-w-xs text-sm text-foreground/60">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Cold Brew · producto insignia ────────────────────── */}
      <section className="bg-ink text-white">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow text-brand">En frío · nuestro insignia</p>
            <h2 className="font-editorial mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-none">
              Cold Brew
            </h2>
            <p className="mt-6 max-w-sm text-white/70">
              Extracción lenta en frío: dulzor suave, baja acidez y varias
              expresiones para explorar temporada tras temporada.
            </p>
            <ul className="mt-8 grid gap-px border-t border-white/15 sm:grid-cols-2">
              {coldBrew.map((item) => (
                <li
                  key={item.id}
                  className="flex items-baseline gap-3 border-b border-white/10 py-3"
                >
                  <span
                    aria-hidden
                    className={item.featured ? "text-brand" : "text-white/30"}
                  >
                    ◦
                  </span>
                  <span
                    className={item.featured ? "font-medium" : "text-white/80"}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/menu"
              className="mt-8 inline-block text-sm font-medium text-brand underline-offset-8 hover:underline"
            >
              Verlo en el menú →
            </Link>
          </div>
          <SlotImage
            slot="coldBrew"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="min-h-[20rem] rounded-lg md:min-h-[28rem]"
          />
        </Container>
      </section>

      {/* ── Métodos · Brew Bar ───────────────────────────────── */}
      <Editorial
        eyebrow={`Brew Bar · ${methods.length} métodos`}
        title="Métodos de extracción"
        href="/metodos"
        cta="Conocer el Brew Bar"
      >
        <p className="max-w-xl text-foreground/60">
          Un mismo café sabe distinto según cómo se prepara. Con estos métodos
          experimentamos molienda, agua, tiempo y temperatura.
        </p>
        <p className="font-editorial mt-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
          {methods.map((m, i) => (
            <span key={m.id}>
              {m.name}
              {i < methods.length - 1 && (
                <span className="mx-2 text-brand" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </p>
      </Editorial>

      {/* ── Café en grano ────────────────────────────────────── */}
      <section className="border-t border-black/10 bg-muted/5">
        <Container className="py-20 md:py-28">
          <p className="eyebrow text-brand">Para llevar · selección rotativa</p>
          <h2 className="font-editorial mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-tight">
            Café en grano de especialidad
          </h2>
          <SlotImage
            slot="grano"
            sizes="100vw"
            className="mt-8 h-56 rounded-lg md:h-80"
          />
          <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <p className="max-w-xl text-foreground/70">
              Distintos orígenes, variedades y procesos —lavado, honey, natural y
              experimentales— según disponibilidad. Molienda a tu método.
            </p>
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <Fact term="Presentación" value={grainInfo.usualPresentation} />
              <Fact term="Rango aprox." value={priceRange} />
            </dl>
          </div>

          <div className="mt-12 border-t border-black/10 pt-6">
            <p className="eyebrow text-foreground/40">
              Tostadores con los que trabajamos
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-editorial text-lg text-foreground/80">
              {roasters.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <Link
            href="/cafe-en-grano"
            className="mt-10 inline-block text-sm font-medium text-brand underline-offset-8 hover:underline"
          >
            Explorar café en grano →
          </Link>
        </Container>
      </section>

      {/* ── Talleres ─────────────────────────────────────────── */}
      <Editorial
        eyebrow="Experiencias · reservación anticipada"
        title="Talleres para descubrir"
        href="/talleres"
        cta="Ver talleres"
      >
        <div className="grid gap-px border-t border-black/10 md:grid-cols-2">
          {workshops.map((w) => (
            <article key={w.id} className="pt-6 md:pr-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-editorial text-2xl">{w.name}</h3>
                <span className="shrink-0 text-sm text-brand">
                  {formatPrice(w.pricePerPerson)}
                </span>
              </div>
              <p className="mt-3 max-w-md text-sm text-foreground/60">
                {w.purpose}
              </p>
            </article>
          ))}
        </div>
      </Editorial>

      {/* ── Comunidad · promociones ──────────────────────────── */}
      <section className="relative overflow-hidden border-t border-black/10 bg-ink text-white">
        {comunidadImg && (
          <>
            <Image
              src={comunidadImg.src}
              alt={comunidadImg.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-ink/80" />
          </>
        )}
        <Container className="relative z-10 py-20 md:py-28">
          <p className="eyebrow text-brand">Comunidad</p>
          <h2 className="font-editorial mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-tight">
            Kilómetros, lealtad y cumpleaños
          </h2>
          <ul className="mt-12 grid gap-px border-t border-white/15 md:grid-cols-3">
            {promotions.map((promo) => (
              <li key={promo.id} className="pt-6 md:pr-8">
                <h3 className="font-editorial text-xl text-brand">
                  {promo.name}
                </h3>
                <p className="mt-3 text-sm text-white/70">{promo.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Visítanos ────────────────────────────────────────── */}
      <section className="border-t border-black/10">
        <Container className="grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow text-brand">Visítanos</p>
            <h2 className="font-editorial mt-4 text-[clamp(2rem,5vw,3rem)] leading-tight">
              {siteConfig.address.neighborhood}, Morelia
            </h2>
            <address className="mt-4 not-italic text-foreground/70">
              {siteConfig.address.street}
            </address>
            <Link
              href="/ubicacion"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Cómo llegar <span aria-hidden>→</span>
            </Link>
          </div>
          <ul className="self-center text-sm">
            {[
              ["Lun – Vie", "08:00 – 20:00"],
              ["Domingo", "08:00 – 17:00"],
            ].map(([days, hours]) => (
              <li
                key={days}
                className="flex justify-between border-b border-black/10 py-3 text-foreground/70"
              >
                <span>{days}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

// ── Piezas locales ───────────────────────────────────────────

function Editorial({
  eyebrow,
  title,
  href,
  cta,
  children,
}: {
  eyebrow: string;
  title: string;
  href: string;
  cta: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-black/10">
      <Container className="py-20 md:py-28">
        <p className="eyebrow text-brand">{eyebrow}</p>
        <h2 className="font-editorial mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-tight">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
        <Link
          href={href}
          className="mt-10 inline-block text-sm font-medium text-brand underline-offset-8 hover:underline"
        >
          {cta} →
        </Link>
      </Container>
    </section>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-foreground/40">{term}</dt>
      <dd className="font-editorial mt-1 text-2xl">{value}</dd>
    </div>
  );
}
