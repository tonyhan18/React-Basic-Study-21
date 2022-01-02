import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li key={this.props.index}>
        {this.props.value.try} - {this.props.value.result}
      </li>
    );
  }
}

export default Try;
