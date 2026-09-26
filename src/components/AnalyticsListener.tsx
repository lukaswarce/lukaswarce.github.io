'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/** Envía los clics de elementos con data-event al proveedor configurado (si lo hay). */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-event]');
      if (!el) return;
      const props: Record<string, string> = {};
      for (const [k, v] of Object.entries(el.dataset)) {
        if (k.startsWith('event') && k !== 'event' && v) props[k.slice(5).toLowerCase()] = v;
      }
      track(el.dataset.event!, props);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
