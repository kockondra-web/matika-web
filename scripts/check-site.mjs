import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { Script } from 'node:vm';

const root = resolve(process.cwd());
const siteUrl = 'https://kockondra-web.github.io/matika-web';
const ignored = new Set(['.git', 'node_modules', 'tmp', 'output']);

function walk(directory, extension) {
  return readdirSync(directory).flatMap(name => {
    if (ignored.has(name)) return [];
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path, extension) : path.endsWith(extension) ? [path] : [];
  });
}

const htmlFiles = walk(root, '.html');
const broken = [];
const warnings = [];
const attributePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

const sitemapPath = resolve(root, 'sitemap.xml');
if (!existsSync(sitemapPath)) warnings.push('chybí sitemap.xml');
else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const urls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
  const expected = new Set(htmlFiles
    .map(file => relative(root, file).replaceAll('\\', '/'))
    .filter(short => !short.startsWith('ustni-otazky-puvodni/'))
    .map(short => short === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${short}`));
  for (const url of expected) if (!urls.has(url)) warnings.push(`chybí v sitemap.xml: ${url}`);
  for (const url of urls) if (!expected.has(url)) warnings.push(`neaktuální záznam v sitemap.xml: ${url}`);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const short = relative(root, file).replaceAll('\\', '/');
  const isPreservedArchive = short.startsWith('ustni-otazky-puvodni/');
  if (!isPreservedArchive) {
    for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
      const attributes = script[1];
      if (/\bsrc\s*=/.test(attributes) || /\btype\s*=\s*["'](?:application\/json|application\/ld\+json|module)/i.test(attributes) || !script[2].trim()) continue;
      try { new Script(script[2], { filename: short }); }
      catch (error) { warnings.push(`${short}: neplatný vložený JavaScript (${error.message})`); }
    }
    if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(html)) warnings.push(`${short}: obsahuje neplatný řídicí znak`);
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    if (!/<title>[^<]+<\/title>/i.test(html)) warnings.push(`${short}: chybí neprázdný <title>`);
    if (h1Count !== 1) warnings.push(`${short}: počet <h1> je ${h1Count}`);
    if (!/<meta\s+name=["']description["']/i.test(html)) warnings.push(`${short}: chybí meta description`);
    if (!/<html\b[^>]*\blang=["']cs["']/i.test(html)) warnings.push(`${short}: chybí lang="cs"`);
    if (!/<footer\b/i.test(html)) warnings.push(`${short}: chybí patička`);
    if (!/src=["'](?:\.\.\/)?site\.js(?:\?v=\d+)?["']/i.test(html)) warnings.push(`${short}: chybí společný skript site.js`);
    const expectedCanonical = short === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${short}`;
    const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i)?.[1];
    const openGraphUrl = html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["'][^>]*>/i)?.[1];
    if (canonical !== expectedCanonical) warnings.push(`${short}: chybná nebo chybějící canonical URL`);
    if (openGraphUrl !== expectedCanonical) warnings.push(`${short}: chybná nebo chybějící og:url`);
    if (!/<meta\s+property=["']og:title["']/i.test(html)) warnings.push(`${short}: chybí og:title`);
    if (!/<meta\s+property=["']og:description["']/i.test(html)) warnings.push(`${short}: chybí og:description`);

    for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\balt=["'][^"']*["']/i.test(image[0])) warnings.push(`${short}: obrázek bez atributu alt`);
    }
    for (const button of html.matchAll(/<button\b[^>]*>/gi)) {
      if (!/\btype=["'](?:button|submit|reset)["']/i.test(button[0])) warnings.push(`${short}: tlačítko bez platného type`);
    }
    for (const anchor of html.matchAll(/<a\b[^>]*>/gi)) {
      if (!/\bhref=["'][^"']+["']/i.test(anchor[0])) warnings.push(`${short}: odkaz bez platného href`);
    }

    const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(match => match[1]);
    for (const id of new Set(ids.filter((value, index) => ids.indexOf(value) !== index))) {
      warnings.push(`${short}: duplicitní id="${id}"`);
    }
  }

  for (const match of html.matchAll(attributePattern)) {
    const value = match[1].trim();
    if (!value || /^(?:https?:|mailto:|tel:|javascript:|data:|#|\/|\$\{)/i.test(value)) continue;
    const clean = decodeURIComponent(value.split(/[?#]/)[0]);
    const target = resolve(dirname(file), clean);
    if (!existsSync(target)) broken.push(`${short} → ${value}`);
  }
}

console.log(`Zkontrolováno HTML stránek: ${htmlFiles.length}`);
if (warnings.length) {
  console.log(`\nUpozornění (${warnings.length}):`);
  warnings.forEach(item => console.log(`- ${item}`));
}
if (broken.length) {
  console.error(`\nNefunkční interní odkazy nebo soubory (${broken.length}):`);
  broken.forEach(item => console.error(`- ${item}`));
} else {
  console.log('\nNefunkční interní odkazy nebo soubory: 0');
}
if (warnings.length || broken.length) process.exitCode = 1;
