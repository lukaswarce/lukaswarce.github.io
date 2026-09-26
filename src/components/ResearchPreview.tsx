import Link from 'next/link';
import { publications, researchAreas } from '@/content/research';
import { siteConfig } from '@/content/site';
import { researchSocials } from '@/content/socials';
import { PublicationItem } from './PublicationItem';
import { SectionHeader } from './SectionHeader';
import { SocialLinks } from './SocialLinks';

export function ResearchPreview() {
  return (
    <section aria-labelledby="research-title" className="container-page py-24">
      <SectionHeader
        id="research-title"
        eyebrow="Applied research"
        title="Research & publications"
        intro="Exploring the intersection of artificial intelligence, software and real-world problems."
        action={
          <Link href="/research/" className="link-arrow">
            All research <span aria-hidden="true">→</span>
          </Link>
        }
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="eyebrow mb-4">Areas</p>
          <ul className="space-y-3">
            {researchAreas.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <span className="text-fg">{a.name}</span>
                <span className="text-right font-mono text-[0.68rem] uppercase tracking-wider text-muted">{a.evidence.join(' / ')}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Earlier papers are published under {siteConfig.academicName}.
          </p>
          <SocialLinks items={researchSocials} className="mt-6" />
        </aside>
        <ol className="lg:col-span-8">
          {publications.slice(0, 3).map((p) => (
            <PublicationItem key={p.slug} pub={p} />
          ))}
        </ol>
      </div>
    </section>
  );
}
