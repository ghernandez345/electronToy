/**
 * Webpack config
 */
var path = require('path');

var SOURCE_PATH = './src';
var DISTRIBUTION_PATH = './dist';

module.exports = {

  context: path.join(__dirname, SOURCE_PATH),

  devtool: 'inline-source-map',

  entry: ['babel-polyfill', './app.js'],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {

    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ]

  },

  output: {

    path: path.join(__dirname, DISTRIBUTION_PATH),

    filename: 'bundle.js'

  }

};
