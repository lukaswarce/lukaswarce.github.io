import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { eventAttrs } from '@/lib/analytics';

export function ConnectSection() {
  return (
    <section aria-labelledby="connect-title" className="bg-fg text-bg">
      <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <h2 id="connect-title" className="font-display text-5xl leading-[1] tracking-[-0.03em] sm:text-7xl">
            Let&apos;s build something interesting.
          </h2>
          <p className="mt-8 max-w-xl text-lg opacity-80">
            I&apos;m always interested in meeting founders, builders, researchers and people working on ambitious ideas.
          </p>
          <Link
            href="/contact/"
            className="btn mt-10 bg-bg text-fg hover:bg-accent hover:text-accent-fg"
            {...eventAttrs('cta_click', { cta: 'connect_section' })}
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="self-end font-mono text-sm md:col-span-4">
          {siteConfig.contact.types.map((t) => (
            <li key={t} className="border-b border-bg/20 py-3 opacity-90">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
