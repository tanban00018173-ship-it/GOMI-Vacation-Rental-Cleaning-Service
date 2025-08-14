/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 basePath 以確保在 Vercel 上正常工作
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
