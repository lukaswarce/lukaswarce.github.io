import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SectionHeader } from '@/components/SectionHeader';
import { SocialLinks } from '@/components/SocialLinks';
import { siteConfig } from '@/content/site';
import { primarySocials } from '@/content/socials';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';

export const contactMetadata = (locale: Locale) => {
  const t = getDictionary(locale).contactPage;
  return pageMetadata({ locale, title: t.title, description: t.description, path: '/contact/' });
};

export function ContactView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.contactPage;
  const { email } = siteConfig.contact;
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs locale={locale} items={[{ name: t.title, path: '/contact/' }]} />
      <SectionHeader as="h1" eyebrow={t.title} title={d.connect.title} intro={d.connect.intro} />
      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <section aria-labelledby="topics-title" className="md:col-span-7">
          <h2 id="topics-title" className="eyebrow mb-4">
            {t.topics}
          </h2>
          <ul className="border-t border-fg">
            {siteConfig.contact.types[locale].map((type) => (
              <li key={type} className="border-b border-line">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(`${type} — ${t.subject}`)}`}
                  className="group flex items-center justify-between py-5"
                  data-event="contact_click"
                  data-event-topic={type}
                >
                  <span className="display text-3xl group-hover:text-accent">{type}</span>
                  <span aria-hidden="true" className="text-muted group-hover:text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <aside className="md:col-span-4 md:col-start-9">
          <h2 className="eyebrow mb-4">{t.email}</h2>
          <a
            href={`mailto:${email}`}
            className="display text-2xl break-all underline decoration-line underline-offset-8 hover:decoration-accent"
            data-event="contact_click"
            data-event-topic="direct"
          >
            {email}
          </a>
          <h2 className="eyebrow mt-12 mb-4">{t.profiles}</h2>
          <SocialLinks items={primarySocials} locale={locale} />
        </aside>
      </div>
    </div>
  );
}
