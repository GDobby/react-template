module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        //添加浏览器前缀
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    }),
  ],
};
