import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/vaibhavkadam.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
