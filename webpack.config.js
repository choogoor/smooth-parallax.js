const path = require('path');

module.exports = {
  mode: 'production',
  entry: require.resolve('./src/smooth-parallax.js'),
  context: __dirname,
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'dist/smooth-parallax.min.js',
    libraryExport: 'default',
    library: 'SmoothParallax',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }],
  },
};
