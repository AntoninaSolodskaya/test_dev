import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todoReducer from "../pages/TodoList/Form/todoReducer";

const rootReducer = combineReducers({
  form: formReducer,
  list: todoReducer
});

export default rootReducer;
