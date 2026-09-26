import { now } from '@/content/journal';

export function NowPreview({ compact = false }: { compact?: boolean }) {
  const items = compact ? now.items.filter((i) => i.value) : now.items;
  return (
    <dl className="divide-y divide-line border-y border-line">
      {items.map((i) => (
        <div key={i.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-5 sm:grid-cols-[11rem_1fr]">
          <dt className="eyebrow pt-1.5">{i.label}</dt>
          <dd className={`text-xl ${i.value ? 'text-fg' : 'text-muted'}`}>{i.value ?? '—'}</dd>
        </div>
      ))}
    </dl>
  );
}
