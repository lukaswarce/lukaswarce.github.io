import Link from 'next/link';
import { readingTime, type Article } from '@/content/journal';
import { formatDate, localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';

export function ArticlePreview({ article, locale }: { article: Article; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <li className="border-b border-line">
      <Link href={localePath(article.locale, `/writing/${article.slug}/`)} className="group grid gap-2 py-7 md:grid-cols-12 md:gap-6">
        <span className="font-mono text-xs text-muted md:col-span-2">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
        </span>
        <span className="md:col-span-8">
          <span className="display block text-2xl group-hover:text-accent">{article.title}</span>
          <span className="mt-2 block text-fg-soft">{article.description}</span>
        </span>
        <span className="font-mono text-xs text-muted md:col-span-2 md:text-right">
          {t.articleCategory[article.category]} · {readingTime(article)} min
        </span>
      </Link>
    </li>
  );
}
