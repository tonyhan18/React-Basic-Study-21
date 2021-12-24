const path = require("path");

module.exports = {
  name: "GuGuDan-setting",
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
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [], // 확장프로그램 - 추가적인 작업
        },
      },
    ],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
