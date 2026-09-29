import type { MetadataRoute } from 'next';

import { author, seo } from '@/lib/content/portfolio';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: author.name,
    short_name: author.shortName,
    description: seo.description,
    start_url: '/',
    display: 'browser',
    background_color: '#051316',
    theme_color: '#051316',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
