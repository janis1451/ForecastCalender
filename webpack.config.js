const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [__dirname + "/src", __dirname + "/src/styles/base.scss"],
  output: {
    path: path.resolve("dist/"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: false,
    }),
  ],
  resolve: {
    extensions: [".html", ".scss"],
  },
};
