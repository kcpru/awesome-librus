const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    content: paths.src + '/content/content.js',
    options: paths.src + '/options/options.js',
    popup: paths.src + '/popup/popup.js',
    css: paths.src + '/content/css.js',
  },
  output: {
    path: paths.build,
    filename: '[name]/[name].bundle.js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        dodatkowy1: {
          name: 'dodatkowy1',
          test: /dodatkowy1\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
        dodatkowy2: {
          name: 'dodatkowy2',
          test: /dodatkowy2\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
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

    new HtmlWebpackPlugin({
      template: paths.src + '/options/options.html',
      filename: 'options/options.html',
      chunks: ['options'],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + '/popup/popup.html',
      filename: 'popup/popup.html',
      chunks: ['popup'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].XDD-filename.css',
      chunkFilename: '[name].XDD-chunk.css',
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // Styles
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer()], sourceMap: true },
          },
          'sass-loader',
        ],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src',
        },
      },
    ],
  },
}
