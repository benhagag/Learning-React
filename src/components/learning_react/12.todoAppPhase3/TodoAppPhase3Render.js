import React from "react";
import "./TodoAppPhase3.css";

function TodoAppPhase3Rendeer(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          console.log("This is changed");
        }}
      />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default TodoAppPhase3Rendeer;
