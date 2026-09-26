import Link from 'next/link';
import { nav, siteConfig } from '@/content/site';
import { socials } from '@/content/socials';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const links = [...nav, { label: 'Contact', href: '/contact/' }];
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <p className="display text-2xl">{siteConfig.name}</p>
          <p className="mt-1 font-mono text-sm text-muted">{siteConfig.handle}</p>
          <p className="mt-5 max-w-xs text-sm text-fg-soft">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <SocialLinks items={socials} />
        </div>
      </div>
      <div className="container-page flex flex-wrap justify-between gap-2 border-t border-line py-6 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.handle}
        </p>
        <p>lukaswarce.com</p>
      </div>
    </footer>
  );
}
