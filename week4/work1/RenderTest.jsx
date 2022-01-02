import React, { Component } from "react";

class Test extends Component {
  state = {
    count: 0,
  };

  onClick = () => {};
  render() {
    console.log(`랜더링 {this.state}`);
  }
}
