'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';

export function NavLinks({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? '/';
  return (
    <ul className="hidden items-center gap-7 md:flex">
      {nav.map((item) => {
        const href = localePath(locale, item.path);
        const active = pathname.startsWith(href);
        return (
          <li key={item.path}>
            <Link
              href={href}
              aria-current={active ? 'page' : undefined}
              className="text-sm text-muted transition-colors hover:text-fg aria-[current=page]:text-fg"
            >
              {item.label[locale]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
