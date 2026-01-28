# TODO: New Feature Considerations

This document lists potential features to add as a VSCode Theme extension.

---

## Upstream Issues & PRs

Issues and PRs from the original repository that could be addressed in this fork.

### Pull Requests (Ready to Merge)

#### PR #270: Add semantic colors for Rust enums

- [ ] Add semantic token colors for Rust enums to distinguish enum members from variables
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/pull/270
- **Difficulty**: Easy (2 lines change)

### Bug Fixes

#### Issue #269: Python `self` parameter not colored as special

- [ ] Add semantic token color for `selfParameter`
- [ ] Add TextMate scope for `variable.parameter.function.language.special.self`
- [ ] Also handle `cls` parameter for class methods
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/269
- **Difficulty**: Easy

#### Issue #264: JSX arrow function foreground color inconsistency

- [ ] Fix text foreground color difference between regular and arrow function JSX components
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/264
- **Difficulty**: Medium

#### Issue #268: C# syntax highlighting changes when project loads

- [ ] Investigate and fix C# syntax highlighting stability
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/268
- **Difficulty**: Medium

### Enhancements

#### Issue #265: Add highlights for debug inline variables

- [ ] Add colors for `editor.inlineValuesBackground` and `editor.inlineValuesForeground`
- [ ] Make inline debug values subtle but distinguishable from code
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/265
- **Difficulty**: Easy

#### Issue #267: Decrease active indent guide opacity

- [ ] Reduce opacity of `editorIndentGuide.activeBackground1-6` to ~50%
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/267
- **Difficulty**: Easy

#### Issue #228: Semantic highlight support for C++

- [ ] Add semantic token definitions for C++ (clangd)
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/228
- **Difficulty**: Medium-Hard

#### Issue #203: TypeScript syntax coloring inconsistencies

- [ ] Review and improve TypeScript semantic highlighting
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/203
- **Difficulty**: Medium

### Feature Requests

#### Issue #271: Consider swapping yellow and green

- [ ] Consider option to swap function (yellow) and string (green) colors
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/271
- **Difficulty**: Medium (may require new setting)

#### Issue #266: Azure Data Studio Marketplace

- [ ] Publish extension to Azure Data Studio Marketplace
- **Upstream**: https://github.com/sainnhe/gruvbox-material-vscode/issues/266
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
