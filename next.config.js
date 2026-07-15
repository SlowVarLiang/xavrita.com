/** @type {import('next').NextConfig} */
const nextConfig = {
  generateEtags: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
