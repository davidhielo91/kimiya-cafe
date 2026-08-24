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

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded px-2 py-1 text-sm">
            Menú
          </summary>
          <ul className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-black/10 bg-background p-2 shadow-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
