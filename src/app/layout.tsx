import type { Metadata } from "next";
import { beVietnam } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { getOgImage } from "@/content/images";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

// Solo el dominio de producción se indexa. Cualquier otro (preview de Coolify,
// dominio temporal) se marca noindex para no competir con el sitio real ni
// generar contenido duplicado. El OG/preview sigue funcionando (noindex no
// bloquea a los crawlers sociales).
const host = new URL(siteConfig.url).hostname;
const isProduction =
  host === siteConfig.legalDomain || host.endsWith("." + siteConfig.legalDomain);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: isProduction ? undefined : { index: false, follow: false },
  title: {
    default: `${siteConfig.name} — Café de especialidad en Morelia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.positioning,
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: siteConfig.name,
    url: siteConfig.url,
    // Imagen para compartir en redes (/public/images/og.*), con dimensiones
    // reales del archivo.
    images: (() => {
      const og = getOgImage();
      return og ? [{ url: og.url, width: og.width, height: og.height }] : undefined;
    })(),
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
