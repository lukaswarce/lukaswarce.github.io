/**
 * Contenido que Christian actualiza con el tiempo: registro de construcción,
 * artículos, página Now y panel del fundador. No inventar actividad histórica.
 */

import type { L, Locale } from '@/i18n/config';
import { publications } from './research';

export type BuildingCategory = 'AI' | 'Product' | 'Startups' | 'Distribution' | 'Engineering' | 'Research' | 'Business';

export type BuildingUpdate = {
  date: string; // AAAA-MM-DD
  project: string;
  category: BuildingCategory;
  update: L;
  link?: { label: L; url: string };
};

// Añade entradas nuevas arriba. Plantilla:
// { date: '2026-10-01', project: 'Chaucheros', category: 'Product', update: { en: '…', es: '…' } },
export const buildingUpdates: BuildingUpdate[] = [
  {
    date: '2026-09-26',
    project: 'lukaswarce.com',
    category: 'Engineering',
    update: {
      en: 'Rebuilt lukaswarce.com as the canonical home for my work, research and building log.',
      es: 'Rehice lukaswarce.com como el hogar oficial de mi trabajo, mi investigación y mi registro de construcción.',
    },
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
  /** Idioma en que está escrito; solo se publica en esa versión del sitio. */
  locale: Locale;
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

export const publishedArticles = (locale?: Locale) =>
  articles
    .filter((a) => !a.draft && (!locale || a.locale === locale)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const readingTime = (a: Article) =>
  a.readingTime ?? Math.max(1, Math.round(a.body.join(' ').split(/\s+/).length / 220));

/** Página /now. Deja un valor en null para mostrar "—". Las etiquetas están en src/i18n/ui.ts. */
export type NowKey = 'building' | 'exploring' | 'learning' | 'publishing' | 'goal';

export const now: { updatedAt: string; items: { key: NowKey; value: L | null }[] } = {
  updatedAt: '2026-09-26',
  items: [
    { key: 'building', value: { en: 'Chaucheros', es: 'Chaucheros' } },
    { key: 'exploring', value: { en: 'AI agents and the future of work', es: 'Agentes de IA y el futuro del trabajo' } },
    { key: 'learning', value: null },
    { key: 'publishing', value: null },
    { key: 'goal', value: null },
  ],
};

/**
 * Panel del fundador. Solo métricas verificadas; null se muestra como "—".
 * `source` indica de dónde sale el dato para poder conectarlo a datos reales.
 */
export type DashboardKey = 'building' | 'publishing' | 'learning' | 'community';

export const dashboard: { key: DashboardKey; value: string | null; source: string }[] = [
  { key: 'building', value: 'Chaucheros', source: 'ventures.ts' },
  { key: 'publishing', value: String(publications.length), source: 'research.ts' },
  { key: 'learning', value: null, source: 'manual' },
  { key: 'community', value: null, source: 'Substack (not connected)' },
];
