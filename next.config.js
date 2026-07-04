/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
