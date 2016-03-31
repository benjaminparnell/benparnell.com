'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './js/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'main.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        include: path.join(__dirname, 'browser')
      }
    ]
  }
}
