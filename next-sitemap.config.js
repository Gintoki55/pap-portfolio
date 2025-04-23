module.exports = {
  siteUrl: 'https://ahmedbarkhed.vercel.app', // رابط موقعك
  generateRobotsTxt: true, // إذا كنت تريد توليد ملف robots.txt
  changefreq: 'daily', // التردد الذي تتغير فيه الصفحات
  priority: 0.7, // الأولوية
  alternateRefs: [
    {
      href: 'https://ahmedbarkhed.vercel.app/en', // رابط اللغة الإنجليزية
      hreflang: 'en',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/ar', // رابط اللغة العربية
      hreflang: 'ar',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/es', // رابط اللغة الإسبانية
      hreflang: 'es',
    },
    {
      href: 'https://ahmedbarkhed.vercel.app/it', // رابط اللغة الإيطالية
      hreflang: 'it',
    },
  ],
  // يمكنك إضافة المزيد من الصفحات هنا
  additionalPaths: async (config) => [
    await config.transform({
      loc: '/services', // صفحة الخدمات
      changefreq: 'weekly',
      priority: 0.6,
    }),
    await config.transform({
      loc: '/experience', // صفحة الخبرات
      changefreq: 'weekly',
      priority: 0.6,
    }),
    await config.transform({
      loc: '/projects', // صفحة المشاريع
      changefreq: 'weekly',
      priority: 0.6,
    }),
    await config.transform({
      loc: '/contact', // صفحة الاتصال
      changefreq: 'weekly',
      priority: 0.6,
    }),
  ],
};
