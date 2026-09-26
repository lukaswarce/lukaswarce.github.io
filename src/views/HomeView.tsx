import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ProjectPreview } from '@/components/ProjectPreview';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { BuildingFeed } from '@/components/BuildingFeed';
import { ResearchPreview } from '@/components/ResearchPreview';
import { FounderDashboard } from '@/components/FounderDashboard';
import { ConnectSection } from '@/components/ConnectSection';
import { SocialLinks } from '@/components/SocialLinks';
import { JsonLd } from '@/components/JsonLd';
import { ventures } from '@/content/ventures';
import { buildingUpdates } from '@/content/journal';
import { workAreas } from '@/content/profile';
import { siteConfig } from '@/content/site';
import { socialSocials, getSocials } from '@/content/socials';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata, profilePageJsonLd } from '@/lib/seo';

export const homeMetadata = (locale: Locale) => pageMetadata({ locale, path: '/', type: 'profile' });

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  const featured = ventures.find((v) => v.featured)!;
  const others = ventures.filter((v) => v !== featured);

  return (
    <>
      <JsonLd data={profilePageJsonLd('/', locale)} />
      <Hero locale={locale} />

      <section aria-labelledby="building-title" className="container-page py-20">
        <p className="eyebrow mb-4">{t.nowEyebrow}</p>
        <h2 id="building-title" className="display mb-12 text-4xl sm:text-5xl">
          {t.building}
        </h2>
        <ProjectPreview venture={featured} locale={locale} />
      </section>

      <section aria-labelledby="work-title" className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">{t.focusEyebrow}</p>
            <h2 id="work-title" className="display text-4xl sm:text-5xl">
              {t.workTitle}
            </h2>
            <p className="mt-6 max-w-xs text-fg-soft">{siteConfig.mission[locale]}</p>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 md:col-span-8">
            {workAreas.map((a, i) => (
              <div key={a.title.en} className="border-t border-line py-7">
                <dt className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="display text-2xl">{a.title[locale]}</span>
                </dt>
                <dd className="mt-3 pl-9 text-fg-soft">{a.text[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="ventures-title" className="container-page py-20">
        <SectionHeader
          id="ventures-title"
          eyebrow={t.venturesEyebrow}
          title={t.venturesTitle}
          intro={t.venturesIntro}
          action={
            <Link href={localePath(locale, '/startups/')} className="link-arrow">
              {getDictionary(locale).venture.all} <span aria-hidden="true">→</span>
            </Link>
          }
        />
        <ul className="mt-12 border-t border-fg">
          {others.map((v, i) => (
            <ProjectCard key={v.slug} venture={v} index={i} locale={locale} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="public-title" className="border-y border-line bg-bg-soft">
        <div className="container-page grid gap-14 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">{t.logEyebrow}</p>
            <h2 id="public-title" className="display text-5xl leading-[1] sm:text-6xl">
              {t.logTitle}
            </h2>
            <p className="mt-6 max-w-sm text-lg text-fg-soft">{t.logIntro}</p>
            <Link href={localePath(locale, '/now/')} className="link-arrow mt-8">
              {t.logLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <BuildingFeed updates={buildingUpdates.slice(0, 5)} locale={locale} />
          </div>
        </div>
      </section>

      <ResearchPreview locale={locale} />

      <section aria-labelledby="dashboard-title" className="container-page pb-24">
        <p className="eyebrow mb-4">{t.dashEyebrow}</p>
        <h2 id="dashboard-title" className="display mb-10 text-4xl sm:text-5xl">
          {t.dashTitle}
        </h2>
        <FounderDashboard locale={locale} />
      </section>

      <section aria-labelledby="life-title" className="container-page grid gap-10 border-t border-line py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">{t.lifeEyebrow}</p>
          <h2 id="life-title" className="display text-4xl sm:text-5xl">
            {t.lifeTitle}
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="max-w-xl text-lg text-fg-soft">{t.lifeText}</p>
          <SocialLinks items={socialSocials} locale={locale} className="mt-8" />
          <p className="mt-10 text-sm text-muted">
            {t.longForm}{' '}
            <a href={getSocials('substack')[0].url} rel="me noopener" className="underline underline-offset-4 hover:text-fg">
              Substack
            </a>
            .
          </p>
        </div>
      </section>

      <ConnectSection locale={locale} />
    </>
  );
}
