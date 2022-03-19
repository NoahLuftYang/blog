const { nextConfig } = require('@stillmine/next-config');

const relay = require('./relay.config');

module.exports = nextConfig({
  compiler: {
    emotion: true,
    relay,
    removeConsole: true,
  },
  publicRuntimeConfig: {
    CMS: {
      API_URL: process.env.CMS_API_URL,
      TOKEN: process.env.CMS_TOKEN,
    },
  },
  swcMinify: true,
});
