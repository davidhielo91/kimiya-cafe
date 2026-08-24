import type { Metadata } from "next";
import { beVietnam } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { getOgImage } from "@/content/images";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
    // Imagen para compartir en redes (/public/images/og.*, 1200×630).
    images: getOgImage()
      ? [{ url: getOgImage()!, width: 1200, height: 630 }]
      : undefined,
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
