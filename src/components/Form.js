import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDO, handleChangeTodoContent } from "../actions/postActions";

class AddTodo extends Component {

  handleChange = content => {
    this.props.handleChangeTodoContent(content);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.newTodo.content === "") {
      return;
    }
    this.props.addToDO(this.props.newTodo);
    this.handleChange("");
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Add new todo:</label>
          <input
            value={this.props.newTodo.content}
            onChange={event => this.handleChange(event.target.value)}
            type="text"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newTodo: state.newTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDO: todo => dispatch(addToDO(todo)),
    handleChangeTodoContent: content =>
      dispatch(handleChangeTodoContent(content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
