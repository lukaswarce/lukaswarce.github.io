import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from './JsonLd';

/** Migas de pan. `items` no incluye Inicio y usa rutas sin prefijo de idioma. */
export function Breadcrumbs({ locale, items }: { locale: Locale; items: { name: string; path: string }[] }) {
  const t = getDictionary(locale);
  const all = [{ name: t.common.home, path: '/' }, ...items].map((it) => ({ ...it, path: localePath(locale, it.path) }));
  return (
    <>
      <nav aria-label={t.common.breadcrumb} className="mb-10 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-fg">
                  {it.name}
                </span>
              ) : (
                <Link href={it.path} className="hover:text-fg">
                  {it.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
