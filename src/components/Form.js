import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = content => {
    this.setState({ content });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.content === "") {
      return;
    }
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Add new todo:</label>
          <input
            value={this.state.content}
            onChange={event => this.handleChange(event.target.value)}
            type="text"
          />
        </form>
      </div>
    );
  }
}
export default AddTodo;
