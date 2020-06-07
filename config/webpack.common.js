const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    content: paths.src + '/content/content.js',
    options: paths.src + '/options/options.js',
    popup: paths.src + '/popup/popup.js',
  },
  output: {
    path: paths.build,
    filename: '[name]/[name].bundle.js',
    publicPath: '/',
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
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer()], sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'), // dart-sass
            },
          },
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
      // Fonts
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf|)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8192,
      //     name: '[path][name].[ext]',
      //     context: 'src',
      //   },
      // },
    ],
  },
}
