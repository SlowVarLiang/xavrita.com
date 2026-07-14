/** @type {import('next').NextConfig} */
const nextConfig = {
  generateEtags: false,
  optimizeCss: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
