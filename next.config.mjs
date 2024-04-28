/**
 * @type {import('next').NextConfig}
**/

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "akamai",
    path: "",
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
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: "/",
};

export default nextConfig;
