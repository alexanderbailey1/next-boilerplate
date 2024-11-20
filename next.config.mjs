/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
