/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'jonathanvargas0111.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'appatico.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'felipevargas.vercel.app',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
