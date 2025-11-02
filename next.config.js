/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { minimumCacheTTL: 60, }, // https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/
  experimental: { webpackMemoryOptimizations: true,}, // https://nextjs.org/docs/app/guides/memory-usage
}
module.exports = nextConfig