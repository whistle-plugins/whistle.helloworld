const path = require('path');

module.exports = {
  entry: { app: './src/App.js' },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /.(js)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules'),
        ],
      },
    ],
  },
};
