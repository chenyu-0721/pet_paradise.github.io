const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/pet_paradise.github.io/' : '/',

  configureWebpack: {
    performance: {
      maxAssetSize: Infinity,

      maxEntrypointSize: Infinity,
    },
  },
}
