/** @type {import('next').NextConfig} */

const { ASSET_PREFIX, NODE_ENV } = process.env;
const localDevelopment = (NODE_ENV || '').toLocaleLowerCase().includes('local');
const assetPrefix = localDevelopment ? '' : ASSET_PREFIX;

const nextConfig = {
  output: 'export',
  // Preset for assets when stored on s3 bucket
  assetPrefix,
  images: {
    // To use opimized images you need to use custom loader as describer here:
    // https://github.com/vercel/next.js/discussions/19065
    unoptimized: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
