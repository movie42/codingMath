const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public", "static", "bundle")
  },
  devServer: { port: 3000 },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
};
