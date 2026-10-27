const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const { h, Fragment } = require('preact');

test('Edge renders the exact approved welcome with its final link and no browser storage access', () => {
  // DOT_NOTES bb681b8fd0085af3cc15ef02e6da1b955404e5ce, welcome.md.
  const bytes = fs.readFileSync(path.join(__dirname, '../src/Apps/Edge/welcome.txt'));
  const blob = crypto.createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
  assert.equal(blob, 'fe7e9edba1d4cbbe07d44e43dea42bd5e3f234b7', 'canonical UTF-8 bytes must not change');
  const canonical = bytes.toString('utf8');
  const source = fs.readFileSync(path.join(__dirname, '../src/Apps/Edge/index.tsx'), 'utf8');
  const compiled = ts.transpileModule(source, {
    fileName: 'index.tsx',
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, jsxFactory: 'h', jsxFragmentFactory: 'Fragment' },
  }).outputText;
  const browser = {};
  for (const key of ['localStorage', 'sessionStorage', 'indexedDB']) {
    Object.defineProperty(browser, key, { get() { throw new Error(`unexpected ${key} access`); } });
  }
  const output = { exports: {} };
  const context = {
    h, Fragment, module: output, exports: output.exports, window: browser,
    require: name => {
      if (name.endsWith('.css')) return { default: new Proxy({}, { get: (_, key) => key }) };
      if (name === './welcome.txt?raw') return { default: canonical };
      throw new Error(`unexpected import: ${name}`);
    },
  };
  for (const key of ['localStorage', 'sessionStorage', 'indexedDB']) {
    Object.defineProperty(context, key, Object.getOwnPropertyDescriptor(browser, key));
  }
  vm.runInNewContext(compiled, context);
  const root = output.exports.EdgeApp();
  const children = node => Array.isArray(node) ? node : node?.props?.children ?? [];
  const walk = node => Array.isArray(node) ? node.flatMap(walk) : node && typeof node === 'object' ? [node, ...walk(children(node))] : [];
  const text = node => Array.isArray(node) ? node.map(text).join('') : node && typeof node === 'object' ? text(children(node)) : node == null ? '' : String(node);
  const nodes = walk(root);
  const intro = nodes.find(node => node.props.class === 'intro');
  const paragraphs = walk(intro).filter(node => ['h1', 'p'].includes(node.type));
  assert.equal(paragraphs.map(text).join('\n\n'), canonical, 'rendered words, punctuation and paragraph boundaries must match');
  const finalLink = walk(paragraphs.at(-1)).find(node => node.type === 'a');
  assert.equal(finalLink.props.href, 'https://vectorindex.cloud');
  assert.equal(text(finalLink), 'https://vectorindex.cloud');
  assert.ok(nodes.some(node => node.type === 'a' && node.props.href === 'https://github.com/PiyushSuthar/Windows-11-Web'), 'separate upstream attribution must remain');
});
