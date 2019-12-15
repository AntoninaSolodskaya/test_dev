import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import reducer from "../pages/TodoList/reducer/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  list: reducer
});

export default rootReducer;
