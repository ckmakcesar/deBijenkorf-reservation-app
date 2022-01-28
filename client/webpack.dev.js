const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080, // dev client -> port 8080
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // dev server -> port 8081 (two applications running independently on dev)
        secure: false
      }
    },
  }
});
