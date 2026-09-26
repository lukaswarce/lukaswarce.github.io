import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/content/site';
import { socials } from '@/content/socials';
import type { Article } from '@/content/journal';
import type { Publication } from '@/content/research';
import { defaultLocale, localeMeta, locales, type Locale } from '@/i18n/config';

type PageMeta = {
  locale: Locale;
  title?: string;
  description?: string;
  /** Ruta sin prefijo de idioma. */
  path: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  /** false cuando la página solo existe en un idioma (p. ej. un artículo). */
  translated?: boolean;
};

/** Enlaces hreflang entre las versiones de una misma página. */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(path, l)])),
  'x-default': absoluteUrl(path, defaultLocale),
});

/** Metadatos por página: canonical, hreflang, Open Graph y tarjeta de X con valores por defecto del sitio. */
export function pageMetadata({
  locale,
  title,
  description,
  path,
  type = 'website',
  image,
  publishedTime,
  modifiedTime,
  translated = true,
}: PageMeta): Metadata {
  const desc = description ?? siteConfig.seo.description[locale];
  const img = absoluteUrl(image ?? siteConfig.seo.ogImage);
  const fullTitle = title ? siteConfig.seo.titleTemplate.replace('%s', title) : siteConfig.seo.title[locale];
  const url = absoluteUrl(path, locale);
  return {
    title: title ?? { absolute: siteConfig.seo.title[locale] },
    description: desc,
    alternates: { canonical: url, ...(translated ? { languages: languageAlternates(path) } : {}) },
    openGraph: {
      type,
      url,
      siteName: `${siteConfig.name} (${siteConfig.username})`,
      title: fullTitle,
      description: desc,
      locale: localeMeta[locale].og,
      ...(translated ? { alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].og) } : {}),
      images: [{ url: img, alt: siteConfig.portrait.alt[locale] }],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [absoluteUrl('/about/', locale)] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.handle,
      creator: siteConfig.handle,
      title: fullTitle,
      description: desc,
      images: [img],
    },
  };
}

const personId = `${siteConfig.domain}/#person`;

/** Persona canónica. Solo datos verificados: nada de dirección, teléfono ni fecha de nacimiento. */
export function personJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.name,
        alternateName: [siteConfig.username, siteConfig.academicName],
        url: siteConfig.domain,
        image: absoluteUrl(siteConfig.portrait.src),
        jobTitle: siteConfig.positioning[locale][0],
        description: siteConfig.seo.description[locale],
        knowsAbout: ['Artificial Intelligence', 'AI Agents', 'Startups', 'Software Architecture', 'Internet of Things', 'Blockchain'],
        sameAs: socials.map((s) => s.url),
        mainEntityOfPage: siteConfig.domain,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: `${siteConfig.name} (${siteConfig.username})`,
        inLanguage: [...locales],
        publisher: { '@id': personId },
      },
    ],
  };
}

export function profilePageJsonLd(path: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(path, locale),
    inLanguage: locale,
    mainEntity: { '@id': personId },
  };
}

export function articleJsonLd(a: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: a.locale,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    author: { '@id': personId, '@type': 'Person', name: siteConfig.name, url: siteConfig.domain },
    mainEntityOfPage: absoluteUrl(`/writing/${a.slug}/`, a.locale),
    ...(a.cover ? { image: absoluteUrl(a.cover.src) } : {}),
  };
}

/** Publicación científica: los autores se listan tal como figuran en la fuente. */
export function scholarlyArticleJsonLd(p: Publication, locale: Locale) {
  return {
    '@type': 'ScholarlyArticle',
    headline: p.title,
    name: p.title,
    datePublished: p.date,
    author: p.authors.map((name) =>
      name === siteConfig.academicName ? { '@id': personId, '@type': 'Person', name } : { '@type': 'Person', name },
    ),
    isPartOf: { '@type': 'PublicationIssue', name: p.venue },
    url: p.url,
    ...(p.doi ? { sameAs: `https://doi.org/${p.doi}` } : {}),
    // El resumen en inglés es el de la fuente; en otros idiomas es una traducción.
    ...(p.summary ? { abstract: p.summary[locale] } : {}),
    ...(p.publisher ? { publisher: { '@type': 'Organization', name: p.publisher } } : {}),
  };
}

/** `path` ya incluye el prefijo de idioma. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, siteConfig.domain).href,
    })),
  };
}

/** Metadatos comunes del documento para cada layout raíz. */
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteConfig.domain),
    title: { default: siteConfig.seo.title[locale], template: siteConfig.seo.titleTemplate },
    description: siteConfig.seo.description[locale],
    applicationName: `${siteConfig.name} (${siteConfig.username})`,
    authors: [{ name: siteConfig.name, url: siteConfig.domain }],
    creator: siteConfig.name,
    robots: { index: true, follow: true, 'max-image-preview': 'large' } as Metadata['robots'],
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}
