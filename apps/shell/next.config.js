// Add proper environment variable validation
if (!process.env.HOME_URL) {
  throw new Error('HOME_URL environment variable is not defined');
}

const { HOME_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  experimental: {
    optimizePackageImports: ['@repo/ui'],
  },

  env: {
    HOME_URL: process.env.HOME_URL,
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/home-static/_next/:path*',
          destination: `${HOME_URL}/home-static/_next/:path*`,
        },
      ],
      afterFiles: [
        {
          source: '/airport-transfers',
          destination: `${HOME_URL}/airport-transfers`,
        },
        {
          source: '/flights',
          destination: `${HOME_URL}/flights`,
        },
        {
          source: '/car-rental',
          destination: `${HOME_URL}/car-rental`,
        },
        {
          source: '/e-visa',
          destination: `${HOME_URL}/e-visa`,
        },
        {
          source: '/home-static/:path*',
          destination: `${HOME_URL}/home-static/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
