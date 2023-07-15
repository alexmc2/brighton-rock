const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('http://brighton-rock.org', {
  stripQuerystring: false,
  filepath: '../sitemap.xml',
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
generator.start();
