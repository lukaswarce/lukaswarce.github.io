import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectPreview } from '@/components/ProjectPreview';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/content/site';
import { ventures } from '@/content/ventures';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';

export const startupsMetadata = (locale: Locale) => {
  const t = getDictionary(locale).startupsPage;
  return pageMetadata({ locale, title: t.title, description: t.description, path: '/startups/' });
};

export function StartupsView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.startupsPage;
  const featured = ventures.find((v) => v.featured)!;
  const others = ventures.filter((v) => v !== featured);
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs locale={locale} items={[{ name: t.title, path: '/startups/' }]} />
      <SectionHeader as="h1" eyebrow={t.title} title={t.heading} intro={siteConfig.mission[locale]} />
      <section aria-labelledby="current-title" className="mt-20">
        <h2 id="current-title" className="eyebrow mb-6">
          {d.home.building}
        </h2>
        <ProjectPreview venture={featured} locale={locale} />
      </section>
      <section aria-labelledby="selected-title" className="mt-28">
        <h2 id="selected-title" className="display text-4xl sm:text-5xl">
          {d.home.venturesTitle}
        </h2>
        <p className="mt-4 max-w-xl text-fg-soft">{t.resume}</p>
        <ul className="mt-10 border-t border-fg">
          {others.map((v, i) => (
            <ProjectCard key={v.slug} venture={v} index={i} locale={locale} />
          ))}
        </ul>
      </section>
    </div>
  );
}
