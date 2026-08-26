import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: el sitio es 100% prerenderizado, así que generamos HTML/CSS/JS
  // puro en /out y lo servimos como assets estáticos en Cloudflare Workers.
  output: "export",
  images: {
    // La optimización on-the-fly de next/image no existe en export estático.
    // Las imágenes de /public/images ya están optimizadas (WebP/JPG).
    unoptimized: true,
  },
};

export default nextConfig;
