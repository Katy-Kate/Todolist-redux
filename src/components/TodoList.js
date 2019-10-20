import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/postActions";

const TodoList = props => {
  return props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div key={todo.id} className="collection-item row">
          <span className="col s8 ">{todo.content}</span>
          <span
            className="waves-effect waves-light btn-small"
            onClick={() => props.deleteTodo(todo.id)}
          >
            x
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left</p>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
