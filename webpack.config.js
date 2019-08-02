const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const manifest = JSON.parse(fs.readFileSync("./manifest.webapp", "utf-8"));
const distPath = "openmrs/owas/" + manifest.name;

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, distPath),
    filename: "main.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new CopyPlugin([{ from: "./manifest.webapp", to: "./manifest.webapp" }])
  ],
  stats: {
    colors: true
  },
  devtool: "source-map"
};
