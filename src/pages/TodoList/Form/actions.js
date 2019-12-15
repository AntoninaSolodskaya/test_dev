import { createAction } from "redux-actions";

export const addTodo = createAction("ADD_TODO", list => list);
export const copyTodo = createAction("COPY_TODO");
export const removeTodo = createAction("REMOVE_TODO");
