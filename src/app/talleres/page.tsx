import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import { workshops } from "@/content/workshops";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Talleres y catas de café",
  description:
    "Experiencia Sensorial y Ritual del Café: talleres para descubrir y experimentar el café de especialidad en Morelia. $250 MXN por persona.",
  alternates: { canonical: "/talleres" },
};

// Diseño experiencial, no académico (DESIGN.md §10). No presentar como
// "curso profesional de barista". El canal de reserva es TODO_CLIENT: mientras
// sea null, se ofrece contacto directo sin publicar el marcador.

export default function TalleresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiencias · reservación anticipada"
        title="Talleres para descubrir"
        lede="Acércate al café de especialidad de forma práctica y sin pretensión. Curiosidad antes que tecnicismo."
      />

      <Container className="py-16 md:py-24">
        <SlotImage
          slot="talleres"
          sizes="100vw"
          className="mb-16 h-64 rounded-lg md:h-96"
        />
        <div className="space-y-px">
          {workshops.map((w, i) => (
            <article
              key={w.id}
              className="grid gap-6 border-t border-black/10 py-10 md:grid-cols-[1fr_1.6fr] md:gap-12"
            >
              <div>
                <span className="eyebrow text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-editorial mt-3 text-3xl md:text-4xl">
                  {w.name}
                </h2>
                <p className="mt-4 text-2xl text-brand">
                  {formatPrice(w.pricePerPerson)}
                  <span className="ml-1 text-sm text-foreground/50">
                    / persona
                  </span>
                </p>
              </div>

              <div className="max-w-xl">
                <p className="text-lg text-foreground/80">{w.purpose}</p>
                <p className="mt-4 text-foreground/60">{w.explores}</p>

                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-6 text-sm">
                  <div>
                    <dt className="eyebrow text-foreground/40">Para quién</dt>
                    <dd className="mt-2 text-foreground/70">{w.audience}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-foreground/40">Condiciones</dt>
                    <dd className="mt-2 text-foreground/70">
                      Reservación anticipada · mínimo {w.minParticipants}{" "}
                      participantes
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-xl text-foreground/70">
          Las reservaciones se hacen <span className="text-foreground">directamente en el local</span>.
          Pasa a Kimiya y con gusto coordinamos tu experiencia.
        </p>
      </Container>
    </>
  );
}
