/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { minimumCacheTTL: 60, }, // https://www.codemotion.com/magazine/frontend/optimize-next-js-for-production/
}
module.exports = nextConfig