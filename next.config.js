const { nextConfig } = require('@stillmine/next-config');

module.exports = nextConfig({
  publicRuntimeConfig: {
    CMS: {
      API_URL: process.env.CMS_API_URL,
      TOKEN: process.env.CMS_TOKEN,
    },
  },
});
