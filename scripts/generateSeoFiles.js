// scripts/generateSeoFiles.js
const fs = require('fs');
const path = require('path');

// Define the base URL of your site
const BASE_URL = 'https://veritas.example.com'; // Replace with your actual domain

// Static pages with priorities and changefreq
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/explore', priority: '0.9', changefreq: 'daily' },
  { path: '/thematic-collections', priority: '0.8', changefreq: 'weekly' },
  { path: '/quotes-of-the-day', priority: '0.9', changefreq: 'daily' },
  { path: '/top-quotes', priority: '0.8', changefreq: 'weekly' },
  { path: '/random-quotes', priority: '0.7', changefreq: 'daily' },
  { path: '/philosopher-spotlight', priority: '0.8', changefreq: 'weekly' },
  { path: '/authors', priority: '0.8', changefreq: 'weekly' },
  { path: '/collections', priority: '0.8', changefreq: 'weekly' },
  { path: '/my-sanctuary', priority: '0.7', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/search', priority: '0.7', changefreq: 'weekly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' }
];

// Theme pages with priorities
const THEME_PAGES = [
  { name: 'wisdom', priority: '0.8' },
  { name: 'love', priority: '0.8' },
  { name: 'success', priority: '0.8' },
  { name: 'struggle', priority: '0.8' },
  { name: 'nature', priority: '0.8' },
  { name: 'truth', priority: '0.8' },
  { name: 'death', priority: '0.7' },
  { name: 'time', priority: '0.7' },
  { name: 'freedom', priority: '0.7' },
  { name: 'justice', priority: '0.7' },
  { name: 'happiness', priority: '0.7' },
  { name: 'virtue', priority: '0.7' },
  { name: 'mind', priority: '0.7' },
  { name: 'knowledge', priority: '0.8' },
  { name: 'power', priority: '0.7' },
  { name: 'friendship', priority: '0.7' },
  { name: 'courage', priority: '0.7' },
  { name: 'humility', priority: '0.7' },
  { name: 'patience', priority: '0.7' },
  { name: 'hope', priority: '0.7' }
];

// Generate sitemap.xml
function generateSitemap() {
  const urls = [];
  
  // Add static pages
  STATIC_PAGES.forEach(page => {
    const lastmod = new Date().toISOString().split('T')[0];
    urls.push(`
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  });
  
  // Add theme pages
  THEME_PAGES.forEach(theme => {
    const lastmod = new Date().toISOString().split('T')[0];
    urls.push(`
  <url>
    <loc>${BASE_URL}/explore/themes/${theme.name}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${theme.priority}</priority>
  </url>`);
    
    urls.push(`
  <url>
    <loc>${BASE_URL}/thematic-collections?theme=${theme.name}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${parseFloat(theme.priority) - 0.1}</priority>
  </url>`);
  });
  
  // Add individual quote pages (this is a simplified example)
  // In a real implementation, you would iterate through your quotes data
  const quoteLastmod = new Date().toISOString().split('T')[0];
  for (let i = 1; i <= 1000; i++) {
    urls.push(`
  <url>
    <loc>${BASE_URL}/quotes/quote-${i}</loc>
    <lastmod>${quoteLastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('')}
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml

# Prevent crawling of admin pages
Disallow: /admin/
Disallow: /api/test/

# Rate limiting for crawlers
Crawl-delay: 10

# Google-specific directives
User-agent: Googlebot
Allow: /

# Bing-specific directives
User-agent: Bingbot
Allow: /
`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'robots.txt'), robotsTxt);
  console.log('robots.txt generated successfully!');
}

// Run the generators
generateSitemap();
generateRobotsTxt();

console.log('SEO files generated successfully!');
console.log('Remember to:');
console.log('1. Replace "https://veritas.example.com" with your actual domain');
console.log('2. Add actual OG images to the public folder');
console.log('3. Add your Google Search Console verification code');
console.log('4. Update social media links');
console.log('5. Add your actual Twitter handle');