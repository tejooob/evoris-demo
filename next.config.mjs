/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation: emit fully pre-rendered HTML into ./out
  output: 'export',
  // next/image optimization needs a server; disable it for a static export
  images: { unoptimized: true },
  // emit /path/index.html so static hosts serve clean URLs
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
