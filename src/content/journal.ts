/**
 * Contenido que Christian actualiza con el tiempo: registro de construcción,
 * artículos, página Now y panel del fundador. No inventar actividad histórica.
 */

import { publications } from './research';

export type BuildingCategory = 'AI' | 'Product' | 'Startups' | 'Distribution' | 'Engineering' | 'Research' | 'Business';

export type BuildingUpdate = {
  date: string; // AAAA-MM-DD
  project: string;
  category: BuildingCategory;
  update: string;
  link?: { label: string; url: string };
};

// Añade entradas nuevas arriba. Plantilla:
// { date: '2026-10-01', project: 'Chaucheros', category: 'Product', update: '…', link: { label: '…', url: '…' } },
export const buildingUpdates: BuildingUpdate[] = [
  {
    date: '2026-09-26',
    project: 'lukaswarce.com',
    category: 'Engineering',
    update: 'Rebuilt lukaswarce.com as the canonical home for my work, research and building log.',
  },
];

export type ArticleCategory =
  | 'AI'
  | 'Startups'
  | 'Building in Public'
  | 'Technology'
  | 'Product'
  | 'Business'
  | 'Research'
  | 'Future of Work';

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: ArticleCategory;
  /** Minutos; se calcula si no se indica. */
  readingTime?: number;
  cover?: { src: string; alt: string };
  author: string;
  relatedProject?: string;
  /** Párrafos del artículo. Los borradores no se publican ni entran al sitemap. */
  body: string[];
  draft?: boolean;
};

export const articleCategories: ArticleCategory[] = [
  'AI',
  'Startups',
  'Building in Public',
  'Technology',
  'Product',
  'Business',
  'Research',
  'Future of Work',
];

// Sin artículos publicados todavía. Para publicar, añade un objeto `Article` con draft: false.
export const articles: Article[] = [];

export const publishedArticles = () =>
  articles.filter((a) => !a.draft).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const readingTime = (a: Article) =>
  a.readingTime ?? Math.max(1, Math.round(a.body.join(' ').split(/\s+/).length / 220));

/** Página /now. Deja un campo en null para mostrar "—". */
export const now = {
  updatedAt: '2026-09-26',
  items: [
    { label: 'Building', value: 'Chaucheros' as string | null },
    { label: 'Exploring', value: 'AI agents and the future of work' as string | null },
    { label: 'Learning', value: null as string | null },
    { label: 'Publishing', value: null as string | null },
    { label: 'Current goal', value: null as string | null },
  ],
};

/**
 * Panel del fundador. Solo métricas verificadas; null se muestra como "—".
 * `source` indica de dónde sale el dato para poder conectarlo a datos reales.
 */
export const dashboard = [
  { area: 'Building', label: 'Active venture', value: 'Chaucheros' as string | null, source: 'ventures.ts' },
  { area: 'Publishing', label: 'Publications', value: String(publications.length) as string | null, source: 'research.ts' },
  { area: 'Learning', label: 'Current focus', value: null as string | null, source: 'manual' },
  { area: 'Community', label: 'Newsletter readers', value: null as string | null, source: 'Substack (not connected)' },
];
