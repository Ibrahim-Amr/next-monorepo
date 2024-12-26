/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? '/home-static'
      : undefined,
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@repo/ui'],
  },
};

export default nextConfig;
