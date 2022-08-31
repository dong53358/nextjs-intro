/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const BASE = "api.themoviedb.org/3/";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://${BASE}movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
