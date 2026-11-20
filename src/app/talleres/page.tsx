import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, type FaqItem } from "@/lib/schema";
import { workshops } from "@/content/workshops";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Talleres y catas de café en Morelia",
  description:
    "Talleres y catas de café en Morelia: Experiencia Sensorial y Ritual del Café. Aprende a descubrir aromas y métodos, sin ser experto. $250 MXN por persona.",
  alternates: { canonical: "/talleres" },
};

// Diseño experiencial, no académico (DESIGN.md §10). No presentar como
// "curso profesional de barista". El canal de reserva es TODO_CLIENT: mientras
// sea null, se ofrece contacto directo sin publicar el marcador.

const faqs: FaqItem[] = [
  {
    q: "¿Cómo reservo un taller?",
    a: "La reservación se hace directamente en el local, de forma anticipada.",
  },
  {
    q: "¿Cuánto cuestan los talleres?",
    a: "$250 MXN por persona.",
  },
  {
    q: "¿Cuántas personas se necesitan?",
    a: "Un mínimo de 4 participantes por taller.",
  },
  {
    q: "¿Necesito saber de café para tomarlos?",
    a: "No. Están pensados para descubrir y aprender sin necesidad de ser experto.",
  },
  {
    q: "¿Qué talleres ofrecen?",
    a: "Dos experiencias: Experiencia Sensorial (origen, procesos, tueste y percepción) y Ritual del Café (cómo cambia una taza según el método y las variables de preparación).",
  },
];

export default function TalleresPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        eyebrow="Experiencias · reservación anticipada"
        title="Talleres y catas de café en Morelia"
        lede="Acércate al café de especialidad de forma práctica y sin pretensión. Curiosidad antes que tecnicismo."
      />

      <Container className="py-16 md:py-24">
        <SlotImage
          slot="talleres"
          sizes="100vw"
          className="mb-16 aspect-[4/3] rounded-lg md:aspect-[16/9]"
        />
        <div className="space-y-px">
          {workshops.map((w, i) => (
            <article
              key={w.id}
              className="grid gap-6 border-t border-black/10 py-10 md:grid-cols-[1fr_1.6fr] md:gap-12"
            >
              <div>
                <span className="eyebrow text-brand-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-editorial mt-3 text-3xl md:text-4xl">
                  {w.name}
                </h2>
                <p className="mt-4 text-2xl text-brand">
                  {formatPrice(w.pricePerPerson)}
                  <span className="ml-1 text-sm text-foreground/70">
                    / persona
                  </span>
                </p>
              </div>

              <div className="max-w-xl">
                <p className="text-lg text-foreground/80">{w.purpose}</p>
                <p className="mt-4 text-foreground/60">{w.explores}</p>

                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-6 text-sm">
                  <div>
                    <dt className="eyebrow text-foreground/60">Para quién</dt>
                    <dd className="mt-2 text-foreground/70">{w.audience}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-foreground/60">Condiciones</dt>
                    <dd className="mt-2 text-foreground/70">
                      Reservación anticipada · mínimo {w.minParticipants}{" "}
                      participantes
                    </dd>
                  </div>
                </dl>

                {w.slug === "experiencia-sensorial" && (
                  <Link
                    href="/talleres/experiencia-sensorial"
                    className="mt-8 inline-flex items-center gap-1 font-medium text-brand-ink underline underline-offset-4"
                  >
                    Ver la experiencia completa →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-xl text-foreground/70">
          Las reservaciones se hacen{" "}
          <span className="text-foreground">directamente en el local</span>. Pasa
          a Kimiya y con gusto coordinamos tu experiencia. Mientras tanto,
          descubre los{" "}
          <Link
            href="/metodos"
            className="text-brand-ink underline underline-offset-4"
          >
            métodos de extracción
          </Link>{" "}
          que exploramos.
        </p>

        <Faq items={faqs} />
      </Container>
    </>
  );
}
