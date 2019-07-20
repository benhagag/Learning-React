import React from "react";
import ChildState from "./ChildState";
import StatePractice from "./practice/StatePractice";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "the state says YES !!",
      textForChild: "Hello I'm props from parent which found in my parent state"
    };
  }
  render() {
    return (
      <div>
        <h2>Is state important to know ?? {this.state.answer}</h2>
        <h2>This is a child Componenet in state componenet</h2>
        <ChildState text={this.state.textForChild} />
        <h2>This is state preactice</h2>
        <StatePractice />
      </div>
    );
  }
}

export default State;
