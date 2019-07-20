import React from "react";
import "./TodoAppPhase4.css";

class TodoAppPhase4Rendeer extends React.Component {
  constructor(props) {
    super();
    this.state = { checked: props.todo, text: props.text };
  }
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.state.checked} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default TodoAppPhase4Rendeer;
