import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const ignored = new Set(['.git', 'node_modules', 'ustni-otazky-puvodni']);

function walk(directory) {
  return readdirSync(directory).flatMap(name => {
    if (ignored.has(name)) return [];
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
  });
}

let changedFiles = 0;
let changedButtons = 0;
for (const file of walk(root)) {
  const before = readFileSync(file, 'utf8');
  const after = before.replace(/<button\b(?![^>]*\btype=)([^>]*)>/gi, (_match, attributes) => {
    changedButtons += 1;
    return `<button type="button"${attributes}>`;
  })
    .replace(/(href=["'](?:\.\.\/)?site\.css)(?:\?v=\d+)?(["'])/gi, '$1?v=3$2')
    .replace(/(src=["'](?:\.\.\/)?site\.js)(?:\?v=\d+)?(["'])/gi, '$1?v=3$2');
  if (after !== before) {
    writeFileSync(file, after, 'utf8');
    changedFiles += 1;
  }
}

console.log(`Doplněn type="button" u ${changedButtons} tlačítek v ${changedFiles} souborech.`);
