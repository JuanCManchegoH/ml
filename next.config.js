/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //add unsplash and pexels image domain to next image
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'media.licdn.com'],
  },
};

module.exports = nextConfig;