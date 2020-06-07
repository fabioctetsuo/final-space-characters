const path = require('path');
const context = path.join(__dirname, 'src');

module.exports = {
  context,
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'finalSpaceCharacters',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js'] },
        use: { loader: 'babel-loader' },
      },
    ],
  },
};
