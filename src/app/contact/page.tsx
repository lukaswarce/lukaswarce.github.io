import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeader } from '@/components/SectionHeader';
import { SocialLinks } from '@/components/SocialLinks';
import { siteConfig } from '@/content/site';
import { primarySocials } from '@/content/socials';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Christian Spana (lukaswarce) about business, startups, research, media and collaborations.',
  path: '/contact/',
});

export default function ContactPage() {
  const { email, types } = siteConfig.contact;
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]} />
      <SectionHeader
        as="h1"
        eyebrow="Contact"
        title="Let's build something interesting."
        intro="I'm always interested in meeting founders, builders, researchers and people working on ambitious ideas."
      />
      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <section aria-labelledby="topics-title" className="md:col-span-7">
          <h2 id="topics-title" className="eyebrow mb-4">
            What is it about?
          </h2>
          <ul className="border-t border-fg">
            {types.map((t) => (
              <li key={t} className="border-b border-line">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(`${t} — hello from lukaswarce.com`)}`}
                  className="group flex items-center justify-between py-5"
                  data-event="contact_click"
                  data-event-topic={t}
                >
                  <span className="display text-3xl group-hover:text-accent">{t}</span>
                  <span aria-hidden="true" className="text-muted group-hover:text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <aside className="md:col-span-4 md:col-start-9">
          <h2 className="eyebrow mb-4">Email</h2>
          <a href={`mailto:${email}`} className="display text-2xl break-all underline decoration-line underline-offset-8 hover:decoration-accent" data-event="contact_click" data-event-topic="direct">
            {email}
          </a>
          <h2 className="eyebrow mt-12 mb-4">Profiles</h2>
          <SocialLinks items={primarySocials} />
        </aside>
      </div>
    </div>
  );
}
