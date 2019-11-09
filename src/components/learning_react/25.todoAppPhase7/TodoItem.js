import React from "react";
import "./TodoItem.css";

/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

function TodoItem(props) {
  const checkedinputsStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      {/* in that pareagraph we apply className inputUnChecked only in case the item is unchecked, but in case it is checked we apply style const checkedinputsStyle */}
      <p
        className={!props.item.completed && "inputUnChecked"}
        style={props.item.completed ? checkedinputsStyle : null}
      >
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
