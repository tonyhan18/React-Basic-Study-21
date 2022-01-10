import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMsg] = useState("클릭해서 시작");
  const [result, setResult] = useState([]);
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMsg("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMsg("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(timeout);
      // 성급하게 클릭
      setState("waiting");
      setMsg("너무 성급하시군요! 초록색이 된 후에 클릭하세요");
    } else if (state === "now") {
      // 반응속도 체크
      endTime.current = new Date();
      setState("waiting");
      setMsg("클릭해서 시작하세요");
      setResult((preResult) => {
        return [...preResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setState({
      result: [],
    });
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간 : {result.reduce((a, b) => a + b) / result.length}ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
