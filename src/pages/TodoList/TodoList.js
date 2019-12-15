import React from "react";

import Container from "@material-ui/core/Container";

import { styles } from "./styles";

import TodoItem from "./TodoItem";
import Form from "./Form";

export const TodoList = () => {
  const classes = styles();

  return (
    <Container maxWidth="sm">
      <TodoItem />
      <Form />
    </Container>
  );
};
