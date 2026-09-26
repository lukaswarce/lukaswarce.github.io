/**
 * Configuración central del sitio. Nombre, identidad, mensajes y contacto viven
 * aquí una sola vez; los componentes los leen de este archivo.
 */

export const siteConfig = {
  name: 'Christian Spana',
  username: 'lukaswarce',
  handle: '@lukaswarce',
  /** Variante histórica usada en publicaciones académicas. Solo para contexto de research. */
  academicName: 'Cristian Espana',
  domain: 'https://lukaswarce.com',
  locale: 'en',
  /** Idiomas previstos. Hoy solo se publica inglés; `es` queda preparado. */
  plannedLocales: ['en', 'es'] as const,

  headline: 'I build technology companies.',
  description: 'AI, software and startups — documented along the way.',
  positioning: ['Tech Founder', 'AI Builder', 'Software Architect'],
  tagline: 'Building technology, documenting the journey.',
  mission: 'Building startups and AI products from Latin America to the world.',

  portrait: {
    src: '/images/christian-spana.jpeg',
    width: 800,
    height: 800,
    alt: 'Portrait of Christian Spana (lukaswarce)',
  },

  contact: {
    // REVISAR: confirmar que hello@lukaswarce.com recibe correo antes de publicar.
    email: 'hello@lukaswarce.com',
    types: ['Business', 'Startups', 'Research', 'Media & Podcasts', 'Collaborations'],
  },

  seo: {
    title: 'Christian Spana (lukaswarce) — Tech Founder & AI Builder',
    titleTemplate: '%s — Christian Spana (lukaswarce)',
    description:
      'Christian Spana, known online as lukaswarce, is a technology entrepreneur and AI builder creating startups, software and AI products.',
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

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Startups', href: '/startups/' },
  { label: 'Research', href: '/research/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Now', href: '/now/' },
] as const;

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.domain).href;
