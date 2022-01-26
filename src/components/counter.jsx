import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //This method is invoked immediately after updating occurs. This method is not called for the initial render.
    console.log("prevProps", prevProps, " prevState", prevState);
  }

  componentWillUnmount() {
    //This method is called when a component is being removed from the DOM:
    console.log("Counter - Unmount");
  }

  // state = {
  //   value: this.props.counter.value,
  // };

  // constructor() {
  //   super(); // base constructor
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (e) => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span
            className={`badge m-2 badge-${
              this.props.counter.value === 0 ? "warning" : "primary"
            }`}
          >
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
