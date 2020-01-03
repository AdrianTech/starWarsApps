const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader"
    ]
  },
  {
    test: /\.(png|jpe?g|gif|jpg)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  }
];
module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    port: 9222
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "index.html"
    })
  ]
};
