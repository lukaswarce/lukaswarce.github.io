import Link from 'next/link';
import type { Venture } from '@/content/ventures';
import { eventAttrs } from '@/lib/analytics';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { StatusBadge } from './StatusBadge';

/** Venture principal destacado en la home ("Currently building"). */
export function ProjectPreview({ venture }: { venture: Venture }) {
  return (
    <div className="grid gap-10 border-t border-fg pt-10 md:grid-cols-12">
      <div className="md:col-span-6 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={venture.status} />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{venture.category}</span>
        </div>
        <h3 className="display mt-6 text-5xl sm:text-6xl">{venture.name}</h3>
        <p className="mt-5 max-w-lg text-2xl leading-snug text-fg">{venture.summary}</p>
        <div className="prose-editorial mt-6 max-w-lg">
          {venture.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid max-w-sm grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1 text-fg">{venture.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="mt-1 text-fg">{venture.status}</dd>
          </div>
        </dl>
        <Link href={`/startups/${venture.slug}/`} className="link-arrow mt-10" {...eventAttrs('project_view', { project: venture.slug })}>
          Explore {venture.name} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="md:col-span-6 lg:col-span-5">
        <ArchitectureDiagram />
      </div>
    </div>
  );
}
