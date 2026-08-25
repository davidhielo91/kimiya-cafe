import type { FaqItem } from "@/lib/schema";

// Sección de preguntas frecuentes. Contenido siempre visible (no accordion) para
// que Google y los buscadores con IA lo lean directamente. El FAQPage JSON-LD se
// inyecta por separado en la página con faqJsonLd(items).

export function Faq({
  title = "Preguntas frecuentes",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  return (
    <section className="mt-16 border-t border-black/10 pt-12">
      <h2 className="font-editorial text-2xl md:text-3xl">{title}</h2>
      <dl className="mt-8 border-t border-black/10">
        {items.map((item) => (
          <div key={item.q} className="border-b border-black/10 py-5">
            <dt className="font-medium text-foreground">{item.q}</dt>
            <dd className="mt-2 max-w-2xl text-foreground/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
