import React from "react";

class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button>Change State!</button>
      </div>
    );
  }
}

export default ChangingState;
