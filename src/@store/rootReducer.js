import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { todoList } from "./TodoList/reducer";

const rootReducer = combineReducers({
  todoList,
  form: formReducer
});

export default rootReducer;
