/**
 * Webpack config
 */

var debug = process.env.NODE_ENV;
var webpack = require('wepack');
var path = require('path');

module.exports = {

  context: path.join(__dirname, 'src'),

  devtools: debug ? 'inline-sourcemap' : null,

  entry: ['babel-polyfill', './js/app.js'],

  devServer: {

    inline: true,

    port: 3333

  },

  module: {

    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      }

    ]

  },

  output: {

    path: __dirname + '/src/',

    filename: 'bundle.min.js'

  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]

};
