import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StatusBadge } from '@/components/StatusBadge';
import { getVenture } from '@/content/ventures';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';

export function ventureMetadata(locale: Locale, slug: string): Metadata {
  const v = getVenture(slug);
  if (!v) return {};
  return pageMetadata({ locale, title: v.name, description: `${v.name}: ${v.summary[locale]}`, path: `/startups/${v.slug}/` });
}

export function VentureView({ locale, slug }: { locale: Locale; slug: string }) {
  const v = getVenture(slug);
  if (!v) notFound();
  const d = getDictionary(locale);
  const t = d.venture;

  const facts = [
    { label: t.role, value: v.role[locale] },
    { label: t.period, value: v.period?.[locale] },
    { label: t.status, value: d.status[v.status] },
    { label: t.area, value: v.category[locale] },
  ].filter((f) => f.value);

  return (
    <article className="container-page pt-12 pb-24">
      <Breadcrumbs
        locale={locale}
        items={[
          { name: d.startupsPage.title, path: '/startups/' },
          { name: v.name, path: `/startups/${v.slug}/` },
        ]}
      />
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <StatusBadge status={v.status} locale={locale} />
          <h1 className="display mt-6 text-6xl leading-[0.95] sm:text-8xl">{v.name}</h1>
          <p className="mt-8 max-w-2xl text-2xl leading-snug text-fg">{v.summary[locale]}</p>
        </div>
        <dl className="self-end border-t border-fg md:col-span-4">
          {facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-6 border-b border-line py-3 text-sm">
              <dt className="text-muted">{f.label}</dt>
              <dd className="text-right text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-20 grid gap-14 md:grid-cols-12">
        <section aria-labelledby="overview-title" className="md:col-span-7">
          <h2 id="overview-title" className="eyebrow mb-6">
            {t.overview}
          </h2>
          <div className="prose-editorial">
            {v.description[locale].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {v.highlights[locale].length > 0 && (
            <>
              <h2 className="eyebrow mt-14 mb-6">{t.results}</h2>
              <ul className="border-t border-line">
                {v.highlights[locale].map((h) => (
                  <li key={h} className="border-b border-line py-4 text-lg text-fg">
                    {h}
                  </li>
                ))}
              </ul>
            </>
          )}
          {v.links.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-5">
              {v.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} className="link-arrow" rel="noopener">
                    {l.label} <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
        {v.slug === 'chaucheros' && (
          <aside aria-label={t.architecture} className="md:col-span-5">
            <ArchitectureDiagram locale={locale} />
          </aside>
        )}
      </div>

      <Link href={localePath(locale, '/startups/')} className="link-arrow mt-20">
        <span aria-hidden="true">←</span> {t.all}
      </Link>
    </article>
  );
}
