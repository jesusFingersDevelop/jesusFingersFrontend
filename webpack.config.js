const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { react_app: './src/index.js' },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      Hooks: path.resolve(__dirname, 'src/hooks/'),
      Lib: path.resolve(__dirname, 'src/lib/'),
      Modules: path.resolve(__dirname, 'src/modules/'),
      Pages: path.resolve(__dirname, 'src/pages/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  }
};
