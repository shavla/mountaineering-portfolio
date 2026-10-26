import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.200.151.24"],
  images: {
    remotePatterns: [
      { hostname: "encrypted-tbn0.gstatic.com" }
    ]
  }
};

export default nextConfig;
