const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    bs3: './bs3/scss/bs3.scss',
    bs4: './src/scss/bs4.scss',
    scripts: './src/ts/scripts.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  mode: 'production',
  devtool: 'source-map',
  watch: true,
  stats: {
    all: false,
    assets: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          }
        }
      })
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new WebpackBar(),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')
              ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }]
      }
    ],
  },
};