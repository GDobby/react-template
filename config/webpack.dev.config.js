// 开发配置
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: "./dist",
    port: 9000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      hash: false,
    }),
  ],
  devtool: "eval-cheap-module-source-map",
});
