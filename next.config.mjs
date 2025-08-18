/**
 * @type {import('next').NextConfig}
 **/

import withBundleAnalyzer from '@next/bundle-analyzer';

const isVercel = process.env.VERCEL_URL !== undefined;
const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
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

if (!isVercel) {
  nextConfig.images.loader = 'akamai';
  nextConfig.images.path = '';
  nextConfig.images.unoptimized = true;
}

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
