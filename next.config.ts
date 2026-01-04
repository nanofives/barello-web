import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  // Sin basePath porque usaremos dominio personalizado
};

export default nextConfig;
