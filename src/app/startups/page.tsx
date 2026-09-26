import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectPreview } from '@/components/ProjectPreview';
import { SectionHeader } from '@/components/SectionHeader';
import { ventures } from '@/content/ventures';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Startups',
  description: 'Startups and products by Christian Spana (lukaswarce): what he is building now and the companies he has led or engineered.',
  path: '/startups/',
});

export default function StartupsPage() {
  const featured = ventures.find((v) => v.featured)!;
  const others = ventures.filter((v) => v !== featured);
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Startups', path: '/startups/' }]} />
      <SectionHeader as="h1" eyebrow="Startups" title="What I'm building" intro="Building startups and AI products from Latin America to the world." />
      <section aria-labelledby="current-title" className="mt-20">
        <h2 id="current-title" className="eyebrow mb-6">
          Currently building
        </h2>
        <ProjectPreview venture={featured} />
      </section>
      <section aria-labelledby="selected-title" className="mt-28">
        <h2 id="selected-title" className="display text-4xl sm:text-5xl">
          Selected ventures
        </h2>
        <p className="mt-4 max-w-xl text-fg-soft">Roles and periods as they appear on my résumé.</p>
        <ul className="mt-10 border-t border-fg">
          {others.map((v, i) => (
            <ProjectCard key={v.slug} venture={v} index={i} />
          ))}
        </ul>
      </section>
    </div>
  );
}
