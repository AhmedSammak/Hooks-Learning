import React, { Component } from "react";

class LearnClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        <p> {this.state.count} </p>
      </div>
    );
  }
}

export default LearnClass;
