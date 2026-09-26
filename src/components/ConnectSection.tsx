import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';

export function ConnectSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="connect-title" className="bg-fg text-bg">
      <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <h2 id="connect-title" className="font-display text-5xl leading-[1] tracking-[-0.03em] sm:text-7xl">
            {t.connect.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg opacity-80">{t.connect.intro}</p>
          <Link
            href={localePath(locale, '/contact/')}
            className="btn mt-10 bg-bg text-fg hover:bg-accent hover:text-accent-fg"
            {...eventAttrs('cta_click', { cta: 'connect_section' })}
          >
            {t.connect.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="self-end font-mono text-sm md:col-span-4">
          {siteConfig.contact.types[locale].map((type) => (
            <li key={type} className="border-b border-bg/20 py-3 opacity-90">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
