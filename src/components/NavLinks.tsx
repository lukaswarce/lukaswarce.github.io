'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-7 md:flex">
      {nav.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className="text-sm text-muted transition-colors hover:text-fg aria-[current=page]:text-fg"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
