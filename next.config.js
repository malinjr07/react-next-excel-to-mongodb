/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sstorage.clearance.ae',
      },
    ],
  },
};

module.exports = nextConfig;

