/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  async redirects() {
    return [
      {
        source: '/([A-Za-z0-9]+/[A-Za-z0-9]+/[A-Za-z0-9]+)/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
