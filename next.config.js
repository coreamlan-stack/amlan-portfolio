/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['vgpu', '@vgpu/core', '@vgpu/wgsl', '@vgpu/wgsl-std'],
};

module.exports = nextConfig;
