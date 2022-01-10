# React 조건문

React 내부에서는 for과 if를 못쓴다. 그래서 이걸 해결할 수 있는 방법이 따로 존재한다.

React 조건문 1 : 삼항연산자

```
{this.state.result.length === 0 ? null : (
        <div>
          평균 시간 :
          {this.state.result.reduce((a, c) => a + c)
          / this.state.result.length}
          ms
        </div>
      )}
```

React 조건문 2 : 보우 연산자

```
{this.state.result.length === 0 && (
        <div>
          평균 시간 :
          {this.state.result.reduce((a, c) => a + c)
          / this.state.result.length}
          ms
        </div>
      )}
```

# setTimeout 넣어 반응속도체크

```
import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = (e) => {
    const { state, message, result } = this.state;
    if (state === "waiting") {
      this.setState({ state: "ready", message: "초록색이 되면 클릭하세요." });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      // 성급하게 클릭
      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요.",
      });
    } else if (state === "now") {
      // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요.",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>평균 시간 : {result.reduce((a, b) => a + b) / result.length}ms</div>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;

```

# 성능체크와 Q&A

성능체크를 하기 위해서는 브라우저에서 React Component를 받아와서 처리해주면된다.

지금보면 화면 클릭부분이 계속 재 rendering된다. 이를 막기 위해서는 PureComponent를 써주면 될거 같은데... 잘 안된다. 그래서 재 rendering 될것만 따로 컴포넌트를 떼어주어야 한다. <b>해당 컴포넌트에서 재 rendering 될거만 남겨놓고 그 외의 것들은 다른 컴포넌트로 빼주면 성능최적화가 이루어진다.</b>

아니면 useMemo나 useCallback, useEffect를 써야하는데 이건 직접 연구해보자.

# 반응속도체크 Hooks로 전환하기

useState : return 부분이 다시 실행됨
useRef : return 부분이 다시 실행되지 않음

이 두차이 빼고는... 없음. 그래서 값이 바뀌어도 render할 필요없으면 useRef해야함.

그리고 제발 useRef쓸때 current좀 붙이자.

# return 내부에 for과 if 쓰기

사실 잘 안쓴다. 그냥 쉬어가는 부분이라고 생각하자.
IIFE의 형태로 해서 함수 내부에 처리할수는 있는데 지저분해진다. 쓰더라도 그냥 함수를 분리하는 것이 낫다.

예를들어 위의 이미지와 같이 함수를 실행시키면서 if와 for문을 쓰는게 훨씬더 코드가 보기 좋아진다.
