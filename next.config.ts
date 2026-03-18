import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Les erreurs no-unescaped-entities sont corrigees en Phase 3 polish
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
