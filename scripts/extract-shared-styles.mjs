import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const groups = [
  {
    css: 'ss/cermat-topic.css',
    pages: ['ss/absolutni-hodnoty.html', 'ss/funkce.html', 'ss/gon-vzorce.html', 'ss/goniometrie.html', 'ss/komplexni-cisla.html', 'ss/kvadraticke.html', 'ss/mocniny.html', 'ss/soustavy.html']
  },
  {
    css: 'ss/conics-topic.css',
    pages: ['ss/elipsa.html', 'ss/hyperbola-parabola.html', 'ss/kruznice.html']
  },
  {
    css: 'zs/geometry-more.css',
    pages: ['zs/konstrukcni-ulohy-vice.html', 'zs/planimetrie-vice.html', 'zs/stereometrie-vice.html']
  },
  {
    css: 'zs/compact-topic.css',
    pages: ['zs/financni-matematika-zs.html', 'zs/soustavy-rovnic-zs.html']
  },
  {
    css: 'zs/basic-practice.css',
    pages: ['zs/rovnice.html', 'zs/vyrazy.html']
  },
  {
    css: 'zs/word-problems-more.css',
    pages: ['zs/slovni-ulohy-pomer-umernost-vice.html', 'zs/slovni-ulohy-rovnice-vice.html']
  }
];

let migrated = 0;
for (const group of groups) {
  const pages = group.pages.map(short => ({ short, path: resolve(root, short), html: readFileSync(resolve(root, short), 'utf8') }));
  const styles = pages.map(page => page.html.match(/<style\b[^>]*>([\s\S]*?)<\/style>/i)?.[1]?.trim());
  if (styles.some(style => !style)) {
    console.log(`${group.css}: přeskočeno, styl už byl přesunut.`);
    continue;
  }
  if (!styles.every(style => style === styles[0])) throw new Error(`${group.css}: styly ve skupině nejsou shodné`);
  writeFileSync(resolve(root, group.css), `${styles[0]}\n`, 'utf8');
  const cssName = group.css.split('/').pop();
  for (const page of pages) {
    const updated = page.html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/i, `<link rel="stylesheet" href="${cssName}">`);
    writeFileSync(page.path, updated, 'utf8');
    migrated += 1;
  }
}

console.log(`Společné styly přesunuty z ${migrated} HTML stránek.`);
