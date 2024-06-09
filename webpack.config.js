const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.ts'
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist') // Ensure the output directory is 'dist'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
