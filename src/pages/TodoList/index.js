import { connect } from "react-redux";

import {
  createNewItemAction,
  deleteItemAction,
  copyItemAction,
  updateItemAction
} from "../../@store/TodoList";

import { TodoList } from "./TodoList";

const mapState = state => ({
  todos: state.todoList.list
});

const actions = {
  createNewItemAction,
  deleteItemAction,
  copyItemAction,
  updateItemAction
};

export default connect(
  mapState,
  actions
)(TodoList);
