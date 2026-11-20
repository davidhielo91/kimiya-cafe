import Image from "next/image";
import type { GalleryPhoto } from "@/content/gallery";

// Galería en mosaico (columnas CSS) sin JavaScript de cliente. Mezcla fotos
// verticales y horizontales sin recortarlas; `width`/`height` reales evitan
// CLS y next/image hace lazy-load por defecto (queda bajo el pliegue).

export function Gallery({
  id,
  eyebrow,
  title,
  photos,
}: {
  id: string;
  eyebrow: string;
  title: string;
  photos: GalleryPhoto[];
}) {
  const headingId = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-24">
      <p className="eyebrow text-brand-ink">{eyebrow}</p>
      <h2
        id={headingId}
        className="font-editorial mt-3 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight"
      >
        {title}
      </h2>

      <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-5">
        {photos.map((photo) => (
          <figure key={photo.id} className="mb-3 break-inside-avoid md:mb-5">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-auto w-full rounded-lg bg-muted/10"
            />
            <figcaption className="mt-2 text-xs text-foreground/60 md:text-sm">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
