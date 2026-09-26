import Link from 'next/link';
import type { Venture } from '@/content/ventures';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { StatusBadge } from './StatusBadge';

/** Venture principal destacado en la home ("Currently building"). */
export function ProjectPreview({ venture, locale }: { venture: Venture; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="grid gap-10 border-t border-fg pt-10 md:grid-cols-12">
      <div className="md:col-span-6 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={venture.status} locale={locale} />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{venture.category[locale]}</span>
        </div>
        <h3 className="display mt-6 text-5xl sm:text-6xl">{venture.name}</h3>
        <p className="mt-5 max-w-lg text-2xl leading-snug text-fg">{venture.summary[locale]}</p>
        <div className="prose-editorial mt-6 max-w-lg">
          {venture.description[locale].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid max-w-sm grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-muted">{t.venture.role}</dt>
            <dd className="mt-1 text-fg">{venture.role[locale]}</dd>
          </div>
          <div>
            <dt className="text-muted">{t.venture.status}</dt>
            <dd className="mt-1 text-fg">{t.status[venture.status]}</dd>
          </div>
        </dl>
        <Link
          href={localePath(locale, `/startups/${venture.slug}/`)}
          className="link-arrow mt-10"
          {...eventAttrs('project_view', { project: venture.slug })}
        >
          {t.venture.explore} {venture.name} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="md:col-span-6 lg:col-span-5">
        <ArchitectureDiagram locale={locale} />
      </div>
    </div>
  );
}
