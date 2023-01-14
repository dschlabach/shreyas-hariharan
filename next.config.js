/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  async redirects() {
    return [
      {
        // source: '/(/[a-zA-Z]+/[a-zA-Z]+/[a-zA-Z]/)/:slug',
        source: '/([A-Za-z0-9]+/[A-Za-z0-9]+/[A-Za-z0-9]+)/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
