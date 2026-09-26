import type { Locale } from '@/i18n/config';
import { StartupsView, startupsMetadata } from '@/views/StartupsView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return startupsMetadata((await params).locale as Locale);
}

export default async function StartupsPage({ params }: Props) {
  return <StartupsView locale={(await params).locale as Locale} />;
}
