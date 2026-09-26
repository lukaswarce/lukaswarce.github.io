import type { VentureStatus } from '@/content/ventures';

export function StatusBadge({ status }: { status: VentureStatus }) {
  const live = status === 'Building' || status === 'Current role';
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-fg">
      <span aria-hidden="true" className={`size-1.5 rounded-full ${live ? 'bg-accent' : 'bg-muted'}`} />
      {status}
    </span>
  );
}
