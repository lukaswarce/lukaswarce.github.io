import '../globals.css';
import { SiteShell } from '@/components/SiteShell';
import { siteViewport } from '@/components/viewport';
import { rootMetadata } from '@/lib/seo';

export const metadata = rootMetadata('en');
export const viewport = siteViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
