const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../src/store/themeStorage.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const themeModule = { exports: {} };
new Function('module', 'exports', compiled.outputText)(themeModule, themeModule.exports);
const { readStoredTheme, writeStoredTheme } = themeModule.exports;

test('preserves legacy preference while isolating this desktop from shared-origin theme changes', () => {
  const values = new Map([['theme', 'dark']]);
  const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  assert.equal(readStoredTheme(storage), 'dark');
  writeStoredTheme(storage, 'light');
  assert.equal(values.get('theme'), 'dark', 'another desktop legacy key must stay unchanged');
  assert.equal(readStoredTheme(storage), 'light', 'this desktop must use its own preference');
  values.set('theme', 'light');
  writeStoredTheme(storage, 'dark');
  assert.equal(readStoredTheme(storage), 'dark');
});

test('storage-restricted embedding keeps an in-memory default without throwing', () => {
  const storage = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  assert.equal(readStoredTheme(storage), 'light');
  assert.doesNotThrow(() => writeStoredTheme(storage, 'dark'));
});
