const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  stats: {
    colors: true
  },
  devtool: "source-map"
};
