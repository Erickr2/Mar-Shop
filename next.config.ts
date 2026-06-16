import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devtools: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default nextConfig;
