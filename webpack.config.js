const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const eslintFormatterFriendly = require("eslint-formatter-friendly");

const manifest = JSON.parse(fs.readFileSync("./manifest.webapp", "utf-8"));
const distPath = "openmrs/owas/" + manifest.name;

module.exports = {
  entry: "./index.jsx",
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
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "openmrs")
        ],
        loader: "eslint-loader",
        options: {
          formatter: eslintFormatterFriendly
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "openmrs")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.(s)?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
