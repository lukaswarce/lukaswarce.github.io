import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import { absoluteUrl, siteConfig } from '@/content/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { AnalyticsListener } from '@/components/AnalyticsListener';
import { themeScript } from '@/components/ThemeToggle';
import { personJsonLd } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-display-face', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: siteConfig.seo.title, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.description,
  applicationName: `${siteConfig.name} (${siteConfig.username})`,
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  alternates: { canonical: absoluteUrl('/') },
  robots: { index: true, follow: true, 'max-image-preview': 'large' } as Metadata['robots'],
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple: '/icons/favicon-128x128.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f5f1' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f10' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { analytics } = siteConfig;
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
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
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={personJsonLd()} />
        <AnalyticsListener />
      </body>
    </html>
  );
}
