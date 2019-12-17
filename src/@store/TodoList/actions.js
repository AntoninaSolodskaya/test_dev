import { createAction } from "redux-actions";

const PREFIX = "TODO_LIST";

export const createNewItemAction = createAction(`${PREFIX}/CREATE_TODO`);

export const copyItemAction = createAction(
  `${PREFIX}/COPY_TODO`,
  itemId => itemId,
  item => item
);

export const updateItemAction = createAction(
  `${PREFIX}/UPDATE_TODO`,
  itemId => itemId,
  item => item
);

export const deleteItemAction = createAction(`${PREFIX}/DELETE_TODO`);
