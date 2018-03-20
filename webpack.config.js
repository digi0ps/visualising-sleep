const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
       {test: /\.css$/, use: 'css-loader' },
    ]
  },

  mode: 'development'
};