import type { Metadata } from "next";
import Script from "next/script";
import { beVietnam } from "@/lib/fonts";
import { siteConfig, isProductionHost } from "@/lib/site";
import { getOgImage } from "@/content/images";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

// Solo el dominio de producción se indexa. Cualquier otro (preview de Coolify,
// dominio temporal) se marca noindex para no competir con el sitio real ni
// generar contenido duplicado. El OG/preview sigue funcionando (noindex no
// bloquea a los crawlers sociales).
const isProduction = isProductionHost();

// Token de verificación de Google Search Console. Se inyecta por env para no
// versionarlo; si no está definido, no se emite la etiqueta.
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: isProduction ? undefined : { index: false, follow: false },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  title: {
    default: `${siteConfig.name} — Café de especialidad en Morelia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.positioning,
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: siteConfig.name,
    // og:url se OMITE a propósito: este openGraph es compartido por todas las
    // páginas y Next no hace deep-merge, así que hardcodear una URL apuntaría
    // todas las interiores al home. El canonical per-página (alternates.canonical)
    // ya comunica la URL correcta.
    // Imagen para compartir en redes (/public/images/og.*), con dimensiones reales.
    images: (() => {
      const og = getOgImage();
      return og
        ? [
            {
              url: og.url,
              width: og.width,
              height: og.height,
              alt: `Barra de ${siteConfig.name} en Morelia con el mural de grafiti y métodos de filtrado`,
            },
          ]
        : undefined;
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
        {/* Google Tag Manager (noscript). Debe ir justo tras abrir <body>. */}
        {isProduction && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />

        {/* Google Tag Manager (loader). Solo en producción para no contar
            tráfico de previews/staging. Se carga tras la hidratación. */}
        {isProduction && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteConfig.analytics.gtmId}');`}
          </Script>
        )}

        {/* Google Analytics 4 (gtag.js) directo, para medición inmediata sin
            depender de la configuración de GTM. NO añadir GA4 dentro de GTM o
            se contaría doble. */}
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.analytics.ga4Id}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
