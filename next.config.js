/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    images: {
        deviceSizes: [320, 768, 1440],
        unoptimized: true
    }
}

module.exports = nextConfig