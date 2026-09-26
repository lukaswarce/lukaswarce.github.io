import { ArticlePreview } from '@/components/ArticlePreview';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeader } from '@/components/SectionHeader';
import { articleCategories, publishedArticles } from '@/content/journal';
import { getSocials } from '@/content/socials';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Writing',
  description: 'Writing by Christian Spana (lukaswarce) on AI, startups, building in public and the future of work.',
  path: '/writing/',
});

export default function WritingPage() {
  const articles = publishedArticles();
  const substack = getSocials('substack')[0];
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Writing', path: '/writing/' }]} />
      <SectionHeader as="h1" eyebrow="Writing" title="Ideas worth documenting." />
      <ul aria-label="Topics" className="mt-10 flex flex-wrap gap-2">
        {articleCategories.map((c) => (
          <li key={c} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
            {c}
          </li>
        ))}
      </ul>
      {articles.length ? (
        <ul className="mt-12 border-t border-fg">
          {articles.map((a) => (
            <ArticlePreview key={a.slug} article={a} />
          ))}
        </ul>
      ) : (
        <div className="mt-12 border-t border-fg pt-10">
          <p className="max-w-xl text-lg text-fg-soft">
            No essays published here yet. In the meantime, I write on Substack.
          </p>
          <a href={substack.url} rel="me noopener" className="btn btn-primary mt-8" data-event="social_click" data-event-profile="substack">
            Read on Substack <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
