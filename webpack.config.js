const path = require('path');

const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'app', 'src'),
  entry: [
    './js/index',
    './scss/styles.scss',
  ],
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-1', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
    new ExtractTextPlugin({
      filename: '../stylesheets/styles.css',
    }),
  ],
};
