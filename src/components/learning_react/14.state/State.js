import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = { answer: "the state says YES !!" };
  }
  render() {
    return (
      <div>
        <h2>Is state important to know ?? {this.state.answer}</h2>
      </div>
    );
  }
}

export default State;
