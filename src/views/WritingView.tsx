import { ArticlePreview } from '@/components/ArticlePreview';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeader } from '@/components/SectionHeader';
import { articleCategories, publishedArticles } from '@/content/journal';
import { getSocials } from '@/content/socials';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';

export const writingMetadata = (locale: Locale) => {
  const t = getDictionary(locale).writingPage;
  return pageMetadata({ locale, title: t.title, description: t.description, path: '/writing/' });
};

export function WritingView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.writingPage;
  const articles = publishedArticles(locale);
  const substack = getSocials('substack')[0];
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs locale={locale} items={[{ name: t.title, path: '/writing/' }]} />
      <SectionHeader as="h1" eyebrow={t.title} title={t.heading} />
      <ul aria-label={t.topics} className="mt-10 flex flex-wrap gap-2">
        {articleCategories.map((c) => (
          <li key={c} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
            {d.articleCategory[c]}
          </li>
        ))}
      </ul>
      {articles.length ? (
        <ul className="mt-12 border-t border-fg">
          {articles.map((a) => (
            <ArticlePreview key={a.slug} article={a} locale={locale} />
          ))}
        </ul>
      ) : (
        <div className="mt-12 border-t border-fg pt-10">
          <p className="max-w-xl text-lg text-fg-soft">{t.empty}</p>
          <a href={substack.url} rel="me noopener" className="btn btn-primary mt-8" data-event="social_click" data-event-profile="substack">
            {t.substack} <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
