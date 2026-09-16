"use strict";

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { mathjax } = require("mathjax-full/js/mathjax.js");
const { TeX } = require("mathjax-full/js/input/tex.js");
const { SVG } = require("mathjax-full/js/output/svg.js");
const { liteAdaptor } = require("mathjax-full/js/adaptors/liteAdaptor.js");
const { RegisterHTMLHandler } = require("mathjax-full/js/handlers/html.js");
const { AllPackages } = require("mathjax-full/js/input/tex/AllPackages.js");

const outDir = path.join(__dirname, "equations");
fs.mkdirSync(outDir, { recursive: true });

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const tex = new TeX({ packages: AllPackages });
const svgOut = new SVG({ fontCache: "local" });
const doc = mathjax.document("", { InputJax: tex, OutputJax: svgOut });

const equations = {
  a1: String.raw`2^{2x-1}=\sqrt[5]{8^{x+6}}`,
  a2: String.raw`\log_{2}\!\left(2^{2x-1}\right)=\log_{2}\!\left(2^{\frac{3x+18}{5}}\right)`,
  a3: String.raw`2x-1=\frac{3x+18}{5}`,
  b1: String.raw`3\cdot 2^{x-1}+4\cdot 2^{x+1}=38`,
  b2: String.raw`3\cdot 2^x\cdot 2^{-1}+4\cdot 2^x\cdot 2^1=38`,
  b3: String.raw`2^x\left(\frac{3}{2}+8\right)=38`,
  b4: String.raw`2^x=4`,
  b5: String.raw`x=2`,
  note2_1: String.raw`2^x=7`,
  note2_2: String.raw`\log_2 2^x=\log_2 7`,
  note2_3: String.raw`x=\log_2 7`,
  noteln_1: String.raw`\ln 2^x=\ln 7`,
  noteln_2: String.raw`x\cdot\ln 2=\ln 7`,
  noteln_3: String.raw`x=\frac{\ln 7}{\ln 2}`,
  note10_1: String.raw`\log 2^x=\log 7`,
  note10_2: String.raw`x=\frac{\log 7}{\log 2}`,
  note10_3: String.raw`x=\frac{1}{\log_7 2}`,
  ex1: String.raw`2^x=5`,
  ex2: String.raw`4^{2x-1}=10`,
  ex3: String.raw`4^{2-5x}=5^{4x+1}`,
  ex4: String.raw`2^{1-x}\cdot 3^{2x+3}=5^{4-3x}`,
  ex5: String.raw`\frac{\sqrt[3]{4^{2x-5}}}{9^{1-x}}=3^{5x+1}\cdot 8^{x-5}`,
  s1: String.raw`\log\!\left(\frac{\sqrt[3]{4^{2x-5}}}{9^{1-x}}\right)=\log\!\left(3^{5x+1}\cdot 8^{x-5}\right)`,
  s2: String.raw`\log\sqrt[3]{4^{2x-5}}-\log 9^{1-x}=\log 3^{5x+1}+\log 8^{x-5}`,
  s3: String.raw`\frac{2x-5}{3}\log 4-(1-x)\log 9=(5x+1)\log 3+(x-5)\log 8`,
  s4: String.raw`\frac{4x-10}{3}\log 2-(2-2x)\log 3=(5x+1)\log 3+(3x-15)\log 2\qquad |\cdot 3`,
  s5: String.raw`4x\log 2-10\log 2-6\log 3+6x\log 3=15x\log 3+3\log 3+9x\log 2-45\log 2`,
  s6: String.raw`35\log 2-9\log 3=5x\log 2+9x\log 3`,
};

function toSvg(latex) {
  const html = adaptor.outerHTML(doc.convert(latex, { display: true }));
  const start = html.indexOf("<svg");
  const end = html.indexOf("</svg>");
  let svg = start !== -1 && end !== -1 ? html.slice(start, end + 6) : html;
  if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(svg)) {
    svg = svg.replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" ');
  }
  return svg.replace(/currentColor/g, "#111111");
}

async function main() {
  for (const [name, latex] of Object.entries(equations)) {
    const svg = Buffer.from(toSvg(latex));
    await sharp(svg, { density: 360 })
      .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .extend({ top: 18, bottom: 18, left: 24, right: 24, background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(outDir, `${name}.png`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
