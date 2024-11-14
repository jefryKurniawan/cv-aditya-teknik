import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'http://adytia-tehnik.com/sitemap.xml',
    host: 'http://adytia-tehnik.com',
  };
}
