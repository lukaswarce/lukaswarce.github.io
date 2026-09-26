import type { ReactNode } from 'react';
import { Inter, Newsreader } from 'next/font/google';
import { siteConfig } from '@/content/site';
import type { Locale } from '@/i18n/config';
import { personJsonLd } from '@/lib/seo';
import { AnalyticsListener } from './AnalyticsListener';
import { Footer } from './Footer';
import { Header } from './Header';
import { JsonLd } from './JsonLd';
import { themeScript } from './ThemeToggle';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-display-face', display: 'swap' });

/** Documento HTML común a todos los idiomas; cada layout raíz lo usa con su `lang`. */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { analytics } = siteConfig;
  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {analytics.provider === 'plausible' && (
          <script defer data-domain={analytics.domain} src="https://plausible.io/js/script.js" />
        )}
        {analytics.provider === 'umami' && (
          <script defer data-website-id={analytics.umamiWebsiteId} src="https://cloud.umami.is/script.js" />
        )}
      </head>
      <body>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <JsonLd data={personJsonLd(locale)} />
        <AnalyticsListener />
      </body>
    </html>
  );
}
