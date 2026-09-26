/**
 * Configuración central del sitio. Nombre, identidad, mensajes y contacto viven
 * aquí una sola vez; los componentes los leen de este archivo.
 * Los textos traducibles usan L (un valor por idioma, ver src/i18n/config.ts).
 */

import { defaultLocale, localePath, type L, type Locale } from '@/i18n/config';

export const siteConfig = {
  name: 'Christian Spana',
  username: 'lukaswarce',
  handle: '@lukaswarce',
  /** Variante histórica usada en publicaciones académicas. Solo para contexto de research. */
  academicName: 'Cristian Espana',
  domain: 'https://lukaswarce.com',

  headline: { en: 'I build technology companies.', es: 'Construyo empresas de tecnología.' } as L,
  description: {
    en: 'AI, software and startups — documented along the way.',
    es: 'IA, software y startups, documentados en el camino.',
  } as L,
  positioning: {
    en: ['Tech Founder', 'AI Builder', 'Software Architect'],
    es: ['Fundador tecnológico', 'AI Builder', 'Arquitecto de software'],
  } as L<string[]>,
  tagline: {
    en: 'Building technology, documenting the journey.',
    es: 'Construyo tecnología y documento el camino.',
  } as L,
  mission: {
    en: 'Building startups and AI products from Latin America to the world.',
    es: 'Construyo startups y productos de IA desde Latinoamérica para el mundo.',
  } as L,

  portrait: {
    src: '/images/christian-spana.jpeg',
    width: 800,
    height: 800,
    alt: {
      en: 'Portrait of Christian Spana (lukaswarce)',
      es: 'Retrato de Christian Spana (lukaswarce)',
    } as L,
  },

  contact: {
    // REVISAR: confirmar que hello@lukaswarce.com recibe correo antes de publicar.
    email: 'hello@lukaswarce.com',
    types: {
      en: ['Business', 'Startups', 'Research', 'Media & Podcasts', 'Collaborations'],
      es: ['Negocios', 'Startups', 'Investigación', 'Medios y podcasts', 'Colaboraciones'],
    } as L<string[]>,
  },

  seo: {
    title: {
      en: 'Christian Spana (lukaswarce) — Tech Founder & AI Builder',
      es: 'Christian Spana (lukaswarce) — Fundador tecnológico y AI Builder',
    } as L,
    titleTemplate: '%s — Christian Spana (lukaswarce)',
    description: {
      en: 'Christian Spana, known online as lukaswarce, is a technology entrepreneur and AI builder creating startups, software and AI products.',
      es: 'Christian Spana, conocido en internet como lukaswarce, es un emprendedor tecnológico y AI builder que crea startups, software y productos de IA.',
    } as L,
    ogImage: '/images/christian-spana.jpeg',
  },

  /**
   * Analítica respetuosa con la privacidad, desactivada por defecto.
   * Para activarla, elige proveedor ('plausible' | 'umami') y su dominio o id.
   */
  analytics: {
    provider: null as null | 'plausible' | 'umami',
    domain: 'lukaswarce.com',
    umamiWebsiteId: '',
  },
} as const;

/** Rutas sin prefijo de idioma; localePath() añade /es cuando toca. */
export const nav: { label: L; path: string }[] = [
  { label: { en: 'About', es: 'Sobre mí' }, path: '/about/' },
  { label: { en: 'Startups', es: 'Startups' }, path: '/startups/' },
  { label: { en: 'Research', es: 'Investigación' }, path: '/research/' },
  { label: { en: 'Writing', es: 'Escritos' }, path: '/writing/' },
  { label: { en: 'Now', es: 'Ahora' }, path: '/now/' },
];

export const absoluteUrl = (path = '/', locale: Locale = defaultLocale) =>
  new URL(localePath(locale, path), siteConfig.domain).href;
