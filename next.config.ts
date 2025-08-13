import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force trailing slashes for consistent routing
  trailingSlash: true,
  
  // Output as a standalone application
  output: 'standalone',
  
  // Configure image domains if needed
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

export default nextConfig;
