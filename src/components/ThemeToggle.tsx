'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/** Script en <head> que aplica el tema guardado antes de pintar, para evitar parpadeo. */
export const themeScript = `(()=>{try{const t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()`;

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(stored ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  const label = theme === 'dark' ? labels.light : labels.dark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-fg"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
        )}
      </svg>
    </button>
  );
}
