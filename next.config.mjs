/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    target: 'serverless',
    publicRuntimeConfig: {
      domain: 'adytia-tehnik.com',
    },
}
  

export default nextConfig;
