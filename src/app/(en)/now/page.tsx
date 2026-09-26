import { NowView, nowMetadata } from '@/views/NowView';

export const metadata = nowMetadata('en');

export default function NowPage() {
  return <NowView locale="en" />;
}
