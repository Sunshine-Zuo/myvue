module.exports = {
  publicPath: './',
  outputDir: 'dist',
  // configureWebpack: {
  //   devtool: process.env.NODE_ENV === 'prod' ? false : 'source-map',
  // },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '上汽奥迪'
        return args
      })
  }
}
