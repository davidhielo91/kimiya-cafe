import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Kimiya nace de la curiosidad por entender el café más allá de una bebida cotidiana. Café de especialidad accesible, honesto y entretenido en Morelia.",
  alternates: { canonical: "/nosotros" },
};

const values: [string, string][] = [
  ["Curiosidad", "Explorar el café antes de dominarlo."],
  ["Cercanía", "Cero pretensión, lenguaje accesible."],
  ["Bienestar", "Café y estilo de vida activo."],
  ["Comunidad", "Compartir experiencias y conexión."],
  ["Respeto", "Por el café, su origen y su productor."],
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader eyebrow="Nuestra historia" title="Nosotros" />

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-6">
            <p className="font-editorial text-3xl leading-snug md:text-4xl">
              {siteConfig.brandPhrase}
            </p>
            <p className="text-lg text-foreground/80">
              Kimiya nace de la curiosidad por entender el café más allá de una
              bebida cotidiana: su origen, procesos, aromas, sabores, tueste y
              preparación.
            </p>
            <p className="text-foreground/70">
              Buscamos acercar el café de especialidad a más personas de manera
              accesible, honesta y entretenida. No necesitas ser experto para
              disfrutar un buen café.
            </p>
          </div>

          <aside>
            <p className="eyebrow text-brand-ink">Lo que nos mueve</p>
            <ul className="mt-4 border-t border-black/10">
              {values.map(([title, body]) => (
                <li key={title} className="border-b border-black/10 py-4">
                  <h2 className="font-editorial text-xl">{title}</h2>
                  <p className="mt-1 text-sm text-foreground/60">{body}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}
