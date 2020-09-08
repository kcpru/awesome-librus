const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtensionReloader = require('webpack-extension-reloader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-source-map',

  plugins: [
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: 'assets',
        ignore: ['*.DS_Store'],
      },
      {
        from: paths.src + '/manifest.json',
        to: './',
      },
    ]),
    // Hot reload
    new ExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScript: 'content',
        extensionPage: ['popup', 'options'],
      },
    }),
  ],
  module: {
    rules: [
      
    ],
  },
})
