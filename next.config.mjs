/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Build error suppression (already had these) ──────────────────────────
  typescript: { ignoreBuildErrors: true },
  eslint:     { ignoreDuringBuilds: true },

  // ── Tree-shake heavy packages on every import ────────────────────────────
  // Prevents full bundle load of framer-motion, lucide-react, date-fns etc.
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      'date-fns',
      'lodash',
      '@emailjs/browser',
    ],
  },

  // ── Tell webpack to skip the ghost node_modules folders ──────────────────
  webpack(config) {
    // Prevent Next.js from resolving into the duplicate folders
    config.resolve.modules = [
      'node_modules',   // only the real one
    ];
    return config;
  },

  // ── Reduce console noise & image domains ─────────────────────────────────
  images: {
    remotePatterns: [],
  },

  // ── Compress responses in production ─────────────────────────────────────
  compress: true,

  // ── Power-user: only scan these extensions (skip .mjs etc.) ─────────────
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
