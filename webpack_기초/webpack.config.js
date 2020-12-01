const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // or "production"
  // devtool: "eval", // or "source-map" or "hidden-source-map"

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    host: "localhost",
    contentBase: path.join(__dirname, "/dist"),
    inline: true,
    hot: true,
    port: 5000,
    open: true,
  },
};
