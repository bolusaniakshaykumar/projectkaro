/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output is required by the OpenNext Cloudflare bundler;
  // keep it off everywhere else so Vercel builds behave exactly as before.
  ...(process.env.WORKERS_CI === "1" ? { output: "standalone" } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  async headers() {
    return [
      {
        // Long-lived immutable cache for versioned/static site assets
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

// Local `next dev` Cloudflare emulation only; never runs in production builds
// (Vercel, Cloudflare) so it cannot interfere with them.
if (process.env.NODE_ENV !== "production") {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
