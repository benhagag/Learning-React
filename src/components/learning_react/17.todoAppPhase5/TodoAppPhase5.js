import React from "react";
import todoData from "./todoData";
import TodoAppPhase5Render from "./TodoAppPhase5Render";

class TodoAppPhase5 extends React.Component {
  constructor() {
    super();
    this.state = { data: todoData };
  }
  render() {
    const todoDataMap = this.state.data.map(todo => (
      <TodoAppPhase5Render
        key={todo.id}
        todo={todo.completed}
        text={todo.text}
      />
    ));
    return todoDataMap;
  }
}

export default TodoAppPhase5;
