const path = require("path");
const webpackHotReload = require("@pmmmwh/react-refresh-webpack-plugin"); // 2-9

module.exports = {
  name: "WordRelay-setting",
  mode: "development",
  devtool: "eval", // 개발자는 eval, 제품은 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"], // 확장자 생략가능
  },
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], //browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel", //2-9
          ], // 확장프로그램 - 추가적인 작업
        },
      },
    ],
  },
  plugins: [
    new webpackHotReload(), //2-9
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist",
  },
  devServer: {
    //2-9
    devMiddleware: { publicPath: "/dist" }, //2-9 : webpack이 처리한 파일들이 있을 위치
    static: { directory: path.resolve(__dirname) }, //2-9 : 정적 파일(index.html)들의 경로
    hot: true, //2-9
  },
};
