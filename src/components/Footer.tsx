import Link from 'next/link';
import { nav, siteConfig } from '@/content/site';
import { socials } from '@/content/socials';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { SocialLinks } from './SocialLinks';

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const links = [...nav.map((n) => ({ label: n.label[locale], path: n.path })), { label: t.common.contact, path: '/contact/' }];
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <p className="display text-2xl">{siteConfig.name}</p>
          <p className="mt-1 font-mono text-sm text-muted">{siteConfig.handle}</p>
          <p className="mt-5 max-w-xs text-sm text-fg-soft">{siteConfig.tagline[locale]}</p>
        </div>
        <nav aria-label={t.common.footerNav}>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.path}>
                <Link href={localePath(locale, l.path)} className="text-muted hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-3">{t.common.elsewhere}</p>
          <SocialLinks items={socials} locale={locale} />
        </div>
      </div>
      <div className="container-page flex flex-wrap justify-between gap-2 border-t border-line py-6 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.handle}
        </p>
        <p>lukaswarce.com</p>
      </div>
    </footer>
  );
}
