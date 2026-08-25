import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";
import { MobileNav } from "@/components/mobile-nav";

// Cabecera pública. Server Component; solo el menú móvil (MobileNav) es cliente,
// para poder cerrarse al seleccionar una página (AGENTS.md §6).

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="inline-flex items-center"
        >
          <Image
            src="/images/logo-kimiya-cafe-oscuro.png"
            alt={siteConfig.name}
            width={185}
            height={140}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
