import { siteConfig } from "@/lib/site";
import { getOgImage } from "@/content/images";

// Schema JSON-LD para SEO local (SEO.md §12–13).
//
// Tipo CafeOrCoffeeShop. Los `openingHoursSpecification` OMITEN los días sin
// confirmar (sábado = null / TODO_CLIENT): no publicar horario definitivo
// incompleto (SEO.md §13). Se completará al confirmarse el dato.

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
    .map(([day, h]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_SCHEMA[day],
      opens: h!.open,
      closes: h!.close,
    }));

  const ogImage = getOgImage();

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    url: siteConfig.url,
    ...(ogImage ? { image: `${siteConfig.url}${ogImage}` } : {}),
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
