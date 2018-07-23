/* eslint-disable no-undef */

const path = require('path');

const alias = {
  jquery: path.resolve('./node_modules/jquery'),
  'lodash-es': path.resolve('./node_modules/lodash-es'),
  'fonts': path.resolve('./src/assets/fonts'),
};

// const plugins = [
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//     'window.jQuery': 'jquery'
//   }),
// ];

module.exports = {
  slateCssVarLoader: {
    cssVarLoaderLiquidPath: ['src/snippets/css-variables.liquid'],
  },
  slateTools: {
    extends: {
      dev: {
        resolve: {alias},
        module: {
          rules: [
            {
              test: require.resolve('owl.carousel'),
              use: 'imports-loader?$=jquery,jQuery=jquery',
            },
          ],
        },
      },
      prod: {
        resolve: {alias},
        module: {
          rules: [
            {
              test: require.resolve('owl.carousel'),
              use: 'imports-loader?$=jquery,jQuery=jquery',
            },
          ],
        },
      },
    },
  },
};
