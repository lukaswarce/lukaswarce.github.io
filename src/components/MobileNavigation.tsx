'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';

export function MobileNavigation() {
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
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>
      <nav
        id={id}
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-5 pt-8 pb-12"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="display block py-4 text-3xl aria-[current=page]:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact/" className="btn btn-primary mt-8">
          Let&apos;s connect <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  );
}
