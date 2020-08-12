const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.tsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "client/src/"),
      "@Main": path.resolve(__dirname, "client/src/components/Main/"),
      "@Style": path.resolve(__dirname, "client/src/style/"),
      "@MainPage": path.resolve(__dirname, "client/src/views/MainPage/"),
      "@MyPage": path.resolve(__dirname, "client/src/views/MyPage/"),
      "@QuizListPage": path.resolve(__dirname, "client/src/views/QuizListPage/"),
      "@QuizDetailPage": path.resolve(__dirname, "client/src/views/QuizDetailPage/"),
      "@QuizPage": path.resolve(__dirname, "client/src/views/QuizPage/"),
      "@NewQuizPage": path.resolve(__dirname, "client/src/views/NewQuizPage/"),
      "@ErrorPage": path.resolve(__dirname, "client/src/views/ErrorPage/"),
      "@Loading": path.resolve(__dirname, "client/src/views/Loading/"),
      "@Card": path.resolve(__dirname, "client/src/components/Card/"),
      "@Header": path.resolve(__dirname, "client/src/components/Header/"),
      "@Footer": path.resolve(__dirname, "client/src/components/Footer/"),
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
