/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.cache = false; // Disable cache
    return config;
  },
};

module.exports = nextConfig;
