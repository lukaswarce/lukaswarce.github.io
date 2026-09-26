import { dashboard } from '@/content/journal';

export function FounderDashboard() {
  return (
    <div>
      <dl className="grid grid-cols-2 border-t border-l border-line lg:grid-cols-4">
        {dashboard.map((d) => (
          <div key={d.area} className="border-r border-b border-line p-5 sm:p-6">
            <dt className="eyebrow">{d.area}</dt>
            <dd className="mt-6">
              <span className={`display block text-3xl sm:text-4xl ${d.value ? 'text-fg' : 'text-muted'}`}>{d.value ?? '—'}</span>
              <span className="mt-2 block text-sm text-muted">{d.label}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 font-mono text-xs text-muted">Updated periodically. Only verified metrics are published.</p>
    </div>
  );
}
