const path = require('path');

module.exports = {
  entry: './src/algorithms.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'algorithms.js'
  }
};