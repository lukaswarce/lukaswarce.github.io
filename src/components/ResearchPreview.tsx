import Link from 'next/link';
import { publications, researchAreas } from '@/content/research';
import { siteConfig } from '@/content/site';
import { researchSocials } from '@/content/socials';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { PublicationItem } from './PublicationItem';
import { SectionHeader } from './SectionHeader';
import { SocialLinks } from './SocialLinks';

export function ResearchPreview({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="research-title" className="container-page py-24">
      <SectionHeader
        id="research-title"
        eyebrow={t.research.eyebrow}
        title={t.research.title}
        intro={t.research.intro}
        action={
          <Link href={localePath(locale, '/research/')} className="link-arrow">
            {t.research.all} <span aria-hidden="true">→</span>
          </Link>
        }
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="eyebrow mb-4">{t.research.areas}</p>
          <ul className="space-y-3">
            {researchAreas.map((a) => (
              <li key={a.name.en} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <span className="text-fg">{a.name[locale]}</span>
                <span className="text-right font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                  {a.evidence.map((e) => t.evidence[e]).join(' / ')}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            {t.research.earlier} {siteConfig.academicName}.
          </p>
          <SocialLinks items={researchSocials} locale={locale} className="mt-6" />
        </aside>
        <ol className="lg:col-span-8">
          {publications.slice(0, 3).map((p) => (
            <PublicationItem key={p.slug} pub={p} locale={locale} />
          ))}
        </ol>
      </div>
    </section>
  );
}
