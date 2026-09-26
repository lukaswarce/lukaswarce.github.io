import type { Locale } from '@/i18n/config';
import { NowView, nowMetadata } from '@/views/NowView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return nowMetadata((await params).locale as Locale);
}

export default async function NowPage({ params }: Props) {
  return <NowView locale={(await params).locale as Locale} />;
}
