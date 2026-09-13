import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';

const root = resolve(process.cwd());
const siteUrl = 'https://kockondra-web.github.io/matika-web';
const ignored = new Set(['.git', 'node_modules', 'ustni-otazky-puvodni']);

function walk(directory) {
  return readdirSync(directory).flatMap(name => {
    if (ignored.has(name)) return [];
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
  });
}

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function publicUrl(relativePath) {
  return relativePath === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${relativePath}`;
}

const pages = walk(root)
  .map(file => ({ file, short: relative(root, file).replaceAll('\\', '/') }))
  .sort((a, b) => a.short.localeCompare(b.short, 'cs'));

for (const page of pages) {
  let html = readFileSync(page.file, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i)?.[1]?.trim();
  if (!title || !description) throw new Error(`${page.short}: chybí title nebo meta description`);

  html = html
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+(?:property=["']og:[^"']+["']|name=["']twitter:[^"']+["'])[^>]*>/gi, '');

  const canonical = publicUrl(page.short);
  const metadata = [
    `<link rel="canonical" href="${escapeAttribute(canonical)}">`,
    '<meta property="og:locale" content="cs_CZ">',
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="matematika.jasně">',
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    `<meta property="og:url" content="${escapeAttribute(canonical)}">`,
    '<meta name="twitter:card" content="summary">',
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}">`
  ].join('\n');

  html = html.replace(
    /(<meta\s+name=["']description["'][^>]*>)/i,
    `$1\n${metadata}`
  );
  writeFileSync(page.file, html, 'utf8');
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(page => `  <url><loc>${publicUrl(page.short).replaceAll('&', '&amp;')}</loc><lastmod>2026-09-13</lastmod></url>`),
  '</urlset>',
  ''
].join('\n');

writeFileSync(resolve(root, 'sitemap.xml'), sitemap, 'utf8');
console.log(`SEO metadata doplněna na ${pages.length} stránek; sitemap.xml aktualizována.`);
