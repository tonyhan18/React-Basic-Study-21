const path = require("path");

module.exports = {
  name: "word-relay-setting", //webpack name anonymous
  mode: "development", //실서비스에서는 producetion으로 바꾸기
  devtool: "eval", // 빠르게
  //entry와 output이 가장 중요
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"], // 여기에서 WordRelay는 client.jsx에서 불러오기 때문에 Webpack이 알아서 설정해줌. resolve에 확장자를 써주면 확장자도 써줄 필요없음.
  }, // 입력

  module: {
    // babel 설치후 rule을 정의하기
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), //알아서 경로를 합치어 준다. 현재폴더의 dist로 만들어주기 떄문에 편리
    filename: "app.js",
  }, // 출력
};
