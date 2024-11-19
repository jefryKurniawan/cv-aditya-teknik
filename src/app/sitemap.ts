import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = 'https://www.adytia-tehnik.com/';

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
    priority: path === "/" ? 1.0 : 0.8,
    alternates: {
      languages: {
        id: `${baseDomain}${path}`
      }
    }
  }));

  return sitemapEntries;
}
