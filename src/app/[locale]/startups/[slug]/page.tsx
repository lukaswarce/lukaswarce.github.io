import type { Locale } from '@/i18n/config';
import { ventures } from '@/content/ventures';
import { VentureView, ventureMetadata } from '@/views/VentureView';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  return ventureMetadata(locale as Locale, slug);
}

export default async function VenturePage({ params }: Props) {
  const { locale, slug } = await params;
  return <VentureView locale={locale as Locale} slug={slug} />;
}
