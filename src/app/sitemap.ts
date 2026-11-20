import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";
import { getImages, ROUTE_IMAGE_SLOTS } from "@/content/images";
import { expImages } from "@/content/experiencia-sensorial";
import { gallery } from "@/content/gallery";

// Sitemap de fase 1: homepage + las rutas de navegación aprobadas (SEO.md §3).
// Incluye las fotos reales de cada ruta (<image:image>) para Google Imágenes:
// next/image las sirve vía /_next/image, así que se declara el original.

const EXP_PATH = "/talleres/experiencia-sensorial";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Home + navegación aprobada + páginas de detalle no incluidas en el menú
  // (p. ej. la experiencia inmersiva del taller, enlazada desde /talleres).
  const routes = ["/", ...navItems.map((i) => i.href), EXP_PATH];

  return routes.map((path) => {
    const srcs =
      path === EXP_PATH
        ? [expImages.hero.src, expImages.cta.src]
        : [
            ...getImages(ROUTE_IMAGE_SLOTS[path] ?? []).map((img) => img.src),
            // Galería "El espacio" de /nosotros.
            ...(path === "/nosotros" ? gallery.map((p) => p.src) : []),
          ];

    return {
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
      ...(srcs.length
        ? { images: srcs.map((src) => `${siteConfig.url}${src}`) }
        : {}),
    };
  });
}
