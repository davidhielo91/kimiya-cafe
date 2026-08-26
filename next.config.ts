import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imagen de producción mínima para Docker (DEPLOYMENT.md §6).
  output: "standalone",
  // Las imágenes viven como archivos locales en /public/images/. Sin orígenes
  // remotos por ahora (DESIGN.md §10.1).
};

export default nextConfig;
