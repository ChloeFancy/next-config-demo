// @ts-check
const withLess = require("next-with-less");

/**
 * @type {import('next').NextConfig}
 **/
const config = withLess({
  lessOptions: {
    // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
    modifyVars: {
      "primary-color": "#ffd000",
    },
    javascriptEnabled: true,
  },
});

module.exports = config;
