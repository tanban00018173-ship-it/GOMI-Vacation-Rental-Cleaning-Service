/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export' 以支援 Vercel 部署
  basePath: process.env.NODE_ENV === 'production' ? '/GOMI-Vacation-Rental-Cleaning-Service' : '',
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
