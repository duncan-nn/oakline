import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.100.2",
    "localhost",
    "127.0.0.1",
    "olive-aardvark-768094.hostingersite.com",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olive-aardvark-768094.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;