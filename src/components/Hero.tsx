import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';

export function Hero({ locale }: { locale: Locale }) {
  const { portrait } = siteConfig;
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="hero-title" className="container-page grid gap-12 pt-14 pb-20 md:grid-cols-12 md:pt-20 lg:pt-28 lg:pb-28">
      <div className="reveal md:col-span-7 lg:col-span-7">
        <p className="font-mono text-sm tracking-[0.25em] text-fg">CHRISTIAN SPANA</p>
        <p className="mt-1 font-mono text-sm text-muted">{siteConfig.handle}</p>
        <h1 id="hero-title" className="display mt-10 text-[3.2rem] leading-[0.95] sm:text-7xl lg:text-[6.2rem]">
          {t.hero.before} <span className="italic text-accent">{t.hero.accent}</span>
        </h1>
        <p className="mt-8 max-w-xl text-xl text-fg-soft">{siteConfig.description[locale]}</p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">{siteConfig.positioning[locale].join(' · ')}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href={localePath(locale, '/startups/')} className="btn btn-primary" {...eventAttrs('cta_click', { cta: 'hero_explore' })}>
            {t.hero.explore} <span aria-hidden="true">→</span>
          </Link>
          <Link href={localePath(locale, '/now/')} className="btn btn-ghost" {...eventAttrs('cta_click', { cta: 'hero_follow' })}>
            {t.hero.follow}
          </Link>
        </div>
      </div>
      <figure className="reveal relative md:col-span-5 md:mt-24 lg:col-span-4 lg:col-start-9">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bg-soft">
          <Image
            src={portrait.src}
            alt={portrait.alt[locale]}
            fill
            priority
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw"
            className="object-cover object-[50%_30%] grayscale-[15%]"
          />
        </div>
        <figcaption className="mt-3 flex justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.handle}</span>
        </figcaption>
      </figure>
    </section>
  );
}
