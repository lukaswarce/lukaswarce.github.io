import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { eventAttrs } from '@/lib/analytics';
import { MobileNavigation } from './MobileNavigation';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

// Sin backdrop-filter: haría que el menú móvil (position: fixed) quedara relativo a la cabecera.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <div className="container-page flex h-[60px] items-center justify-between gap-6">
        <Link href="/" className="font-mono text-[0.95rem] font-semibold tracking-tight" aria-label={`${siteConfig.username}, home`}>
          {siteConfig.username}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact/" className="btn btn-primary hidden !py-2 sm:inline-flex" {...eventAttrs('cta_click', { cta: 'header_connect' })}>
            Let&apos;s connect
          </Link>
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
