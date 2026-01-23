/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed "output: export" to enable API routes
  // If you need static export, you'll need to handle CORS differently
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
