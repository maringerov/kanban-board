var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: {
    app: path.resolve(ROOT_PATH, 'app/main'),
    vendor: ['react']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'app.[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js')
  ]
};
