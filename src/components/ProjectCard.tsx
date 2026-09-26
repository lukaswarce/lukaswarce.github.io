import Link from 'next/link';
import type { Venture } from '@/content/ventures';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';

/** Fila editorial de un venture (sin tarjetas con iconos). */
export function ProjectCard({ venture, index, locale }: { venture: Venture; index: number; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <li className="group border-b border-line">
      <Link
        href={localePath(locale, `/startups/${venture.slug}/`)}
        className="grid gap-3 py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-6"
        {...eventAttrs('project_view', { project: venture.slug })}
      >
        <span className="font-mono text-xs text-muted md:col-span-1">{String(index + 1).padStart(2, '0')}</span>
        <span className="display text-3xl transition-colors group-hover:text-accent md:col-span-3">{venture.name}</span>
        <span className="text-fg-soft md:col-span-5">{venture.summary[locale]}</span>
        <span className="text-sm text-muted md:col-span-3 md:text-right">
          {[venture.role[locale], venture.period?.[locale]].filter(Boolean).join(' · ') || t.status[venture.status]}
          <span className="mt-2 block text-fg md:mt-1">
            {t.venture.view} <span aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </li>
  );
}
