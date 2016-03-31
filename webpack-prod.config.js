'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './js/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'main.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        include: path.join(__dirname, 'browser')
      }
    ]
  }
}
