import { now } from '@/content/journal';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

export function NowPreview({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = getDictionary(locale);
  const items = compact ? now.items.filter((i) => i.value) : now.items;
  return (
    <dl className="divide-y divide-line border-y border-line">
      {items.map((i) => (
        <div key={i.key} className="grid grid-cols-[8.5rem_1fr] gap-4 py-5 sm:grid-cols-[11rem_1fr]">
          <dt className="eyebrow pt-1.5">{t.now[i.key]}</dt>
          <dd className={`text-xl ${i.value ? 'text-fg' : 'text-muted'}`}>{i.value?.[locale] ?? '—'}</dd>
        </div>
      ))}
    </dl>
  );
}
