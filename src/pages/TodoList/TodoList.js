import React from "react";

import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import TodoItem from "./TodoItem";

export const TodoList = ({
  todos,
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
      <Button component={Link} to="/form" variant="contained" color="primary">
        AddItem
      </Button>
    </Container>
  );
};
