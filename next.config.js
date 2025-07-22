/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other Next.js config
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;

