const path = require('path');

module.exports = {
  mode: 'production',
  entry: require.resolve('./src/scrolling-text.js'),
  context: __dirname,
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'dist/scrolling-text.min.js',
    libraryExport: 'default',
    library: 'ScrollingText',
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
