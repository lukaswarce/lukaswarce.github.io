import type { NextConfig } from 'next';

// Exportación estática para GitHub Pages: no hay servidor, así que las imágenes
// se sirven tal cual (ya vienen optimizadas desde /public).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Con dos layouts raíz (inglés y /es) la página 404 global se define en app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  poweredByHeader: false,
};

export default nextConfig;
