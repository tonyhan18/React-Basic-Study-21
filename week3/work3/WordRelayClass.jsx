const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "tonyhan",
    value: "",
    result: "",
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        value: "",
        result: "딩동댕",
        word: this.state.value,
      });
      this.inputRef.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.inputRef.focus();
    }
  };

  inputRef;

  onRefInput = (c) => {
    this.inputRef = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">글자를 입력해주세요</label>
          <input
            id="wordInput"
            className="wordInput"
            type="text"
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>제출</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}
module.exports = WordRelay;
