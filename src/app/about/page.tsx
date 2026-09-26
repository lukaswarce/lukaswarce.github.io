import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConnectSection } from '@/components/ConnectSection';
import { JsonLd } from '@/components/JsonLd';
import { certifications, education, experience } from '@/content/profile';
import { siteConfig } from '@/content/site';
import { pageMetadata, profilePageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Christian Spana (lukaswarce) builds technology products and startups at the intersection of artificial intelligence, software and business.',
  path: '/about/',
  type: 'profile',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd('/about/')} />
      <article className="container-page pt-12 pb-20">
        <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }]} />
        <div className="grid gap-12 md:grid-cols-12">
          <header className="md:col-span-7">
            <p className="eyebrow mb-4">{siteConfig.positioning.join(' · ')}</p>
            <h1 className="display text-6xl leading-[0.95] sm:text-7xl">{siteConfig.name}</h1>
            <div className="prose-editorial mt-10 max-w-xl">
              <p className="!text-2xl !leading-snug !text-fg">
                I&apos;m Christian Spana, known online as {siteConfig.username}.
              </p>
              <p>I build technology products and startups at the intersection of artificial intelligence, software and business.</p>
              <p>My background combines software engineering, product development, entrepreneurship and applied research.</p>
              <p>
                Right now I&apos;m building <Link href="/startups/chaucheros/" className="text-fg underline underline-offset-4">Chaucheros</Link> and
                experimenting with how AI agents and people can work together to execute tasks and goals.
              </p>
              <p>Here I document what I build, what works, what fails and what I learn along the way.</p>
            </div>
          </header>
          <figure className="md:col-span-4 md:col-start-9 md:mt-10">
            <Image
              src={siteConfig.portrait.src}
              alt={siteConfig.portrait.alt}
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
            <h2 id="journey-title" className="display text-4xl">The journey so far</h2>
            <p className="mt-5 text-fg-soft">
              More than 15 years across research, teaching, freelance work and product teams. From computer vision for
              agriculture to AI for healthcare, B2B fintech and now AI agents.
            </p>
          </div>
          <ol className="border-t border-fg md:col-span-8">
            {experience.map((r) => (
              <li key={`${r.company}-${r.period}`} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="font-mono text-xs text-muted sm:pt-2">{r.period}</span>
                <div>
                  <h3 className="display text-2xl">
                    {r.title} <span className="text-muted">·</span> <span className="text-accent">{r.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-fg-soft">
                    {r.highlights.map((h) => (
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
            <h2 id="education-title" className="display text-4xl">Education</h2>
            <p className="mt-5 text-fg-soft">Studies at institutions in Ecuador and Mexico; research and teaching in Canada.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-fg">
              {education.map((e) => (
                <li key={e.degree} className="border-b border-line py-5">
                  <p className="text-lg text-fg">{e.degree}</p>
                  <p className="text-sm text-muted">
                    {e.school}, {e.country}
                  </p>
                </li>
              ))}
              {certifications.map((c) => (
                <li key={c.name} className="border-b border-line py-5">
                  <p className="text-lg text-fg">{c.name}</p>
                  <p className="text-sm text-muted">Certification · {c.year}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-fg-soft">
              Research published between 2018 and 2020 on IoT and blockchain.{' '}
              <Link href="/research/" className="link-arrow">
                See research <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </section>
      </article>
      <ConnectSection />
    </>
  );
}
