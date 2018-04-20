const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'index.js',
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
