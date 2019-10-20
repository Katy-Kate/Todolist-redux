import React from "react";
import Todo from "./src/components/Todo";
import AddTodo from "./src/components/Form";

class TodoContainer extends React.Component {


  deleteTodo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />

        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoContainer;
