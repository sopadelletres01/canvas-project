const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Enter the darkness',
      template:"index.html"
    }),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js", ".css"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
};
