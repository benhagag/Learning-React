import React from "react";
import ChildState from "./ChildState";
import StatePractice from "./practice/StatePractice";
import StatePractice2 from "./practice2/StatePractice2";

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
        <h2>This is state preactice part 2</h2>
        <StatePractice2 />
      </div>
    );
  }
}

export default State;
