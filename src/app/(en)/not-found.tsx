import { NotFoundView } from '@/views/NotFoundView';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return <NotFoundView locale="en" />;
}
