import { tokens as tokensMeta } from '@rhds/tokens/meta.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');

export const capitalize = x => `${x.at(0).toUpperCase()}${x.slice(1)}`;

/* eslint-disable jsdoc/check-tag-names */
/** @typedef {Exclude<ReturnType<typeof tokensMeta['get']>, undefined|null>} DesignToken */
/* eslint-enable jsdoc/check-tag-names */

/**
 * HTML attribute values should use single quotes to avoid breaking out of the value's surrounding double quotes
 * @param {string} x
 */
function escapeDoubleQuotes(x) {
  return x?.toString().replaceAll('"', '\'');
}

/**
 * When recursing over the token categories, it's helpful to get the containing category for things like docs and key names
 * @param {object} options
 * @param {DesignToken[]} tokens
 */
export function getParentCollection(options, tokens) {
  const parent = options.parent ?? tokens;
  const key = options.path.split('.').pop();
  return { parent, key };
}

/** @param {DesignToken|CssCustomProperty} token*/
export function getVariableSyntax(token) {
  return `var(--${token.name}, ${escapeDoubleQuotes(token.$value ?? token.default)})`;
}

/** @param {DesignToken} token*/
export function copyCell(token) {
  const variable = getVariableSyntax(token);
  return /* html */`
    <td data-label="Copy">
      <div>
        <uxdot-copy-button copy="${variable}"></uxdot-copy-button>
        <uxdot-copy-button copy="${getTokenHref(token)}" icon="link"></uxdot-copy-button>
      </div>
    </td>
  `.trim();
}

/** @param {DesignToken} token */
function getTokenCategorySlug(token) {
  const name = `--${token.name}`.replace('----', '--');
  const data = tokensMeta.get(name);
  if (!data) {
    throw new Error(`Could not find token ${name}`);
  } else {
    return data?.attributes?.category;
  }
}

/** @param {DesignToken} token */
export function getTokenHref(token) {
  return `https://ux.redhat.com/tokens/${getTokenCategorySlug(token)}/#${token.name}`;
}

/** @param {string} path */
export function resolveTokens(path) {
  let tokens = tokensJSON;
  for (const part of path.split('.')) {
    tokens = tokens[part];
  }
  return tokens;
}

/** @param {DesignToken} x */
export const getDocs = x => x?.$extensions?.['com.redhat.ux'];

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param {string} str
 */
export function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

/** @param {DesignToken} token */
export const isThemeColorToken = token =>
  token.$type === 'color' && Array.isArray(token.original?.$value);

/**
 * Converts an object mapping css property names to values into a CSS rule for inlining into HTML
 * @param {object} objt
 */
export function styleMap(objt) {
  return Object.entries(objt)
      .map(([k, v]) => `${k}: ${escapeDoubleQuotes(v)}`)
      .join(';');
}

/** @param {object} classInfo */
export function classMap(classInfo) {
  return Object.keys(classInfo)
      .filter(key => classInfo[key])
      .join(' ');
}
