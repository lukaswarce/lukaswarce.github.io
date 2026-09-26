import type { MetadataRoute } from 'next';
import { publishedArticles } from '@/content/journal';
import { absoluteUrl } from '@/content/site';
import { ventures } from '@/content/ventures';
import { locales } from '@/i18n/config';
import { languageAlternates } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about/', '/startups/', '/research/', '/writing/', '/now/', '/contact/'];
  const translated = [
    ...pages.map((p) => ({ path: p, priority: p === '/' ? 1 : 0.8 })),
    ...ventures.map((v) => ({ path: `/startups/${v.slug}/`, priority: 0.6 })),
  ];
  return [
    ...translated.flatMap(({ path, priority }) =>
      locales.map((l) => ({
        url: absoluteUrl(path, l),
        changeFrequency: 'monthly' as const,
        priority,
        alternates: { languages: languageAlternates(path) },
      })),
    ),
    // Los artículos existen en un solo idioma.
    ...publishedArticles().map((a) => ({
      url: absoluteUrl(`/writing/${a.slug}/`, a.locale),
      lastModified: a.updatedAt ?? a.publishedAt,
      priority: 0.6,
    })),
  ];
}
