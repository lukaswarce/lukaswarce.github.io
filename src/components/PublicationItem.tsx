import type { Publication } from '@/content/research';
import { siteConfig } from '@/content/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';

/**
 * Publicación con autores tal como figuran; el nombre histórico se resalta.
 * Título, autores y venue no se traducen. `lang="en"` evita que un lector de
 * pantalla lea el título en inglés con voz en español.
 */
export function PublicationItem({ pub, locale, detailed = false }: { pub: Publication; locale: Locale; detailed?: boolean }) {
  const t = getDictionary(locale);
  const newTab = <span className="sr-only">{t.common.newTab}</span>;
  return (
    <li className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-6">
      <div className="font-mono text-xs text-muted md:col-span-2">
        <span className="block text-sm text-fg">{pub.year}</span>
        <span>{t.pubType[pub.type]}</span>
      </div>
      <div className="md:col-span-10">
        <h3 className="display text-2xl leading-tight sm:text-[1.7rem]" lang="en">
          <a href={pub.url} target="_blank" rel="noopener" className="hover:text-accent" {...eventAttrs('research_click', { publication: pub.slug })}>
            {pub.title}
            {newTab}
          </a>
        </h3>
        <p className="mt-2 text-sm text-fg-soft">
          {pub.authors.map((a, i) => (
            <span key={a}>
              {i > 0 && ', '}
              {a === siteConfig.academicName ? <strong className="font-semibold text-fg">{a}</strong> : a}
            </span>
          ))}
        </p>
        <p className="mt-1 text-sm italic text-muted" lang="en">
          {pub.venue}
          {pub.pages && `, ${t.research.pages} ${pub.pages}`}
        </p>
        {detailed && pub.summary && <p className="mt-4 max-w-3xl text-fg-soft">{pub.summary[locale]}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {pub.doi && (
            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener" className="link-arrow" {...eventAttrs('research_click', { doi: pub.doi })}>
              DOI {pub.doi}
              {newTab}
            </a>
          )}
          {pub.arxiv && (
            <a href={`https://arxiv.org/abs/${pub.arxiv}`} target="_blank" rel="noopener" className="link-arrow" {...eventAttrs('research_click', { arxiv: pub.arxiv })}>
              arXiv:{pub.arxiv}
              {newTab}
            </a>
          )}
          {detailed && (
            <span className="flex flex-wrap gap-2">
              {pub.topics[locale].map((topic) => (
                <span key={topic} className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                  {topic}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
