import React from "react";
import todoData from "./todoData";
import TodoAppPhase4Render from "./TodoAppPhase4Render";

class TodoAppPhase4 extends React.Component {
  constructor() {
    super();
    this.state = { data: todoData };
  }
  render() {
    const todoDataMap = this.state.data.map(todo => (
      <TodoAppPhase4Render
        key={todo.id}
        todo={todo.completed}
        text={todo.text}
      />
    ));
    return todoDataMap;
  }
}

export default TodoAppPhase4;
