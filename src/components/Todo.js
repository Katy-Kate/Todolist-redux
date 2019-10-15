import React from "react";

const Todo = ({ todos,deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id} className="collection-item row">
          <span className="col s8 ">{todo.content}</span>
            <span className="waves-effect waves-light btn-small" onClick={()=>deleteTodo(todo.id)}>x</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todo;
