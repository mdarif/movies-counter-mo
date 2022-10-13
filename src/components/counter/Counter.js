import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add() {
    /**
     * Calls to setState are asynchronous
     *
     * Pass an updater function instead of an object if you need to
     * compute values based on the current state
     */
    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  minus() {
    // this.setState({ count: this.state.count - 1 });
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  addFive() {
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
  }

  minusFive() {
    this.minus();
    this.minus();
    this.minus();
    this.minus();
    this.minus();
  }

  render() {
    return (
      <div>
        <h1>Count =&gt; {this.state.count}</h1>;
        <button onClick={() => this.addFive()}>Increment </button>
        <button onClick={() => this.minusFive()}>Decrement </button>
      </div>
    );
  }
}

export default Counter;
