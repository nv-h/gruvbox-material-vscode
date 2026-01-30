const test = require("node:test");
const assert = require("node:assert/strict");

// Built JS output (via `npm run compile:ts`).
const { getThemeData } = require("../dist/hook/generateThemes");

function baseConfig(overrides = {}) {
  return {
    darkContrast: "medium",
    lightContrast: "medium",
    darkWorkbench: "material",
    lightWorkbench: "material",
    darkSelection: "grey",
    lightSelection: "grey",
    darkCursor: "white",
    lightCursor: "black",
    darkPalette: "material",
    lightPalette: "material",
    colorfulSyntax: false,
    italicKeywords: false,
    italicComments: true,
    diagnosticTextBackgroundOpacity: "0%",
    highContrast: false,
    ...overrides,
  };
}

function assertString(value, message) {
  assert.equal(typeof value, "string", message);
  assert.ok(value.length > 0, message);
}

function assertWorkbenchKeys(theme) {
  // Issue #265
  assertString(
    theme.colors["editor.inlineValuesBackground"],
    "inlineValuesBackground should be set",
  );
  assertString(
    theme.colors["editor.inlineValuesForeground"],
    "inlineValuesForeground should be set",
  );
}

test("Semantic: Rust enums (default syntax)", () => {
  const data = getThemeData(baseConfig({ colorfulSyntax: false }));

  assertString(
    data.dark.semanticTokenColors["enum:rust"],
    "enum:rust should be set (dark)",
  );
  assertString(
    data.dark.semanticTokenColors["enumMember:rust"],
    "enumMember:rust should be set (dark)",
  );
  assertString(
    data.light.semanticTokenColors["enum:rust"],
    "enum:rust should be set (light)",
  );
  assertString(
    data.light.semanticTokenColors["enumMember:rust"],
    "enumMember:rust should be set (light)",
  );
});

test("Semantic: Rust enums (colorful syntax)", () => {
  const data = getThemeData(baseConfig({ colorfulSyntax: true }));

  assertString(
    data.dark.semanticTokenColors["enum:rust"],
    "enum:rust should be set (dark)",
  );
  assertString(
    data.dark.semanticTokenColors["enumMember:rust"],
    "enumMember:rust should be set (dark)",
  );
  assertString(
    data.light.semanticTokenColors["enum:rust"],
    "enum:rust should be set (light)",
  );
  assertString(
    data.light.semanticTokenColors["enumMember:rust"],
    "enumMember:rust should be set (light)",
  );
});

test("Workbench keys exist (material)", () => {
  const data = getThemeData(
    baseConfig({ darkWorkbench: "material", lightWorkbench: "material" }),
  );
  assertWorkbenchKeys(data.dark);
  assertWorkbenchKeys(data.light);
});

test("Workbench keys exist (flat)", () => {
  const data = getThemeData(
    baseConfig({ darkWorkbench: "flat", lightWorkbench: "flat" }),
  );
  assertWorkbenchKeys(data.dark);
  assertWorkbenchKeys(data.light);
});

test("Workbench keys exist (high-contrast)", () => {
  const data = getThemeData(
    baseConfig({
      darkWorkbench: "high-contrast",
      lightWorkbench: "high-contrast",
    }),
  );
  assertWorkbenchKeys(data.dark);
  assertWorkbenchKeys(data.light);
});
