/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ahmedbarkhed.vercel.app', // غيّر للرابط النهائي
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  alternateRefs: [
    {
      href: 'https://ahmedbarkhed.vercel.app/en',
      hreflang: 'en',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/es',
      hreflang: 'es',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/it',
      hreflang: 'it',
    },
  ],
};
