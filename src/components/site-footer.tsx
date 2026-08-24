import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";
import { formatAddress } from "@/lib/format";

// Pie de página con NAP consistente (SEO.md §13). No renderiza datos internos
// ni marcadores TODO_CLIENT como texto visible (DEPLOYMENT.md §12).

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer className="mt-16 border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs font-serif text-sm text-white/70">
            {siteConfig.brandPhrase}
          </p>
        </div>

        <nav aria-label="Navegación del pie">
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="text-sm not-italic text-white/80">
          <p>{formatAddress()}</p>
          <p className="mt-2">
            <a href={`tel:+52${contact.phone}`} className="hover:text-brand">
              {contact.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} className="hover:text-brand">
              {contact.email}
            </a>
          </p>
          <p className="mt-3 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              Google Maps
            </a>
          </p>
        </address>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. Morelia, Michoacán.
        </p>
      </div>
    </footer>
  );
}
