/**
 * Webpack config
 */
var path = require('path');

var SOURCE_PATH = './src';
var DISTRIBUTION_PATH = './dist';

module.exports = {

  context: path.join(__dirname, SOURCE_PATH),

  devtools: 'inline-sourcemap',

  entry: ['babel-polyfill', './app.js'],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {

    inline: true,

    port: 3333

  },

  module: {

    loader: [

      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      }

    ]

  },

  output: {

    path: path.join(__dirname, DISTRIBUTION_PATH),

    filename: 'bundle.min.js'

  },

  plugins: []

};
