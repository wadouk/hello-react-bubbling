var webpack = require('webpack');
var glob = require("glob");

module.exports = {
  context: __dirname,
  entry: ["./src/index.js"].concat(glob.sync("./src/wrappers/*.js")),
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
    sourceMapFilename : "bundle.map"
  },
  devtool : "cheap-eval-source-map"
};