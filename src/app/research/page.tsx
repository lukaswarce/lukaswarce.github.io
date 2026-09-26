import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { PublicationItem } from '@/components/PublicationItem';
import { SectionHeader } from '@/components/SectionHeader';
import { SocialLinks } from '@/components/SocialLinks';
import { publications, researchAreas, researchToProduct } from '@/content/research';
import { absoluteUrl, siteConfig } from '@/content/site';
import { researchSocials } from '@/content/socials';
import { pageMetadata, scholarlyArticleJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Research',
  description:
    'Research and publications by Christian Spana (published as Cristian Espana) on IoT, blockchain-based access control and applied AI.',
  path: '/research/',
});

export default function ResearchPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Research & publications',
    url: absoluteUrl('/research/'),
    hasPart: publications.map(scholarlyArticleJsonLd),
  };

  return (
    <div className="container-page pt-12 pb-24">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Research', path: '/research/' }]} />
      <SectionHeader
        as="h1"
        eyebrow="Applied research"
        title="Research & publications"
        intro="Exploring the intersection of artificial intelligence, software and real-world problems."
      />
      <div className="mt-8 flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg-soft">
          My earlier papers list me as <strong className="font-semibold text-fg">{siteConfig.academicName}</strong>.
        </p>
        <SocialLinks items={researchSocials} />
      </div>

      <section aria-labelledby="areas-title" className="mt-20">
        <h2 id="areas-title" className="display text-4xl">Areas</h2>
        <dl className="mt-8 grid border-t border-fg sm:grid-cols-2">
          {researchAreas.map((a) => (
            <div key={a.name} className="border-b border-line py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
              <dt className="flex flex-wrap items-baseline justify-between gap-3">
                <span className="display text-2xl">{a.name}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">{a.evidence.join(' / ')}</span>
              </dt>
              <dd className="mt-2 text-fg-soft">{a.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="pubs-title" className="mt-24">
        <h2 id="pubs-title" className="display text-4xl">Publications</h2>
        <p className="mt-3 text-sm text-muted">Authors, venues and dates as recorded by the publisher, DOI or arXiv.</p>
        <ol className="mt-8 border-t border-fg">
          {publications.map((p) => (
            <PublicationItem key={p.slug} pub={p} detailed />
          ))}
        </ol>
      </section>

      <section aria-labelledby="r2p-title" className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="r2p-title" className="display text-4xl">Research → Product</h2>
          <p className="mt-4 text-fg-soft">
            How research shapes what I build. Every note is labeled so evidence, hypotheses and startup experiments stay
            separate.
          </p>
        </div>
        <ul className="border-t border-fg md:col-span-8">
          {researchToProduct.map((r) => (
            <li key={r.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <span className="self-start rounded-full border border-line px-3 py-1 text-center font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                {r.type}
              </span>
              <div>
                <h3 className="display text-2xl">{r.title}</h3>
                <p className="mt-2 text-fg-soft">{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
