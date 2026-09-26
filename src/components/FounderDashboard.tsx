import { dashboard } from '@/content/journal';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

export function FounderDashboard({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div>
      <dl className="grid grid-cols-2 border-t border-l border-line lg:grid-cols-4">
        {dashboard.map((d) => (
          <div key={d.key} className="border-r border-b border-line p-5 sm:p-6">
            <dt className="eyebrow">{t.dashboard[d.key].area}</dt>
            <dd className="mt-6">
              <span className={`display block text-3xl sm:text-4xl ${d.value ? 'text-fg' : 'text-muted'}`}>{d.value ?? '—'}</span>
              <span className="mt-2 block text-sm text-muted">{t.dashboard[d.key].label}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 font-mono text-xs text-muted">{t.dashboardNote}</p>
    </div>
  );
}
