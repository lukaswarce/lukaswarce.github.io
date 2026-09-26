import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/content/site';
import { socials } from '@/content/socials';
import type { Article } from '@/content/journal';
import type { Publication } from '@/content/research';

type PageMeta = {
  title?: string;
  description?: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/** Metadatos por página: canonical, Open Graph y tarjeta de X con valores por defecto del sitio. */
export function pageMetadata({ title, description, path, type = 'website', image, publishedTime, modifiedTime }: PageMeta): Metadata {
  const desc = description ?? siteConfig.seo.description;
  const img = absoluteUrl(image ?? siteConfig.seo.ogImage);
  const fullTitle = title ? siteConfig.seo.titleTemplate.replace('%s', title) : siteConfig.seo.title;
  return {
    title: title ?? { absolute: siteConfig.seo.title },
    description: desc,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type,
      url: absoluteUrl(path),
      siteName: `${siteConfig.name} (${siteConfig.username})`,
      title: fullTitle,
      description: desc,
      locale: 'en_US',
      images: [{ url: img, alt: siteConfig.portrait.alt }],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors: [absoluteUrl('/about/')] } : {}),
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
export function personJsonLd() {
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
        jobTitle: 'Tech Founder',
        description: siteConfig.seo.description,
        knowsAbout: ['Artificial Intelligence', 'AI Agents', 'Startups', 'Software Architecture', 'Internet of Things', 'Blockchain'],
        sameAs: socials.map((s) => s.url),
        mainEntityOfPage: siteConfig.domain,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: `${siteConfig.name} (${siteConfig.username})`,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
    ],
  };
}

export function profilePageJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(path),
    mainEntity: { '@id': personId },
  };
}

export function articleJsonLd(a: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    author: { '@id': personId, '@type': 'Person', name: siteConfig.name, url: siteConfig.domain },
    mainEntityOfPage: absoluteUrl(`/writing/${a.slug}/`),
    ...(a.cover ? { image: absoluteUrl(a.cover.src) } : {}),
  };
}

/** Publicación científica: los autores se listan tal como figuran en la fuente. */
export function scholarlyArticleJsonLd(p: Publication) {
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
    ...(p.summary ? { abstract: p.summary } : {}),
    ...(p.publisher ? { publisher: { '@type': 'Organization', name: p.publisher } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}
