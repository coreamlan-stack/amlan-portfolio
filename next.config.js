/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['vgpu', '@vgpu/core', '@vgpu/wgsl', '@vgpu/wgsl-std'],
};

module.exports = nextConfig;
