import type { NextConfig } from 'next';

// Exportación estática para GitHub Pages: no hay servidor, así que las imágenes
// se sirven tal cual (ya vienen optimizadas desde /public).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
