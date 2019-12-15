import { connect } from "react-redux";

import { addTodo, removeTodo } from "./Form/actions";

import { TodoList } from "./TodoList";

const mapState = state => ({
  list: state.list
});

const actions = { addTodo, removeTodo };

export default connect(
  mapState,
  actions
)(TodoList);
