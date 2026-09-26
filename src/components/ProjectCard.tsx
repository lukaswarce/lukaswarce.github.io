import Link from 'next/link';
import type { Venture } from '@/content/ventures';
import { eventAttrs } from '@/lib/analytics';

/** Fila editorial de un venture (sin tarjetas con iconos). */
export function ProjectCard({ venture, index }: { venture: Venture; index: number }) {
  return (
    <li className="group border-b border-line">
      <Link
        href={`/startups/${venture.slug}/`}
        className="grid gap-3 py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-6"
        {...eventAttrs('project_view', { project: venture.slug })}
      >
        <span className="font-mono text-xs text-muted md:col-span-1">{String(index + 1).padStart(2, '0')}</span>
        <span className="display text-3xl transition-colors group-hover:text-accent md:col-span-3">{venture.name}</span>
        <span className="text-fg-soft md:col-span-5">{venture.summary}</span>
        <span className="text-sm text-muted md:col-span-3 md:text-right">
          {[venture.role, venture.period].filter(Boolean).join(' · ') || venture.status}
          <span className="mt-2 block text-fg md:mt-1">
            View project <span aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </li>
  );
}
