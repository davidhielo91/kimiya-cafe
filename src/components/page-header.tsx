import type { ReactNode } from "react";
import { Container } from "@/components/container";

// Encabezado editorial compartido por las páginas interiores.
// Mantiene el mismo lenguaje visual del homepage: eyebrow catalizador +
// título en serif display (Times) + entradilla discreta.

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className="border-b border-black/10">
      <Container className="py-16 md:py-24">
        <p className="eyebrow text-brand-ink">{eyebrow}</p>
        <h1 className="font-editorial mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02]">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-xl text-lg text-foreground/60">{lede}</p>
        )}
      </Container>
    </header>
  );
}
