var webpack = require('webpack');
var merge = require('webpack-merge');
var validator = require('webpack-validator');
var path = require("path");
var glob = require("glob");

const PATHS = {
  lib: path.join(__dirname, 'lib'),
  src: [path.join(__dirname, 'src/index.js')].concat(glob.sync("./src/wrappers/*.js")),
  public: path.join(__dirname, 'public/'),
};

function override() {
  try {
    return ({
      "dev": () => ({
        devtool: "eval-source-map",
        output : {
          sourceMapFilename: "bundle.js.map",
        },
        devServer: {
          contentBase: PATHS.public,
        }
      }),
      "build": () => ({
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
            },
            comments: false
          }),
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          })
        ],
        devtool: 'source-map'
      })
    }
    )[process.env.npm_lifecycle_event]()
  } catch (e) {
    return {}
  }
}

module.exports = validator(merge({
  context: __dirname,
  entry: PATHS.src,
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
    path: PATHS.lib,
    filename: "bundle.js",
  }
}, override()));