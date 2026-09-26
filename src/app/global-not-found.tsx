import './globals.css';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { NotFoundView } from '@/views/NotFoundView';

export const metadata: Metadata = { title: 'Page not found — Christian Spana (lukaswarce)', robots: { index: false } };

// GitHub Pages sirve este 404.html para cualquier ruta inexistente, en cualquier idioma.
export default function GlobalNotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundView locale="en" />
    </SiteShell>
  );
}
