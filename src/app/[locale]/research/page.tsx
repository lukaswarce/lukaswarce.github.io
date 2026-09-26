import type { Locale } from '@/i18n/config';
import { ResearchView, researchMetadata } from '@/views/ResearchView';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return researchMetadata((await params).locale as Locale);
}

export default async function ResearchPage({ params }: Props) {
  return <ResearchView locale={(await params).locale as Locale} />;
}
