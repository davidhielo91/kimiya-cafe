import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SlotImage } from "@/components/slot-image";
import type { ImageSlot } from "@/content/images";
import { menu } from "@/content/menu";
import { menuMeta } from "@/content/page-meta";
import { formatPrice } from "@/lib/format";
import type { MenuCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: { absolute: menuMeta.title },
  description: menuMeta.description,
  alternates: { canonical: "/menu" },
};

const CATEGORY_LABELS: Record<MenuCategory, string> = {
  "espresso-bar-caliente": "Espresso Bar · calientes",
  "espresso-bar-frio": "Espresso Bar · frías",
  "brew-bar": "Brew Bar",
  "cold-brew": "Cold Brew",
  talleres: "Talleres / experiencias",
  alimentos: "Alimentos",
  "cafe-en-grano": "Café en grano",
};

// Orden de aparición de las categorías presentes en el menú.
const CATEGORY_ORDER: MenuCategory[] = [
  "espresso-bar-caliente",
  "espresso-bar-frio",
  "cold-brew",
  "alimentos",
];

// Foto real por categoría (capa de imágenes desacoplada, AGENTS.md §7).
const CATEGORY_IMAGES: Partial<Record<MenuCategory, ImageSlot>> = {
  alimentos: "brownie",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Carta · café de especialidad"
        title="Menú"
        lede="Nuestra oferta en barra. Los precios vigentes se incorporan desde el menú del local."
      />

      <Container className="py-16 md:py-24">
        <SlotImage
          slot="espresso"
          sizes="100vw"
          className="mb-16 h-56 rounded-lg md:h-80"
        />
        <div className="space-y-16">
          {CATEGORY_ORDER.map((category) => {
            const items = menu.filter((i) => i.category === category);
            if (items.length === 0) return null;
            const imageSlot = CATEGORY_IMAGES[category];
            return (
              <section
                key={category}
                className="grid gap-8 md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <h2 className="font-editorial text-2xl md:text-3xl">
                    {CATEGORY_LABELS[category]}
                  </h2>
                  {imageSlot && (
                    <SlotImage
                      slot={imageSlot}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      showCaption
                      figureClassName="mt-6"
                      className="aspect-[4/3] rounded-lg"
                    />
                  )}
                </div>
                <ul className="border-t border-black/10">
                  {items.map((item) => {
                    const price = formatPrice(item.price);
                    return (
                      <li
                        key={item.id}
                        className="flex items-baseline justify-between gap-4 border-b border-black/10 py-4"
                      >
                        <div>
                          <p
                            className={
                              item.featured ? "font-medium" : "text-foreground/90"
                            }
                          >
                            {item.name}
                            {item.featured && (
                              <span className="ml-2 align-middle text-xs text-brand-ink">
                                ● insignia
                              </span>
                            )}
                          </p>
                          {item.description && (
                            <p className="mt-1 max-w-md text-sm text-foreground/70">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {price && (
                          <span className="shrink-0 text-foreground/60">
                            {price}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-14 max-w-2xl text-foreground/70">
          ¿Quieres llevarte café a casa? Explora nuestra{" "}
          <Link
            href="/cafe-en-grano"
            className="text-brand-ink underline underline-offset-4"
          >
            selección de café en grano
          </Link>{" "}
          o vive un{" "}
          <Link
            href="/talleres"
            className="text-brand-ink underline underline-offset-4"
          >
            taller de café
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
