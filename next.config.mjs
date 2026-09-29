import withBundleAnalyzer from '@next/bundle-analyzer';

const isVercel = process.env.VERCEL_URL !== undefined;
const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_PATH: process.env.BASE_PATH || '',
  },
  images: {
    deviceSizes: [480, 800, 1200],
    imageSizes: [320],
  },
};

if (!isVercel) {
  nextConfig.output = 'export';
  nextConfig.basePath = process.env.BASE_PATH || '';
  nextConfig.images.loader = 'custom';
  nextConfig.images.loaderFile = './src/lib/utils/image-loader.ts';
}

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
