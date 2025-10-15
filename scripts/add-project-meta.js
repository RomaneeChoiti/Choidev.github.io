#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const worksDir = path.resolve(__dirname, '..', 'src', 'data', 'Works');

function processFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  if (/\bkeywords\b/.test(src) && /\bstartDate\b/.test(src) && /\bendDate\b/.test(src)) {
    console.log(`skipping ${path.basename(filePath)} — already has fields`);
    return;
  }

  // naive insertion: find the export default object closing brace and insert fields near top after the const ArtWork = {
  const marker = /const\s+\w+\s*=\s*{\n/;
  const m = src.match(marker);
  if (!m) {
    console.warn(`couldn't find object start in ${filePath}`);
    return;
  }

  // prepare insertion text
  const insertion = `  keywords: [],\n  startDate: null, // ISO string e.g. '2024-02-01'\n  endDate: null,\n`;

  const newSrc = src.replace(marker, (match) => match + insertion);

  // backup original
  fs.writeFileSync(filePath + '.bak', src, 'utf8');
  fs.writeFileSync(filePath, newSrc, 'utf8');
  console.log(`updated ${path.basename(filePath)} (backup created .bak)`);
}

fs.readdirSync(worksDir).forEach(f => {
  const full = path.join(worksDir, f);
  if (f.endsWith('.js')) processFile(full);
});

console.log('done');
