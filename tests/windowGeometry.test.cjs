const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../src/Components/WindowArea/windowGeometry.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const geometryModule = { exports: {} };
new Function('module', 'exports', compiled.outputText)(geometryModule, geometryModule.exports);
const { fitWindowRect, createWindowRect } = geometryModule.exports;

const assertBounded = (rect, workspace) => {
  for (const value of Object.values(rect)) assert.ok(Number.isFinite(value));
  assert.ok(rect.x >= 0 && rect.y >= 0, 'position must stay nonnegative');
  assert.ok(rect.width > 0 && rect.height > 0, 'size must stay positive');
  assert.ok(rect.x + rect.width <= workspace.width, 'right edge must fit workspace');
  assert.ok(rect.y + rect.height <= workspace.height, 'bottom edge must stay above taskbar');
};

test('recovers the reported Edge overflow without losing its requested desktop size', () => {
  const workspace = { width: 1180, height: 707 };
  const fitted = fitWindowRect({ x: 568, y: 50, width: 740, height: 530 }, workspace);
  assertBounded(fitted, workspace);
  assert.equal(fitted.width, 740);
  assert.equal(fitted.height, 530);
});

test('centers a newly opened Edge window after fitting it to the workspace', () => {
  const workspace = { width: 1180, height: 707 };
  const initial = createWindowRect({ width: 740, height: 530 }, workspace);
  assertBounded(initial, workspace);
  assert.equal(initial.x, 220);
  assert.equal(initial.y, 88.5);
});

test('fits edge positions and oversized windows across shrinking workspaces', () => {
  for (const workspace of [{ width: 1180, height: 707 }, { width: 800, height: 550 }, { width: 390, height: 650 }, { width: 280, height: 250 }]) {
    for (const rect of [{ x: -900, y: -400, width: 740, height: 530 }, { x: 2000, y: 1500, width: 1800, height: 1200 }, { x: 220, y: 88.5, width: 740, height: 530 }]) {
      assertBounded(fitWindowRect(rect, workspace), workspace);
      assertBounded(createWindowRect(rect, workspace), workspace);
    }
  }
});
