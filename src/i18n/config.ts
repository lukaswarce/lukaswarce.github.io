/**
 * Idiomas del sitio. El inglés vive en la raíz; el resto con prefijo (/es/…).
 * Un idioma solo se activa cuando todo su contenido está traducido:
 * nunca se mezclan idiomas en una misma página.
 */
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const localizedLocales = locales.filter((l) => l !== defaultLocale);

export const localeMeta: Record<Locale, { label: string; short: string; og: string; dateLocale: string }> = {
  en: { label: 'English', short: 'EN', og: 'en_US', dateLocale: 'en-US' },
  es: { label: 'Español', short: 'ES', og: 'es_ES', dateLocale: 'es-ES' },
};

/** Texto traducible: una entrada por idioma activo. */
export type L<T = string> = Record<Locale, T>;

/** Prefija una ruta interna con el idioma: ('es', '/about/') → '/es/about/'. */
export const localePath = (locale: Locale, path = '/') => (locale === defaultLocale ? path : `/${locale}${path}`);

/** Quita el prefijo de idioma de una ruta: '/es/about/' → '/about/'. */
export function stripLocale(pathname: string) {
  for (const l of localizedLocales) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1) || '/';
  }
  return pathname;
}

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** Idioma de una ruta: '/es/about/' → 'es'. */
export const localeFromPath = (pathname: string): Locale =>
  localizedLocales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? defaultLocale;

/** Fecha AAAA-MM-DD en el formato del idioma. */
export const formatDate = (date: string, locale: Locale) =>
  new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`).toLocaleDateString(localeMeta[locale].dateLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
