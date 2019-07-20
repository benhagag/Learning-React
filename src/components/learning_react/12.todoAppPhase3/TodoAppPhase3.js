import React from "react";
import todoData from "./todoData";
import TodoAppPhase3Render from "./TodoAppPhase3Render";

function TodoAppPhase3() {
  const todoDataMap = todoData.map(todo => (
    <TodoAppPhase3Render key={todo.id} todo={todo} />
  ));

  return todoDataMap;
}

export default TodoAppPhase3;
