import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BuildingFeed } from '@/components/BuildingFeed';
import { FounderDashboard } from '@/components/FounderDashboard';
import { NowPreview } from '@/components/NowPreview';
import { SectionHeader } from '@/components/SectionHeader';
import { buildingUpdates, now } from '@/content/journal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Now',
  description: 'What Christian Spana (lukaswarce) is focused on right now: building Chaucheros and exploring AI agents and the future of work.',
  path: '/now/',
});

export default function NowPage() {
  return (
    <div className="container-page pt-12 pb-24">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Now', path: '/now/' }]} />
      <SectionHeader as="h1" eyebrow={`Updated ${now.updatedAt}`} title="Now" intro="What I'm focused on right now." />
      <div className="mt-14 max-w-3xl">
        <NowPreview />
      </div>
      <section aria-labelledby="dash-title" className="mt-24">
        <h2 id="dash-title" className="display mb-8 text-4xl">Founder dashboard</h2>
        <FounderDashboard />
      </section>
      <section aria-labelledby="log-title" className="mt-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="log-title" className="display text-4xl">Building in public</h2>
          <p className="mt-4 text-fg-soft">The experiments, decisions, mistakes and lessons behind building technology companies.</p>
        </div>
        <div className="md:col-span-8">
          <BuildingFeed updates={buildingUpdates} />
        </div>
      </section>
    </div>
  );
}
