/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
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
