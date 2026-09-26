'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';

type Labels = { open: string; close: string; nav: string; connect: string };

export function MobileNavigation({ locale, labels }: { locale: Locale; labels: Labels }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="grid size-9 place-items-center rounded-full border border-line"
      >
        <span className="sr-only">{open ? labels.close : labels.open}</span>
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>
      <nav
        id={id}
        aria-label={labels.nav}
        hidden={!open}
        className="fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-5 pt-8 pb-12"
      >
        <ul className="flex flex-col">
          {nav.map((item) => {
            const href = localePath(locale, item.path);
            return (
              <li key={item.path} className="border-b border-line">
                <Link
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  className="display block py-4 text-3xl aria-[current=page]:text-accent"
                >
                  {item.label[locale]}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={localePath(locale, '/contact/')} className="btn btn-primary mt-8">
          {labels.connect} <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  );
}
