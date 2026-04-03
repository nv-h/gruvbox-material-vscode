# TODO: New Feature Considerations

This document lists potential features to add as a VSCode Theme extension.

---

## Upstream Issues & PRs

Issues and PRs from the original repository that could be addressed in this fork.

> **sainnhe's design philosophy (from [#228](https://github.com/sainnhe/gruvbox-material-vscode/issues/228)):**
>
> - Variables, parameters, properties are **intentionally not highlighted** — "if everything is special, then nothing is special."
> - Only 7 palette colors available; already allocated to keywords, operators, etc.
> - Semantic highlighting should only complement regex highlighting, not replace it.
> - rust-analyzer is the only semantic engine sainnhe considers reliable.
> - The upstream repo has been largely unresponsive since mid-2022 (9 of 10 items below have no maintainer comment).

> **Fork stance (nv-h):**
>
> - Respect upstream's "don't highlight everything" philosophy, but allow per-language special tokens (`self`/`cls`, `enum`, etc.) on a case-by-case basis.
> - Do not bulk-highlight generic variable/parameter/property tokens.
> - Workbench key additions and bug fixes are treated independently of the semantic highlighting philosophy.

### Pull Requests (Ready to Merge)

#### PR #270: Add semantic colors for Rust enums

- [x] Add semantic token colors for Rust enums to distinguish enum members from variables
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/pull/270
- **Upstream status**: OPEN, no review from sainnhe. Colors copied from TypeScript pattern (`enum`=purple, `enumMember`=blue). Compatible with sainnhe's stance that rust-analyzer is the one reliable semantic engine.
- **Difficulty**: Easy (2 lines change)

### Bug Fixes

#### Issue #269: Python `self` parameter not colored as special

- [x] Add semantic token color for `selfParameter`
- [ ] Add TextMate scope for `variable.parameter.function.language.special.self`
- [x] Also handle `cls` parameter for class methods
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/269
- **Upstream status**: OPEN, no response from sainnhe. `self`/`cls` are language keywords in practice but semantic tokens classify them as parameters. Fork stance: allowed as language-specific special tokens.
- **Difficulty**: Easy

#### Python `type` semantic token not colored

- [x] Add `type:python` semantic token color — typing special forms (`ClassVar`, `Protocol`, `Any`, etc.) are classified as `type` by Pylance but the theme has no definition, falling back to default foreground
- [x] Built-in types (`dict`, `str`, etc.) are already colored as `class` — only `type` is missing
- **Difficulty**: Easy (1 line change per semantic file)
- **Note**: Can be addressed together with #269 as part of Python semantic enhancements

#### Issue #264: JSX arrow function foreground color inconsistency

- [ ] Fix text foreground color difference between regular and arrow function JSX components
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/264
- **Upstream status**: OPEN 3+ years, no response from sainnhe. Bug report — independent of design philosophy.
- **Difficulty**: Medium

#### Issue #268: C# syntax highlighting changes when project loads

- [ ] Investigate and fix C# syntax highlighting stability
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/268
- **Upstream status**: OPEN, no response from sainnhe despite multiple bumps from reporter. Likely caused by semantic highlighting overriding TextMate scopes on project load.
- **Difficulty**: Medium

### Enhancements

#### Issue #265: Add highlights for debug inline variables

- [x] Add colors for `editor.inlineValuesBackground` and `editor.inlineValuesForeground`
- [x] Make inline debug values subtle but distinguishable from code
- **Preview**: [docs/previews/inline-values.html](docs/previews/inline-values.html)
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/265
- **Upstream status**: OPEN, no response from sainnhe. Workbench color addition — outside the scope of the semantic highlighting philosophy.
- **Difficulty**: Easy

#### Issue #267: Decrease active indent guide opacity

- [ ] Reduce opacity of `editorIndentGuide.activeBackground1-6` to ~50%
- [ ] On hold: cannot reproduce the issue; deferring until reproduction steps are established
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/267
- **Upstream status**: OPEN, no response from sainnhe. Workbench adjustment — outside the scope of the semantic highlighting philosophy.
- **Difficulty**: Easy

#### Issue #203: TypeScript syntax coloring inconsistencies

- [ ] Review and improve TypeScript semantic highlighting
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/203
- **Upstream status**: OPEN 4+ years, no response from sainnhe. Fork stance: individual inconsistency fixes are allowed, but bulk-highlighting generic variable/parameter tokens is not.
- **Difficulty**: Medium

### Won't Fix

#### Issue #228: Semantic highlight support for C++

- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/228
- **Upstream status**: OPEN. **sainnhe explicitly rejected** — "variables are supposed to be white", "if everything is special, nothing is special", semantic engines other than rust-analyzer are considered defective. This is the primary source of sainnhe's design philosophy on semantic highlighting.
- **Fork partial fix**: Added TextMate scope colors for C/C++ `enum` type names and members in the Default variant. Generic variable/parameter bulk-highlighting remains out of scope per design philosophy. Colorful variant already covered by generic `entity.name.type.enum` TextMate rule.

### Feature Requests

#### Issue #271: Consider swapping yellow and green

- [ ] Consider option to swap function (yellow) and string (green) colors
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/271
- **Upstream status**: OPEN, no response from sainnhe. Palette-level change — high impact, needs careful consideration.
- **Difficulty**: Medium (may require new setting)

#### Issue #266: Azure Data Studio Marketplace

- [ ] Publish extension to Azure Data Studio Marketplace
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/266
- **Upstream status**: OPEN, no response from sainnhe. Distribution topic — unrelated to color design.
- **Difficulty**: Easy

---

## New Features

### High Priority

#### 1. File Icon Theme

- [ ] Create file icon set that harmonizes with Gruvbox color palette
- [ ] Custom icons for each language/file type
- [ ] Support both Dark/Light variants

**Reference**: [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

#### 2. Product Icon Theme

- [ ] Customize VSCode UI element icons (Activity Bar, Status Bar, etc.)
- [ ] Unified UI icons matching Gruvbox style
- [ ] Icons for Activity Bar, panels, and editor

**Reference**: [Material Product Icons](https://marketplace.visualstudio.com/items?itemName=PKief.material-product-icons)

### Medium Priority

#### 3. Colorblind-Friendly Theme Variant

- [ ] Color scheme variants for color vision deficiency
- [ ] Deuteranopia (green-blind) support
- [ ] Protanopia (red-blind) support

**Reference**: [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) colorblind modes

#### 4. OLED Black Theme Variant

- [ ] Pure black background (#000000) variant
- [ ] Battery saving on OLED displays
- [ ] For mobile/tablet users

### Low Priority

#### 5. Terminal Theme Export

- [ ] iTerm2 color scheme
- [ ] Windows Terminal color scheme
- [ ] Alacritty color scheme
- [ ] Other terminal applications

---

## References

- [VSCode Themes Documentation](https://code.visualstudio.com/docs/configure/themes)
- [Product Icon Theme API](https://code.visualstudio.com/api/extension-guides/product-icon-theme)
- [File Icon Theme API](https://code.visualstudio.com/api/extension-guides/file-icon-theme)
- [Upstream Issues](https://github.com/sainnhe/gruvbox-material-vscode/issues)
- [Upstream PRs](https://github.com/sainnhe/gruvbox-material-vscode/pulls)
