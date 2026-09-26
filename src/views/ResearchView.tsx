import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { PublicationItem } from '@/components/PublicationItem';
import { SectionHeader } from '@/components/SectionHeader';
import { SocialLinks } from '@/components/SocialLinks';
import { publications, researchAreas, researchToProduct } from '@/content/research';
import { absoluteUrl, siteConfig } from '@/content/site';
import { researchSocials } from '@/content/socials';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata, scholarlyArticleJsonLd } from '@/lib/seo';

export const researchMetadata = (locale: Locale) => {
  const d = getDictionary(locale);
  return pageMetadata({ locale, title: d.research.title, description: d.researchPage.description, path: '/research/' });
};

export function ResearchView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const r = t.research;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: r.title,
    url: absoluteUrl('/research/', locale),
    inLanguage: locale,
    hasPart: publications.map((p) => scholarlyArticleJsonLd(p, locale)),
  };

  return (
    <div className="container-page pt-12 pb-24">
      <JsonLd data={jsonLd} />
      <Breadcrumbs locale={locale} items={[{ name: r.title, path: '/research/' }]} />
      <SectionHeader as="h1" eyebrow={r.eyebrow} title={r.title} intro={r.intro} />
      <div className="mt-8 flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-soft">
          {r.listedAs} <strong className="font-semibold text-fg">{siteConfig.academicName}</strong>.
        </p>
        <SocialLinks items={researchSocials} locale={locale} />
      </div>

      <section aria-labelledby="areas-title" className="mt-20">
        <h2 id="areas-title" className="display text-4xl">
          {r.areas}
        </h2>
        <dl className="mt-8 grid border-t border-fg sm:grid-cols-2">
          {researchAreas.map((a) => (
            <div key={a.name.en} className="border-b border-line py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
              <dt className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="display text-2xl">{a.name[locale]}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                  {a.evidence.map((e) => t.evidence[e]).join(' / ')}
                </span>
              </dt>
              <dd className="mt-2 text-fg-soft">{a.text[locale]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="pubs-title" className="mt-24">
        <h2 id="pubs-title" className="display text-4xl">
          {r.publications}
        </h2>
        <p className="mt-3 text-sm text-muted">{r.pubNote}</p>
        <ol className="mt-8 border-t border-fg">
          {publications.map((p) => (
            <PublicationItem key={p.slug} pub={p} locale={locale} detailed />
          ))}
        </ol>
      </section>

      <section aria-labelledby="r2p-title" className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="r2p-title" className="display text-4xl">
            {r.r2pTitle}
          </h2>
          <p className="mt-4 text-fg-soft">{r.r2pIntro}</p>
        </div>
        <ul className="border-t border-fg md:col-span-8">
          {researchToProduct.map((item) => (
            <li key={item.title.en} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <span className="self-start rounded-full border border-line px-3 py-1 text-center font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                {t.claim[item.type]}
              </span>
              <div>
                <h3 className="display text-2xl">{item.title[locale]}</h3>
                <p className="mt-2 text-fg-soft">{item.text[locale]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
