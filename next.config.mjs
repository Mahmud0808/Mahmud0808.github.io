/**
 * @type {import('next').NextConfig}
 **/

import withBundleAnalyzer from '@next/bundle-analyzer';

const isVercel = process.env.VERCEL_URL !== undefined;
const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
    ],
  },
};

if (isVercel) {
  // Server build on Vercel: keep the Next Image Optimization API enabled
  // (on-the-fly resize, format negotiation, responsive srcset).
} else {
  // Static export for GitHub Pages: no server, so the optimizer cannot run.
  // Ship pre-sized images and serve them unoptimized.
  nextConfig.output = 'export';
  nextConfig.images.unoptimized = true;
}

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
