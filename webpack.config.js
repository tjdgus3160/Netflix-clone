const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // 번들링 시작 위치
  output: {
    path: path.join(__dirname, "/dist"), // 번들 결과물 위치
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"], // 우측부터 실행
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 위치
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    host: "localhost", // live-server host 및 port
    port: 5500,
  },
  mode: "development", // 번들링 모드 development / production
};
