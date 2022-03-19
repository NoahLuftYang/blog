import { nextConfig } from '@stillmine/next-config';

export default nextConfig({
  compiler: {
    emotion: true,
    relay: {
      language: 'typescript',
      schema: './schema.graphql',
      src: './src',
    },
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
