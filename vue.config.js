const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  module.exports = {  
    chainWebpack: (config) => {
      config
        .optimization
        .delete('splitChunks');
    },
    css: {
      extract: false
    },
    productionSourceMap: false,
  }
} else {
  module.exports = {  };
}
