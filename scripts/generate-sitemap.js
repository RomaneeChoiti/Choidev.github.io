#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Generates public/sitemap.xml using package.json homepage and project routes.
// Usage: node scripts/generate-sitemap.js

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const outPath = path.join(publicDir, 'sitemap.xml');

function getHomepage() {
  const pkg = require(path.join(repoRoot, 'package.json'));
  return pkg.homepage || (pkg.repository && pkg.repository.url) || '';
}

function ensurePublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
}

function loadProjects() {
  const projectsPath = path.join(repoRoot, 'src', 'data', 'projects.js');
  // Require the compiled module by transpiling via node's require won't work for ESModules or webpack specific things.
  // So we'll parse the files in src/data/Works to build routes based on project.link or id.
  const worksDir = path.join(repoRoot, 'src', 'data', 'Works');
  const files = fs.readdirSync(worksDir).filter(f => f.endsWith('.js'));
  const projects = [];
  files.forEach((f) => {
    const src = fs.readFileSync(path.join(worksDir, f), 'utf8');
    try {
      // Look for link: '...'
      const linkMatch = src.match(/link:\s*['"]([^'"]+)['"]/);
      const idMatch = src.match(/id:\s*['"]([^'"]+)['"]/);
      const titleMatch = src.match(/title:\s*['"]([^'"]+)['"]/);
      const projectNoMatch = src.match(/projectNo:\s*['"]?([^'",\s}]+)['"]?/);
      const href = linkMatch ? linkMatch[1] : (idMatch ? (`/works/${idMatch[1]}`) : null);
      projects.push({ file: f, href, id: idMatch && idMatch[1], title: titleMatch && titleMatch[1], projectNo: projectNoMatch && projectNoMatch[1] });
    } catch (e) {
      console.warn('failed parse', f, e.message);
    }
  });
  return projects.filter(p => p.href);
}

function collectRoutes() {
  const routes = new Set();
  // common pages
  const basePaths = ['/', '/works', '/bio', '/contact', '/blog', '/artist-statement', '/author-notes'];
  basePaths.forEach(p => routes.add(p));

  // add project routes
  const projects = loadProjects();
  projects.forEach((p) => {
    // prefer explicit link fields
    const href = p.href;
    if (href.startsWith('http')) return; // skip fully-qualified
    routes.add(href);
  });

  return Array.from(routes);
}

function buildSitemap(host, routes) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = `</urlset>`;

  const body = routes.map((r) => {
    const loc = (host.replace(/\/$/, '') + r).replace(/\/\/+/, '/').replace('http:/', 'http://').replace('https:/', 'https://');
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  }).join('\n');

  return header + body + '\n' + footer;
}

function run() {
  const homepage = getHomepage();
  if (!homepage) {
    console.error('No homepage found in package.json. Please set homepage to your site base URL.');
    process.exit(1);
  }

  ensurePublic();
  const routes = collectRoutes();
  const sitemap = buildSitemap(homepage, routes);
  fs.writeFileSync(outPath, sitemap, 'utf8');
  console.log(`sitemap written to ${outPath} with ${routes.length} routes`);
}

run();
