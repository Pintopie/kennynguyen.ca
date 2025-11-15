import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
};

export default nextConfig;
