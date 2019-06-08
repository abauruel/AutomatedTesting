import React, { Component } from "react";

// import { Container } from './styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as TodoActions } from "../src/store/ducks/todos";

class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleinputChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };
  handleAddTodo = () => {
    this.props.addTodo(this.state.newTodo);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          name="todo"
          onChange={this.handleinputChange}
          value={this.state.newTodo}
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos.data
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
