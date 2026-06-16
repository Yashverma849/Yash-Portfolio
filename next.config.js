/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed "output: export" to enable API routes
  // If you need static export, you'll need to handle CORS differently
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
