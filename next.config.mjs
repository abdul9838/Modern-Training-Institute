/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // add images patterns for next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'modernskill.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
