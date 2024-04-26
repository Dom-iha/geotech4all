/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
