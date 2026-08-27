import { siteConfig } from "@/lib/site";
import { getOgImage } from "@/content/images";
import type { Workshop } from "@/lib/types";

// Schema JSON-LD para SEO local (SEO.md §12–13).
//
// Tipo CafeOrCoffeeShop. Los `openingHoursSpecification` OMITEN los días sin
// confirmar (`null` / TODO_CLIENT). Los días cerrados (`"closed"`, p. ej. el
// sábado) se declaran con opens = closes = "00:00", que es como Google marca
// "cerrado" (SEO.md §13).

const DAY_SCHEMA: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function localBusinessJsonLd() {
  const a = siteConfig.address;

  const openingHoursSpecification = Object.entries(siteConfig.hours)
    .filter(([, h]) => h !== null)
    .map(([day, h]) => {
      // Día cerrado: Google lo interpreta con opens = closes = "00:00".
      if (h === "closed") {
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: DAY_SCHEMA[day],
          opens: "00:00",
          closes: "00:00",
        };
      }
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_SCHEMA[day],
        opens: h!.open,
        closes: h!.close,
      };
    });

  const ogImage = getOgImage();

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    url: siteConfig.url,
    ...(ogImage ? { image: `${siteConfig.url}${ogImage.url}` } : {}),
    telephone: `+52${siteConfig.contact.phone}`,
    email: siteConfig.contact.email,
    hasMenu: `${siteConfig.url}/menu`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: "Morelia, Michoacán",
    servesCuisine: "Café de especialidad",
    foundingDate: String(siteConfig.foundingYear),
    sameAs: [siteConfig.social.instagram, siteConfig.social.googleBusiness],
    openingHoursSpecification,
  };
}

/** Organization para señales de marca / knowledge panel (home). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-kimiya-cafe-oscuro.png`,
    sameAs: [siteConfig.social.instagram, siteConfig.social.googleBusiness],
  };
}

/** WebSite para identidad del sitio (home). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es-MX",
  };
}

/**
 * Course para un taller/experiencia (SEO.md §12). Se declara el proveedor
 * (Organization), la oferta con precio confirmado y una instancia presencial
 * en el propio café. No se declara `startDate` porque la fecha se coordina de
 * forma anticipada en el local (no hay calendario fijo publicado).
 */
export function courseJsonLd(workshop: Workshop, path: string) {
  const a = siteConfig.address;
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: workshop.name,
    description: workshop.purpose,
    url,
    inLanguage: "es-MX",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: String(workshop.pricePerPerson),
      priceCurrency: "MXN",
      category: "Taller",
      availability: "https://schema.org/InStock",
      url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      inLanguage: "es-MX",
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: a.street,
          addressLocality: a.city,
          addressRegion: a.state,
          postalCode: a.postalCode,
          addressCountry: a.country,
        },
      },
    },
  };
}

export type FaqItem = { q: string; a: string };

/** FAQPage a partir de preguntas confirmadas. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
