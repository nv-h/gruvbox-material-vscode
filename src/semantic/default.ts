/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/gruvbox-material-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { Palette } from "../interface";

export function getDefaultSemantic(palette: Palette) {
  return {
    // General {{{
    operatorOverload: `${palette.orange}`,
    memberOperatorOverload: `${palette.orange}`,
    variable: `${palette.fg}`,
    // }}}
    // JavaScript {{{
    "variable.defaultLibrary:javascript": `${palette.purple}`,
    "property.defaultLibrary:javascript": `${palette.purple}`,
    // }}}
    // JavaScript React {{{
    "variable.defaultLibrary:javascriptreact": `${palette.purple}`,
    "property.defaultLibrary:javascriptreact": `${palette.purple}`,
    // }}}
    // TypeScript {{{
    "enum:typescript": `${palette.purple}`,
    "enumMember:typescript": `${palette.blue}`,
    "variable.defaultLibrary:typescript": `${palette.purple}`,
    "property.defaultLibrary:typescript": `${palette.purple}`,
    // }}}
    // TypeScript React {{{
    "enum:typescriptreact": `${palette.purple}`,
    "enumMember:typescriptreact": `${palette.blue}`,
    "variable.defaultLibrary:typescriptreact": `${palette.purple}`,
    "property.defaultLibrary:typescriptreact": `${palette.purple}`,
    // }}}
    // Python {{{
    "intrinsic:python": `${palette.purple}`,
    "module:python": `${palette.blue}`,
    "class:python": `${palette.aqua}`,
    "type:python": `${palette.yellow}`,
    "selfParameter:python": `${palette.purple}`,
    "clsParameter:python": `${palette.purple}`,
    // }}}
    // Rust {{{
    "macro:rust": `${palette.aqua}`,
    "namespace:rust": `${palette.purple}`,
    "selfKeyword:rust": `${palette.purple}`,
    "enum:rust": `${palette.purple}`,
    "enumMember:rust": `${palette.blue}`,
    // }}}
  };
}

// vim: fdm=marker fmr={{{,}}}:
