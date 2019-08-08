const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const eslintFormatterFriendly = require("eslint-formatter-friendly");
const postcssPresetEnv = require("postcss-preset-env");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const manifest = JSON.parse(fs.readFileSync("./manifest.webapp", "utf-8"));
const distPath = "openmrs/owas/" + manifest.name;
const injectManifestPlugin = new InjectManifest({
  swSrc: "./service-worker.js"
});

module.exports = {
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, distPath),
    filename: "main.bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new StyleLintPlugin({}),
    new CopyPlugin([{ from: "./manifest.webapp", to: "./manifest.webapp" }]),
    injectManifestPlugin
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()]
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
