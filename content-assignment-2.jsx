import React from "react";

class toggleData extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  increaseItem = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseItem = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>

        <button onClick={this.increaseItem}>increment</button>
        <button onClick={this.decreaseItem}>decrement</button>
      </div>
    );
  }
}

export default toggleData;
