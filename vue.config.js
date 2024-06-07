const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/pet_paradise.github.io/' : '/',

  configureWebpack: {
    performance: {
      // 将资源大小限制设置为 Infinity，表示没有限制
      maxAssetSize: Infinity,

      // 将入口文件大小限制设置为 Infinity，表示没有限制
      maxEntrypointSize: Infinity,
    },
  },
}
