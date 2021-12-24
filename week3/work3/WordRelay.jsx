const { useState, useRef } = require("react");
const React = require("react");

const WordRelay = () => {
  const [word, setWord] = useState("Tonyhan");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("딩동댕");
      inputRef.current.focus();
    } else {
      setValue("");
      setResult("땡");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} value={value} onChange={onChange} />
        <button>제출</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
