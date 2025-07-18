/* global require module process */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_AIRTABLE_API_KEY': JSON.stringify(
        process.env.REACT_APP_AIRTABLE_API_KEY
      ),
      'process.env.REACT_APP_AIRTABLE_BASE_ID': JSON.stringify(
        process.env.REACT_APP_AIRTABLE_BASE_ID
      ),
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
  },
  mode: 'development',
};
