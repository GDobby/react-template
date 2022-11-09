// 生产环境配置
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //压缩js文件

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "body",
      minify: {
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style/[name].[hash:6].css",
    }),
  ],
  output: {
    filename: "js/[name]-bundle-[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  optimization: {
    minimize: true, //开发环境下启用 CSS 优化
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, //true以丢弃对控制台的调用,屏蔽log
          },
        },
      }),
    ], //在生产环境开启 CSS 优化
  },
});
