import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { publishedArticles, readingTime } from '@/content/journal';
import { getVenture } from '@/content/ventures';
import { formatDate, localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

// La exportación estática necesita al menos una ruta; mientras no haya artículos
// en un idioma se genera un marcador que responde 404.
const PLACEHOLDER = '_empty';

export function articleParams(locale: Locale) {
  const slugs = publishedArticles(locale).map((a) => ({ slug: a.slug }));
  return slugs.length ? slugs : [{ slug: PLACEHOLDER }];
}

const find = (locale: Locale, slug: string) => publishedArticles(locale).find((a) => a.slug === slug);

export function articleMetadata(locale: Locale, slug: string): Metadata {
  const a = find(locale, slug);
  if (!a) return { robots: { index: false } };
  return pageMetadata({
    locale,
    title: a.title,
    description: a.description,
    path: `/writing/${a.slug}/`,
    type: 'article',
    image: a.cover?.src,
    publishedTime: a.publishedAt,
    modifiedTime: a.updatedAt,
    translated: false,
  });
}

export function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const a = find(locale, slug);
  if (!a) notFound();
  const t = getDictionary(locale).writingPage;
  const project = a.relatedProject ? getVenture(a.relatedProject) : undefined;

  return (
    <article className="container-page pt-12 pb-24">
      <JsonLd data={articleJsonLd(a)} />
      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.title, path: '/writing/' },
          { name: a.title, path: `/writing/${a.slug}/` },
        ]}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">
          {getDictionary(locale).articleCategory[a.category]} · {readingTime(a)} {t.minRead}
        </p>
        <h1 className="display mt-5 text-5xl leading-[1] sm:text-6xl">{a.title}</h1>
        <p className="mt-6 text-xl text-fg-soft">{a.description}</p>
        <p className="mt-6 font-mono text-xs text-muted">
          {t.by} {a.author} · <time dateTime={a.publishedAt}>{formatDate(a.publishedAt, locale)}</time>
          {a.updatedAt && (
            <>
              {' '}
              · {t.updated} <time dateTime={a.updatedAt}>{formatDate(a.updatedAt, locale)}</time>
            </>
          )}
        </p>
      </header>
      {a.cover && (
        <Image src={a.cover.src} alt={a.cover.alt} width={1600} height={900} className="mt-12 h-auto w-full rounded-sm" priority />
      )}
      <div className="prose-editorial mt-12 max-w-2xl">
        {a.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {project && (
        <p className="mt-12">
          {t.related}{' '}
          <Link href={localePath(locale, `/startups/${project.slug}/`)} className="link-arrow">
            {project.name}
          </Link>
        </p>
      )}
    </article>
  );
}
