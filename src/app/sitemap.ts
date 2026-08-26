import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";

// Sitemap de fase 1: homepage + las rutas de navegación aprobadas (SEO.md §3).

// Requerido por `output: export` para prerenderizar el sitemap como archivo.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", ...navItems.map((i) => i.href)];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
