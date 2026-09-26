import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConnectSection } from '@/components/ConnectSection';
import { JsonLd } from '@/components/JsonLd';
import { certifications, education, experience } from '@/content/profile';
import { siteConfig } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata, profilePageJsonLd } from '@/lib/seo';

export const aboutMetadata = (locale: Locale) => {
  const t = getDictionary(locale).about;
  return pageMetadata({ locale, title: t.title, description: t.description, path: '/about/', type: 'profile' });
};

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;
  return (
    <>
      <JsonLd data={profilePageJsonLd('/about/', locale)} />
      <article className="container-page pt-12 pb-20">
        <Breadcrumbs locale={locale} items={[{ name: t.title, path: '/about/' }]} />
        <div className="grid gap-12 md:grid-cols-12">
          <header className="md:col-span-7">
            <p className="eyebrow mb-4">{siteConfig.positioning[locale].join(' · ')}</p>
            <h1 className="display text-6xl leading-[0.95] sm:text-7xl">{siteConfig.name}</h1>
            <div className="prose-editorial mt-10 max-w-xl">
              <p className="!text-2xl !leading-snug !text-fg">{t.intro(siteConfig.name, siteConfig.username)}</p>
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>
                {t.p3a}{' '}
                <Link href={localePath(locale, '/startups/chaucheros/')} className="text-fg underline underline-offset-4">
                  Chaucheros
                </Link>{' '}
                {t.p3b}
              </p>
              <p>{t.p4}</p>
            </div>
          </header>
          <figure className="md:col-span-4 md:col-start-9 md:mt-10">
            <Image
              src={siteConfig.portrait.src}
              alt={siteConfig.portrait.alt[locale]}
              width={siteConfig.portrait.width}
              height={siteConfig.portrait.height}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[4/5] w-full rounded-sm object-cover object-[50%_30%]"
              priority
            />
          </figure>
        </div>

        <section aria-labelledby="journey-title" className="mt-28 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="journey-title" className="display text-4xl">{t.journey}</h2>
            <p className="mt-5 text-fg-soft">{t.journeyText}</p>
          </div>
          <ol className="border-t border-fg md:col-span-8">
            {experience.map((r) => (
              <li key={`${r.company}-${r.period.en}`} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="font-mono text-xs text-muted sm:pt-2">{r.period[locale]}</span>
                <div>
                  <h3 className="display text-2xl">
                    {r.title} <span className="text-muted">·</span> <span className="text-accent">{r.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-fg-soft">
                    {r.highlights[locale].map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="education-title" className="mt-24 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="education-title" className="display text-4xl">{t.education}</h2>
            <p className="mt-5 text-fg-soft">{t.educationText}</p>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-fg">
              {education.map((e) => (
                <li key={e.degree.en} className="border-b border-line py-5">
                  <p className="text-lg text-fg">{e.degree[locale]}</p>
                  <p className="text-sm text-muted">
                    {e.school}, {e.country[locale]}
                  </p>
                </li>
              ))}
              {certifications.map((c) => (
                <li key={c.name} className="border-b border-line py-5">
                  <p className="text-lg text-fg">{c.name}</p>
                  <p className="text-sm text-muted">
                    {t.certification} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-fg-soft">
              {t.researchText}{' '}
              <Link href={localePath(locale, '/research/')} className="link-arrow">
                {t.seeResearch} <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </section>
      </article>
      <ConnectSection locale={locale} />
    </>
  );
}
