/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['www.adytia-tehnik.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.adytia-tehnik.com',
          port: '',
          pathname: '/*',
        },
      ],
      minimumCacheTTL: 60,
    },
};


export default nextConfig;
