import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';

const root = resolve(process.cwd());
const ignored = new Set(['.git', 'node_modules']);

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

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const short = relative(root, file).replaceAll('\\', '/');
  const isPreservedArchive = short.startsWith('ustni-otazky-puvodni/');
  if (!isPreservedArchive) {
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    if (!/<title>[^<]+<\/title>/i.test(html)) warnings.push(`${short}: chybí neprázdný <title>`);
    if (h1Count !== 1) warnings.push(`${short}: počet <h1> je ${h1Count}`);
    if (!/<meta\s+name=["']description["']/i.test(html)) warnings.push(`${short}: chybí meta description`);
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
  process.exitCode = 1;
} else {
  console.log('\nNefunkční interní odkazy nebo soubory: 0');
}
