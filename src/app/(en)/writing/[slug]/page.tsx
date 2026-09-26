import { articleParams, ArticleView, articleMetadata } from '@/views/ArticleView';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams('en');
}

export async function generateMetadata({ params }: Props) {
  return articleMetadata('en', (await params).slug);
}

export default async function ArticlePage({ params }: Props) {
  return <ArticleView locale="en" slug={(await params).slug} />;
}
