import { WritingView, writingMetadata } from '@/views/WritingView';

export const metadata = writingMetadata('en');

export default function WritingPage() {
  return <WritingView locale="en" />;
}
