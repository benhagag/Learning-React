import React from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";

class TodoAppPhase7 extends React.Component {
  constructor() {
    super();
    this.state = { todos: todosData };
  }

  handleChange(id) {
    console.log(id);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange.bind(this)}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default TodoAppPhase7;
