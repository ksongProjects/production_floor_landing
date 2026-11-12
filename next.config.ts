import type { NextConfig } from "next";

// Fully static site: `next build` writes plain HTML, CSS and assets to `out/`.
// No server, no API routes, so it can be hosted for free on Vercel or any static host.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
