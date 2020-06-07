module.exports = {
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
