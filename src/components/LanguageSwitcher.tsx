'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeMeta, localePath, locales, stripLocale, type Locale } from '@/i18n/config';

/**
 * Selector EN · ES. Lleva a la misma página en el otro idioma. Los artículos
 * existen en un solo idioma, así que desde un artículo se va al listado.
 */
export function LanguageSwitcher({ locale, label, className = '' }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? '/';
  let path = stripLocale(pathname);
  if (/^\/writing\/[^/]+\/?$/.test(path)) path = '/writing/';
  if (!path.endsWith('/')) path += '/';

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center rounded-full border border-line p-0.5 font-mono text-[0.7rem]">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? 'true' : undefined}
              title={localeMeta[l].label}
              className="block rounded-full px-2.5 py-1.5 tracking-wider text-muted transition-colors hover:text-fg aria-[current=true]:bg-fg aria-[current=true]:text-bg"
            >
              <span aria-hidden="true">{localeMeta[l].short}</span>
              <span className="sr-only">{localeMeta[l].label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
