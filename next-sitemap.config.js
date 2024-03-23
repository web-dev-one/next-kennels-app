module.exports = {
    siteUrl: 'https://petsafekennels.com', // Replace with your website's URL
    generateRobotsTxt: true,
    exclude: ['/admin', '/admin/*'], // Exclude specific routes from the sitemap
    robotsTxtOptions: {
      policies: [
          {
              userAgent: '*',
              allow: '/',
          }
      ]
  }
  };