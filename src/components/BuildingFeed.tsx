import type { BuildingUpdate } from '@/content/journal';
import { formatDate, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

/** Registro cronológico del fundador. */
export function BuildingFeed({ updates, locale }: { updates: BuildingUpdate[]; locale: Locale }) {
  const t = getDictionary(locale);
  if (!updates.length) {
    return <p className="text-muted">{t.feed.empty}</p>;
  }
  return (
    <ol className="relative border-l border-line/80">
      {updates.map((u) => (
        <li key={`${u.date}-${u.update.en}`} className="relative pb-10 pl-8 last:pb-0">
          <span aria-hidden="true" className="absolute top-2 -left-[5px] size-[9px] rounded-full border-2 border-bg-soft bg-accent" />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
            <time dateTime={u.date}>{formatDate(u.date, locale)}</time>
            <span className="text-fg">{u.project}</span>
            <span className="rounded-full border border-line px-2 py-0.5">{t.buildingCategory[u.category]}</span>
          </div>
          <p className="mt-3 max-w-xl text-lg text-fg">{u.update[locale]}</p>
          {u.link && (
            <a href={u.link.url} className="link-arrow mt-3 text-sm">
              {u.link.label[locale]} <span aria-hidden="true">→</span>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}
