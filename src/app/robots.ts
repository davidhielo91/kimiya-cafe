import type { MetadataRoute } from "next";
import { siteConfig, isProductionHost } from "@/lib/site";

// Requerido por `output: export` para prerenderizar robots.txt como archivo.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // En dominios no productivos (previews de Coolify, staging) se bloquea todo
  // el rastreo para no competir con el sitio real ni indexar duplicados.
  if (!isProductionHost()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
