/** @type {import('next').NextConfig} */
const { BUILD_TYPE } = process.env;

const env = {
  BUILD_TYPE: 'static',
}

Object.keys(env).forEach((key) => {
  if (env[key] === undefined) throw new Error(`Env variable ${key} is not defined`);
});

const BASE_CONFIG = {
  env: env,
}

const standaloneConfig = require('./config/next.standalone.config');
const staticConfig = require('./config/next.static.config');

const config = BUILD_TYPE === 'static'
  ? staticConfig
  : standaloneConfig;

const nextConfig = {...BASE_CONFIG, ...config};

module.exports = nextConfig;
