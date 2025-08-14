/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GOMI-Vacation-Rental-Cleaning-Service',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
