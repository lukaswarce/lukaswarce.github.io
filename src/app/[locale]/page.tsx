import type { Locale } from '@/i18n/config';
import { HomeView, homeMetadata } from '@/views/HomeView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return homeMetadata((await params).locale as Locale);
}

export default async function HomePage({ params }: Props) {
  return <HomeView locale={(await params).locale as Locale} />;
}
