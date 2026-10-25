const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.argv[2] || '/';
const siteUrl = process.argv[3] || 'https://sean-windows-11-web.vercel.app/';
const output = path.resolve(__dirname, '../dist');
const html = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
assert.ok(!html.includes('__SITE_URL__'), 'deployment metadata must be resolved');
assert.ok(html.includes(`rel="canonical" href="${siteUrl}"`), 'canonical must match the build target');
const assets = [...html.matchAll(/(?:src|href)="([^"\s]+)"/g)].map(match => match[1]).filter(value => value.startsWith('/') && !value.startsWith('//'));
assert.ok(assets.length >= 3, 'entry, stylesheet and favicon must be emitted');
for (const asset of assets) {
  assert.ok(asset.startsWith(base + 'assets/'), `asset must use ${base}: ${asset}`);
  assert.ok(fs.existsSync(path.join(output, asset.slice(base.length))), `asset must exist: ${asset}`);
}
const worker = fs.readFileSync(path.join(output, 'sw.js'), 'utf8');
assert.ok(worker.includes('skipWaiting') && worker.includes('clientsClaim'), 'worker update behavior must be retained');
const entry = assets.find(value => value.endsWith('.js'));
const script = fs.readFileSync(path.join(output, entry.slice(base.length)), 'utf8');
assert.ok(script.includes(base + 'sw.js'), 'service worker must use the target base');
assert.ok(script.includes('updateViaCache'), 'worker update must bypass stale script cache');
console.log(`Verified ${assets.length} HTML assets, canonical and scoped service worker for ${base}`);
