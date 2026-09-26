import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavigation } from './MobileNavigation';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

// Sin backdrop-filter: haría que el menú móvil (position: fixed) quedara relativo a la cabecera.
export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).common;
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
        {t.skip}
      </a>
      <div className="container-page flex h-[60px] items-center justify-between gap-4 lg:gap-6">
        <Link
          href={localePath(locale, '/')}
          className="font-mono text-[0.95rem] font-semibold tracking-tight"
          aria-label={`${siteConfig.username}, ${t.homeLabel}`}
        >
          {siteConfig.username}
        </Link>
        <nav aria-label={t.mainNav} className="flex items-center gap-7">
          <NavLinks locale={locale} />
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={localePath(locale, '/contact/')}
            className="btn btn-primary hidden !py-2 lg:inline-flex"
            {...eventAttrs('cta_click', { cta: 'header_connect' })}
          >
            {t.connect}
          </Link>
          <LanguageSwitcher locale={locale} label={t.language} />
          <ThemeToggle labels={{ light: t.themeLight, dark: t.themeDark }} />
          <MobileNavigation locale={locale} labels={{ open: t.openMenu, close: t.closeMenu, nav: t.mobileNav, connect: t.connect }} />
        </div>
      </div>
    </header>
  );
}
