/** @type {import('next-sitemap').IConfig} */
const baseUrl = 'https://ahmedbarkhed.vercel.app';

const staticRoutes = ['', '/services', '/experience', '/projects', '/contact'];
const locales = ['en', 'ar', 'es', 'it'];

module.exports = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/secret'], // احذف أو عدل هذه حسب الحاجة
  alternateRefs: locales.map((locale) => ({
    href: `${baseUrl}/${locale}`,
    hreflang: locale,
  })),
  transform: async (config, path) => {
    return {
      loc: `${baseUrl}${path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: locales.map((locale) => ({
        href: `${baseUrl}/${locale}${path}`,
        hreflang: locale,
      })),
    };
  },
};
