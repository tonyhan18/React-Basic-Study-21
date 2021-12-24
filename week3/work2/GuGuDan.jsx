const React = require("react");
const { useRef, useState } = require("react"); // 구조분해문법

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(() => {
        return "정답" + value;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("꽝");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} x {second} 의 답은?
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" ref={inputRef} value={value} onChange={onChange} />
        <button>제출</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
