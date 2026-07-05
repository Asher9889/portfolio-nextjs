import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Matches all paths under the domain
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**', // Matches all paths under the domain
      },
    ],
  },
  "allowedDevOrigins": ['172.20.10.4'],
};

export default nextConfig;
