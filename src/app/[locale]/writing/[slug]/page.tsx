import type { Locale } from '@/i18n/config';
import { articleParams, ArticleView, articleMetadata } from '@/views/ArticleView';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return articleParams(params.locale as Locale);
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  return articleMetadata(locale as Locale, slug);
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  return <ArticleView locale={locale as Locale} slug={slug} />;
}
