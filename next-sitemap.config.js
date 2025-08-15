/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://spanishwithseif.com',
  generateRobotsTxt: false, // We already created our custom robots.txt
  generateIndexSitemap: true,
  outDir: 'public',
  sitemapSize: 7000,
  exclude: ['/admin/*', '/api/*'],
  alternateRefs: [
    {
      href: 'https://spanishwithseif.com',
      hreflang: 'x-default',
    },
    {
      href: 'https://spanishwithseif.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://spanishwithseif.com/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://spanishwithseif.com/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://spanishwithseif.com/es',
      hreflang: 'es',
    },
  ],
  additionalPaths: async (config) => {
    const result = [];
    
    // Add additional URLs that aren't automatically discovered
    const extraPaths = [
      { loc: '/courses', priority: 0.8, changefreq: 'weekly' },
      { loc: '/testimonials', priority: 0.7, changefreq: 'weekly' },
      { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
    ];

    extraPaths.forEach((path) => {
      result.push({
        loc: path.loc,
        priority: path.priority,
        changefreq: path.changefreq,
      });
    });

    return result;
  },
  transform: async (config, path) => {
    // Custom transform function for each URL
    // Return null means to exclude this route from sitemap
    // if (path.includes('/private/')) return null;

    // Priority based on path depth
    let priority = 1.0;
    const pathDepth = path.split('/').filter(Boolean).length;
    
    if (pathDepth === 1) priority = 0.8;
    else if (pathDepth === 2) priority = 0.6;
    else if (pathDepth > 2) priority = 0.4;
    
    // Special pages
    if (path === '/') priority = 1.0;
    if (path.includes('/courses/')) priority = 0.9;
    
    return {
      loc: path, // => this will be exported as 'url' in sitemap.xml
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
