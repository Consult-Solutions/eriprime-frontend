const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.eriprime.com";

const pages = ["", "about-us", "listings", "contact-us", "login", "signup", "postcar"];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${SITE_URL}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemapContent);

console.log("✅ Sitemap generated successfully!");
