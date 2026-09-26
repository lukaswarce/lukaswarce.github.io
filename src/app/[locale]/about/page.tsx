import type { Locale } from '@/i18n/config';
import { AboutView, aboutMetadata } from '@/views/AboutView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return aboutMetadata((await params).locale as Locale);
}

export default async function AboutPage({ params }: Props) {
  return <AboutView locale={(await params).locale as Locale} />;
}
