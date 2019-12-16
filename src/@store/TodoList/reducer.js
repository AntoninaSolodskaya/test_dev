import { TodoList } from "./TodoList";
import { handleActions } from "redux-actions";

import {
  createNewItemAction,
  copyItemAction,
  updateItemAction,
  deleteItemAction
} from "./actions";

const createNewItemHandler = (state, { payload }) => {
  return {
    ...state,
    list: [
      ...(state.list || []),
      {
        ...payload,
        id: state.list.length + 1
      }
    ]
  };
};

// return [
//   ...state.filter(contact => contact.id !== payload.contact.id),
//   Object.assign({}, payload.contact)
// ]
const updateItemHandler = (state, { payload }) => {
  return {
    ...state,
    list: [
      ...state.list.filter(item => item.id !== payload.item.id),
      payload
      // {
      //   ...payload.id,
      //   payload
      // }
    ]
  };
};

const copyItemHandler = (state, { payload }) => {
  return {
    ...state,
    list: [
      ...state.list,
      {
        id: state.list.length + 1,
        payload
      }
    ]
  };
};

const deleteItemHandler = (state, { payload }) => {
  return {
    ...state,
    list: [...state.list.filter(item => item.id !== payload)]
  };
};

export const todoList = handleActions(
  {
    [createNewItemAction]: createNewItemHandler,
    [updateItemAction]: updateItemHandler,
    [deleteItemAction]: deleteItemHandler,
    [copyItemAction]: copyItemHandler
  },
  new TodoList()
);
