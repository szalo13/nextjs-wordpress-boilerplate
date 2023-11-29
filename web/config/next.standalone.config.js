/**
 * NextJS Standalone Config - which could be used for AWSLambda
 * https://nextjs.org/docs/pages/api-reference/next-config-js/output
 * 
 * When using standalone upload, you need to use S3 to handle storage of the assets.
 * That's why for production 
 */
const env = process.env.NODE_ENV;
const localDevelopment = (env || '').toLocaleLowerCase().includes('local');
const { ASSET_PREFIX } = process.env;

if (!process.env.ASSET_PREFIX) throw new Error('ASSET_PREFIX is not defined'); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Standalone output for lambda build
  output: "standalone",
  // Preset for assets when stored on s3 bucket
  assetPrefix: localDevelopment ? '' : ASSET_PREFIX,
  images: {
    unoptimized: true,
  },
  // SVG Images loader config
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
