// @ts-check

/** @type {Record<string, string[]>} */
module.exports = {
  '*.{mjs,cjs,ts,tsx,astro}': ['eslint --ext', 'prettier --write'],
  '*.{md,html,json,yaml}': ['prettier --write'],
};
