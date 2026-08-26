import type { NextConfig } from "next";

// Cabeceras de seguridad (hardening). Bajo riesgo para un sitio estático: no
// rompen GTM/GA ni el iframe de Maps y no afectan el SEO. Se excluye CSP a
// propósito (requiere pruebas para no bloquear scripts de terceros).
const securityHeaders = [
  // Fuerza HTTPS durante 1 año (Cloudflare ya sirve TLS). Sin `preload` para no
  // comprometer subdominios futuros.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Evita que el navegador "adivine" tipos MIME.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Anti-clickjacking: nadie puede incrustar el sitio en un iframe ajeno.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Privacidad del referer sin romper analítica.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva APIs del navegador que el sitio no usa.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Imagen de producción mínima para Docker (DEPLOYMENT.md §6).
  output: "standalone",
  // Las imágenes viven como archivos locales en /public/images/. Sin orígenes
  // remotos por ahora (DESIGN.md §10.1).
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
