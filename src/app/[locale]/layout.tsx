import '../globals.css';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { siteViewport } from '@/components/viewport';
import { isLocale, localizedLocales } from '@/i18n/config';
import { rootMetadata } from '@/lib/seo';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export const dynamicParams = false;
export const viewport = siteViewport;

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  return isLocale(locale) ? rootMetadata(locale) : {};
}

export default async function LocalizedLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SiteShell locale={locale}>{children}</SiteShell>;
}
