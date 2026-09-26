import { StartupsView, startupsMetadata } from '@/views/StartupsView';

export const metadata = startupsMetadata('en');

export default function StartupsPage() {
  return <StartupsView locale="en" />;
}
