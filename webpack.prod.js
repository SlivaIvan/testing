/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
