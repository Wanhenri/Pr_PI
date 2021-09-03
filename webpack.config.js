const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.css$/, 
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [ 'file-loader' ]
      },
      {
        // this should be /.handlebars$/
        test: /.hbs$/,
        exclude: /(node_modules)/,
        loader: 'handlebars-loader'
      }      
    ]
  },
  stats: {
    children: true,
    warningsFilter: [
      /\-\-underline\-color/,
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      path: false,
      os: false       
    },
  }
}
