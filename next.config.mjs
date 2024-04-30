/**
 * @type {import('next').NextConfig}
**/

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    path: "",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
