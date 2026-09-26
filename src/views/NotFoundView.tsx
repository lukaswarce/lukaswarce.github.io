import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <div className="container-page py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-6xl">{t.heading}</h1>
      <Link href={localePath(locale, '/')} className="link-arrow mt-10">
        <span aria-hidden="true">←</span> {t.back}
      </Link>
    </div>
  );
}
