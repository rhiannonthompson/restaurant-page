const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
]

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  
  mode: mode,

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                // This will take more time and get smaller images.
                mode: 'high', // 'lossless', 'low'
                disableOnDevelopment: true,
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: plugins,

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
