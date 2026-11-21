import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/c/xARAmx5P2c7p",
        destination: "/links",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
