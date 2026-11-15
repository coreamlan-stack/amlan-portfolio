/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['vgpu', '@vgpu/core', '@vgpu/wgsl', '@vgpu/wgsl-std'],
};

module.exports = nextConfig;
