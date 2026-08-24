import Image from "next/image";
import { getImage, type ImageSlot } from "@/content/images";

// Renderiza la imagen de un slot con next/image. Si el archivo aún no está en
// /public/images/, muestra un placeholder neutral para que el layout se
// mantenga (DESIGN.md §10.1). El contenedor controla el tamaño; la imagen usa
// `fill` + object-cover, así cualquier proporción de origen encaja.

export function SlotImage({
  slot,
  sizes,
  priority = false,
  className = "",
}: {
  slot: ImageSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const img = getImage(slot);

  return (
    <div className={`relative overflow-hidden bg-muted/10 ${className}`}>
      {img ? (
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 grid place-items-center text-xs tracking-wide text-foreground/30"
        >
          Imagen provisional
        </span>
      )}
    </div>
  );
}
