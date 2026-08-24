import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";

// Cabecera pública. Server Component: sin interacción compleja todavía.
// El menú móvil usa <details> nativo para no enviar JavaScript (AGENTS.md §6).

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menú"
            className="flex cursor-pointer items-center rounded p-2 text-foreground list-none [&::-webkit-details-marker]:hidden"
          >
            {/* Ícono hamburguesa (cerrado) */}
            <svg
              className="h-6 w-6 group-open:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            {/* Ícono cerrar (abierto) */}
            <svg
              className="hidden h-6 w-6 group-open:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </summary>

          <nav aria-label="Navegación móvil" className="absolute right-0 z-20 mt-2 w-56 rounded-md border border-black/10 bg-background p-2 shadow-lg">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded px-3 py-2 text-sm text-foreground/90 hover:bg-black/5 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
