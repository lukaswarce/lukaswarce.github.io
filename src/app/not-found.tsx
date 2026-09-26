import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <div className="container-page py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-6xl">This page doesn&apos;t exist.</h1>
      <Link href="/" className="link-arrow mt-10">
        <span aria-hidden="true">←</span> Back home
      </Link>
    </div>
  );
}
