const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  return {
    entry: {
      profile: "./src/index.js",
    },
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "build"),
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: ["babel-loader"],
        },
        {
          test: /.(css|scss|sass)$/,
          use: [
            argv.mode === 'production'
              ?  MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            "sass-loader"
          ],
        },
        {
          test: /.(jpg|png|webp)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "[name].[ext]",
                outputPath: "img",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
    ],
    devServer: {
      https: true,
      port: 3000,
      open: true,
      hot: true,
    },

  }
}