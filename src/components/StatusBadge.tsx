import type { VentureStatus } from '@/content/ventures';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

export function StatusBadge({ status, locale }: { status: VentureStatus; locale: Locale }) {
  const live = status === 'building' || status === 'current';
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-fg">
      <span aria-hidden="true" className={`size-1.5 rounded-full ${live ? 'bg-accent' : 'bg-muted'}`} />
      {getDictionary(locale).status[status]}
    </span>
  );
}
