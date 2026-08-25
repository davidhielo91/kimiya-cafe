import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";
import { navItems } from "@/lib/nav";
import { weekHours } from "@/lib/format";

// Pie de página con NAP consistente y estructurado (SEO.md §13). Cada dato va
// bajo su etiqueta. No renderiza datos internos ni marcadores TODO_CLIENT
// (DEPLOYMENT.md §12): los días sin confirmar (sábado) se omiten.

export function SiteFooter() {
  const { contact, address, social } = siteConfig;
  const hours = weekHours().filter((row) => row.range !== null);

  return (
    <footer className="mt-20 border-t border-black/10 bg-ink text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:pr-6">
          <Image
            src="/images/logo-kimiya-cafe-original.png"
            alt={siteConfig.name}
            width={185}
            height={140}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs font-serif text-sm leading-relaxed text-white/60">
            {siteConfig.brandPhrase}
          </p>
        </div>

        {/* Explorar */}
        <FooterCol label="Explorar">
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterCol>

        {/* Contacto */}
        <FooterCol label="Contacto">
          <div className="space-y-5 text-sm">
            <div>
              <p className="eyebrow text-white/40">Dirección</p>
              <address className="mt-1.5 not-italic leading-relaxed text-white/80">
                {address.street}
                <br />
                {address.neighborhood}, CP {address.postalCode}
                <br />
                {address.city}, {address.state}
              </address>
              <a
                href={social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-brand hover:underline"
              >
                Cómo llegar →
              </a>
            </div>

            <div>
              <p className="eyebrow text-white/40">Teléfono</p>
              <a
                href={`tel:+52${contact.phone}`}
                className="mt-1.5 inline-block text-white/80 hover:text-brand"
              >
                {contact.phone}
              </a>
            </div>

            <div>
              <p className="eyebrow text-white/40">Correo</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1.5 inline-block break-all text-white/80 hover:text-brand"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </FooterCol>

        {/* Horario + Redes */}
        <FooterCol label="Horario">
          <dl className="text-sm">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex justify-between gap-4 py-1 text-white/80"
              >
                <dt>{row.day}</dt>
                <dd className="tabular-nums text-white/60">{row.range}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <p className="eyebrow text-white/40">Síguenos</p>
            <div className="mt-2 flex gap-4 text-sm">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand"
              >
                Instagram
              </a>
              <a
                href={social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand"
              >
                Google Maps
              </a>
            </div>
          </div>
        </FooterCol>
      </Container>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>Café de especialidad en Morelia · Chapultepec</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow mb-4 text-brand">{label}</p>
      {children}
    </div>
  );
}
