import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";

// Sitemap de fase 1: homepage + las rutas de navegación aprobadas (SEO.md §3).

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Home + navegación aprobada + páginas de detalle no incluidas en el menú
  // (p. ej. la experiencia inmersiva del taller, enlazada desde /talleres).
  const routes = [
    "/",
    ...navItems.map((i) => i.href),
    "/talleres/experiencia-sensorial",
  ];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
