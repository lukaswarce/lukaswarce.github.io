import { ventures } from '@/content/ventures';
import { VentureView, ventureMetadata } from '@/views/VentureView';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props) {
  return ventureMetadata('en', (await params).slug);
}

export default async function VenturePage({ params }: Props) {
  return <VentureView locale="en" slug={(await params).slug} />;
}
