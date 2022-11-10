const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        test: /\.jpg|png|gif|bmp$/,
        type: "asset/inline", //默认是呈现为使用 Base64 算法编码的文件内容
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      "@components": path.join(__dirname, "../src/components"),
      "@images": path.join(__dirname, "../src/images"),
    },
  },
};
