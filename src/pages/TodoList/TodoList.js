import React from "react";

import Container from "@material-ui/core/Container";

import TodoItem from "./TodoItem";
import Form from "./Form";

export const TodoList = ({ list, addTodo, removeTodo }) => {
  return (
    <Container maxWidth="sm">
      {list &&
        list.map((item, i) => (
          <TodoItem item={item} removeTodo={removeTodo} key={i} />
        ))}
      <Form addTodo={addTodo} />
    </Container>
  );
};
