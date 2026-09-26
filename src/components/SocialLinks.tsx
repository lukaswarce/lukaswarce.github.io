import type { Social } from '@/content/socials';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/ui';
import { eventAttrs } from '@/lib/analytics';

/** Enlaces de texto a perfiles; `rel="me"` refuerza la identidad ante buscadores. */
export function SocialLinks({ items, locale, className = '' }: { items: Social[]; locale: Locale; className?: string }) {
  const t = getDictionary(locale);
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {items.map((s) => (
        <li key={s.key}>
          <a
            href={s.url}
            rel="me noopener"
            target="_blank"
            className="text-sm text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
            {...eventAttrs(s.group === 'research' || s.key === 'scholar' ? 'research_click' : 'social_click', { profile: s.key })}
          >
            {s.label}
            <span className="sr-only">{t.common.newTab}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
