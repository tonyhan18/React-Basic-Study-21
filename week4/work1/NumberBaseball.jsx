import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const choose = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(choose);
  }
  return array;
}
class NumberBaseball extends Component {
  state = {
    result: "NumverBaseball",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [
            ...prevState.tries,
            { try: this.state.value, result: "홈런!" },
          ],
          value: "",
          answer: getNumbers(),
        };
      });
    } else {
      const answerArray = this.state.value.split(" ").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10 번 넘게 틀려서 실패! 답은 ${this.state.answer.join(
            ","
          )}였습니다!`,
        });
        alert("게임을 다시 시작합니다!");
        this.setState({
          value: "",
          answer: getNumbers(),
          tried: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크, ${ball} 볼입니다.`,
              value: "",
            },
          ],
        });
      }
    }
  };

  onChange = (e) => {
    console.log(this.state.answer);
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>확인</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <div>
          {this.state.tries.map((v, i) => (
            <Try key={i} value={v} index={i} />
          ))}
        </div>
      </>
    );
  }
}

export default NumberBaseball;
//module.exports = NumberBaseball;
