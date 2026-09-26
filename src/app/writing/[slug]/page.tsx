import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { publishedArticles, readingTime } from '@/content/journal';
import { getVenture } from '@/content/ventures';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// La exportación estática necesita al menos una ruta; mientras no haya artículos
// se genera un marcador que responde 404.
const PLACEHOLDER = '_empty';

export function generateStaticParams() {
  const slugs = publishedArticles().map((a) => ({ slug: a.slug }));
  return slugs.length ? slugs : [{ slug: PLACEHOLDER }];
}

const find = (slug: string) => publishedArticles().find((a) => a.slug === slug);

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = find((await params).slug);
  if (!a) return { robots: { index: false } };
  return pageMetadata({
    title: a.title,
    description: a.description,
    path: `/writing/${a.slug}/`,
    type: 'article',
    image: a.cover?.src,
    publishedTime: a.publishedAt,
    modifiedTime: a.updatedAt,
  });
}

export default async function ArticlePage({ params }: Params) {
  const a = find((await params).slug);
  if (!a) notFound();
  const project = a.relatedProject ? getVenture(a.relatedProject) : undefined;

  return (
    <article className="container-page pt-12 pb-24">
      <JsonLd data={articleJsonLd(a)} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Writing', path: '/writing/' },
          { name: a.title, path: `/writing/${a.slug}/` },
        ]}
      />
      <header className="max-w-3xl">
        <p className="eyebrow">
          {a.category} · {readingTime(a)} min read
        </p>
        <h1 className="display mt-5 text-5xl leading-[1] sm:text-6xl">{a.title}</h1>
        <p className="mt-6 text-xl text-fg-soft">{a.description}</p>
        <p className="mt-6 font-mono text-xs text-muted">
          By {a.author} · <time dateTime={a.publishedAt}>{a.publishedAt}</time>
          {a.updatedAt && (
            <>
              {' '}
              · Updated <time dateTime={a.updatedAt}>{a.updatedAt}</time>
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
          Related project:{' '}
          <Link href={`/startups/${project.slug}/`} className="link-arrow">
            {project.name}
          </Link>
        </p>
      )}
    </article>
  );
}
