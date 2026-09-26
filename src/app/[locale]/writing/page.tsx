import type { Locale } from '@/i18n/config';
import { WritingView, writingMetadata } from '@/views/WritingView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return writingMetadata((await params).locale as Locale);
}

export default async function WritingPage({ params }: Props) {
  return <WritingView locale={(await params).locale as Locale} />;
}
