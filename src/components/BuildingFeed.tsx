import type { BuildingUpdate } from '@/content/journal';

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Registro cronológico del fundador. */
export function BuildingFeed({ updates }: { updates: BuildingUpdate[] }) {
  if (!updates.length) {
    return <p className="text-muted">The first entries of the log are on their way.</p>;
  }
  return (
    <ol className="relative border-l border-line/80">
      {updates.map((u) => (
        <li key={`${u.date}-${u.update}`} className="relative pb-10 pl-8 last:pb-0">
          <span aria-hidden="true" className="absolute top-2 -left-[5px] size-[9px] rounded-full border-2 border-bg-soft bg-accent" />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
            <time dateTime={u.date}>{fmt(u.date)}</time>
            <span className="text-fg">{u.project}</span>
            <span className="rounded-full border border-line px-2 py-0.5">{u.category}</span>
          </div>
          <p className="mt-3 max-w-xl text-lg text-fg">{u.update}</p>
          {u.link && (
            <a href={u.link.url} className="link-arrow mt-3 text-sm">
              {u.link.label} <span aria-hidden="true">→</span>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}
