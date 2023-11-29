# NextJS Boilerplate

## To Start
1. Install web dependencies in web folder `npm install`
2. Install wordpress remotely or localy
3. Provide `WORDPRESS_URL` env variable. Sample env file - `.env.sample`
4. Install wordpress plugins
   1. WPGraphQL
   2. SEO plugins
      1. YoastSeo
      2. WPGraphQL YoastSeo
   3. User profile picture
   4. EnableCORS - for local development
   5. Advanced Custom Fields - PLugins
      1. Advanced Custom Fields
      2. WPGraphQL for Advanced Custom Fields
5. Block automatic updates for WordPress
6. To store all assets on external S3 instead on WordPress server
   1. Create bucket - You can use terraform configuration stored in `./infra/web-assets` 
   2. Install WordPress Plugin `WP Offload Media Lite`
   3. Configuration of the plugin - https://deliciousbrains.com/wp-offload-media/doc/amazon-s3-quick-start-guide/
