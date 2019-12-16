import React from "react";

import Container from "@material-ui/core/Container";

import TodoItem from "./TodoItem";
import Form from "./Form";

export const TodoList = ({
  todos,
  createNewItemAction,
  deleteItemAction,
  copyItemAction
}) => {
  return (
    <Container maxWidth="sm">
      {todos &&
        todos.map((item, i) => (
          <TodoItem
            {...item}
            key={i}
            deleteItemAction={deleteItemAction}
            copyItemAction={copyItemAction}
          />
        ))}
      <Form createNewItemAction={createNewItemAction} />
    </Container>
  );
};
