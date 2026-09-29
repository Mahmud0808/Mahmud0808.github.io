import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="lost">
      <h1>404</h1>
      <p>This page doesn’t exist. It may have moved, or the link has a typo.</p>
      <Link className="btn primary" href="/">
        Back to the home page
      </Link>
    </main>
  );
}
