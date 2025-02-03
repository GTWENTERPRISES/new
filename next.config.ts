/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // You might also want to include 'http' if necessary
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig