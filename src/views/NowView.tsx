import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BuildingFeed } from '@/components/BuildingFeed';
import { FounderDashboard } from '@/components/FounderDashboard';
import { NowPreview } from '@/components/NowPreview';
import { SectionHeader } from '@/components/SectionHeader';
import { buildingUpdates, now } from '@/content/journal';
import { formatDate, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';

export const nowMetadata = (locale: Locale) => {
  const t = getDictionary(locale).nowPage;
  return pageMetadata({ locale, title: t.title, description: t.description, path: '/now/' });
};

export function NowView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.nowPage;
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs locale={locale} items={[{ name: t.title, path: '/now/' }]} />
      <SectionHeader as="h1" eyebrow={`${t.updated} ${formatDate(now.updatedAt, locale)}`} title={t.title} intro={t.intro} />
      <div className="mt-14 max-w-3xl">
        <NowPreview locale={locale} />
      </div>
      <section aria-labelledby="dash-title" className="mt-24">
        <h2 id="dash-title" className="display mb-8 text-4xl">
          {d.home.dashTitle}
        </h2>
        <FounderDashboard locale={locale} />
      </section>
      <section aria-labelledby="log-title" className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="log-title" className="display text-4xl">
            {d.home.logTitle}
          </h2>
          <p className="mt-4 text-fg-soft">{d.home.logIntro}</p>
        </div>
        <div className="md:col-span-8">
          <BuildingFeed updates={buildingUpdates} locale={locale} />
        </div>
      </section>
    </div>
  );
}
