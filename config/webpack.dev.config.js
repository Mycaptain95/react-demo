const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");

const config = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    // contentBase: path.resolve(__dirname, "dist"),
    port: 3009,
    hot: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

const mergeConfig = merge(baseConfig, config);

module.exports = mergeConfig;
