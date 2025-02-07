'use strict';

// This is the generic module loader for both ESM and CommonJS.
// Note:
//   - the file will be coped to ./dist directory as index.js via rollup.
//   - the `./dist/bundle.js` file will be auto generated via rollup at `npm publish`.

const bundle = require('./bundle.js');
module.exports = bundle.default;
module.exports.Ansis = bundle.Ansis;
