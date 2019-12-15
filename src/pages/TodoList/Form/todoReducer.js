import { createAction, handleAction } from "redux-actions";

const initialState = [];

const addTodo = createAction("ADD_TODO", item => item);
const copyTodo = createAction("COPY_TODO");
const removeTodo = createAction("REMOVE_TODO", itemId => itemId);

export const todoReducer = handleAction(
  [addTodo],
  (state, action) => {
    return [...state, Object.assign({}, action.payload)];
  },
  // [removeTodo],
  // (state, action) => {
  //   return [
  //     ...state.filter(item => item.id !== action.itemId)
  //   ]
  // },
  initialState
);

export default todoReducer;
