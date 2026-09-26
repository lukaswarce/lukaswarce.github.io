import type { MetadataRoute } from 'next';
import { publishedArticles } from '@/content/journal';
import { absoluteUrl } from '@/content/site';
import { ventures } from '@/content/ventures';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about/', '/startups/', '/research/', '/writing/', '/now/', '/contact/'];
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p), changeFrequency: 'monthly' as const, priority: p === '/' ? 1 : 0.8 })),
    ...ventures.map((v) => ({ url: absoluteUrl(`/startups/${v.slug}/`), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...publishedArticles().map((a) => ({ url: absoluteUrl(`/writing/${a.slug}/`), lastModified: a.updatedAt ?? a.publishedAt, priority: 0.6 })),
  ];
}
