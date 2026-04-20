/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://nolanheriniaina.mg',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/api/*'],

    additionalPaths: async (config) => {
        const locales = ['en', 'fr']

        return locales.map((locale) => ({
            loc: `/${locale}`,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        }))
    },
}

module.exports = config