import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import { methods } from "@/content/methods";

export const metadata: Metadata = {
  title: "Métodos de extracción: V60, Chemex y más",
  description:
    "Conoce el Brew Bar de Kimiya Café: V60, Chemex, Kalita, AeroPress, sifón japonés y más. Aprende cómo cada método cambia el sabor de tu taza.",
  alternates: { canonical: "/metodos" },
};

// Intención educativa (SEO.md §10). Lista editorial con hairlines: los métodos
// son un repertorio, no una secuencia — por eso no se numeran.

export default function MetodosPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Brew Bar · ${methods.length} métodos`}
        title="Métodos de extracción"
        lede="Un mismo café sabe distinto según cómo se prepara. Así experimentamos con molienda, agua, tiempo y temperatura."
      />

      <Container className="py-16 md:py-24">
        <SlotImage
          slot="metodos"
          sizes="100vw"
          className="mb-16 h-64 rounded-lg md:h-96"
        />
        <ul className="border-t border-black/10">
          {methods.map((method) => (
            <li
              key={method.id}
              className="grid gap-2 border-b border-black/10 py-6 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <h2 className="font-editorial text-2xl">{method.name}</h2>
              {method.description && (
                <p className="max-w-xl text-foreground/70">
                  {method.description}
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-foreground/70">
          Preparamos con estos métodos nuestra{" "}
          <Link
            href="/cafe-en-grano"
            className="text-brand-ink underline underline-offset-4"
          >
            selección de café en grano
          </Link>{" "}
          y las bebidas del{" "}
          <Link
            href="/menu"
            className="text-brand-ink underline underline-offset-4"
          >
            menú
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
