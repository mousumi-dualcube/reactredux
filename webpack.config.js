var HtmlWebpackPlugin = require('html-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  devtool: "eval-source-map",
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output : {
    filename: "index_bundle.js",
    path: path.resolve("dist")
  },
  plugins: debug ? [HtmlWebpackPluginConfig] : [
    [HtmlWebpackPluginConfig],
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};