import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  // Temporarily removed Payload CMS specific configurations
  // experimental: {
  //   serverComponentsExternalPackages: ['payload'],
  // },
  // webpack: (config) => {
  //   config.externals.push('@payloadcms/db-mongodb');
  //   return config;
  // },
};

export default nextConfig;
