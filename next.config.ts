import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Sin basePath porque usaremos dominio personalizado
};

export default nextConfig;
