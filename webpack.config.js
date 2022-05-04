const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: './src/index.ts',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'compile'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()]
}

module.exports = () => config
