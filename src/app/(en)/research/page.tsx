import { ResearchView, researchMetadata } from '@/views/ResearchView';

export const metadata = researchMetadata('en');

export default function ResearchPage() {
  return <ResearchView locale="en" />;
}
