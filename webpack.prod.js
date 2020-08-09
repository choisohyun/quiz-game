const path = require("path");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          minSize: 10000,
          maxSize: 250000,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.production"),
    }),
    new WebpackPwaManifest({
      name: "Anyone Anywhere Enjoy QUIZ GAME",
      short_name: "QUIZ GAME",
      description: "My QUIZ GAME project!",
      background_color: "#ffffff",
      theme_color: "#000000",
      inject: true,
      ios: true,
      display: "standalone",
      start_url: ".",
      icons: [
        {
          src: path.resolve("public/favicon.ico"),
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
      ],
    }),
  ],
});
