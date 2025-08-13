/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image domains if needed
  images: {
    domains: [],
    unoptimized: false,
  },
  // Remove output: 'standalone' as it's not compatible with Netlify
};

module.exports = nextConfig;
