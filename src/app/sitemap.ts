import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = 'http://adytia-tehnik.com';

  const routes = [
    '/',
    '/pelayanan/persurat',
    '/pelayanan/pemlistrik',
    '/pelayanan/pendaya',
    '/pelayanan/estimasibiaya',
    '/pelayanan/perawatan',
    '/pelayanan/instalasi',
    '/informasi',
    '/hubkami'
  ];

  const sitemapEntries = routes.map((path) => ({
    url: `${baseDomain}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        id: `${baseDomain}${path}`
      }
    }
  }));

  return sitemapEntries;
}
