// Navegación pública de fase 1. Estas son las ÚNICAS rutas permitidas
// (AGENTS.md §4 / SEO.md §3). No añadir rutas sin aprobación.

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/menu", label: "Menú" },
  { href: "/cafe-en-grano", label: "Café en grano" },
  { href: "/talleres", label: "Talleres" },
  { href: "/metodos", label: "Métodos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/ubicacion", label: "Visítanos" },
];
