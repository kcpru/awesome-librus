const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtensionReloader = require('webpack-extension-reloader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  watch: true,

  plugins: [
    new ExtractTextPlugin({
      filename: './styles/[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: 'assets',
        ignore: ['*.DS_Store'],
      },
      {
        from: paths.manifest,
        to: './',
      },
    ]),
    // Hot reload
    new ExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScript: 'main',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
})
