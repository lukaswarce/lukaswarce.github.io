import type { Social } from '@/content/socials';
import { eventAttrs } from '@/lib/analytics';

/** Enlaces de texto a perfiles; `rel="me"` refuerza la identidad ante buscadores. */
export function SocialLinks({ items, className = '' }: { items: Social[]; className?: string }) {
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
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
