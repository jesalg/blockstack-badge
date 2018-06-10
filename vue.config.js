const isProd = process.env.NODE_ENV === 'production'
const path = require('path');
const fs = require('fs');

//Custom Webpack plugin to generate final embed.js file for distribution
function GenerateEmbedPlugin(options) {}
GenerateEmbedPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function(stats) {
    var replaceInFile = function (filePath, toReplace, replacement) {
      var replacer = function (match) {
          //console.log('Replacing in %s: %s => %s', filePath, match, replacement);
          return replacement
      };
      var str = fs.readFileSync(filePath, 'utf8');
      var out = str.replace(new RegExp(toReplace, 'g'), replacer);
      fs.writeFileSync(filePath, out);
    };

    var jsonStats = stats.toJson();
    var hashedApp = jsonStats.assetsByChunkName.app;
    
    replaceInFile(path.join(__dirname, 'dist', 'embed.js'),
        'js/app.js',
        hashedApp
    );
  });
};

if (isProd) {
  module.exports = {  
    chainWebpack: (config) => {
      config
        .optimization
        .delete('splitChunks');
      config
        .plugin("generateEmbed")
        .use(GenerateEmbedPlugin);        
    },
    css: {
      extract: false
    },
    productionSourceMap: false,
  }
} else {
  module.exports = {  };
}
