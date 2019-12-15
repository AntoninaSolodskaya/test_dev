import React from "react";

import { styles } from "./styles";

import SimpleMenu from "../../SimpleMenu";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const TodoItem = ({ item, removeTodo }) => {
  const classes = styles();

  return (
    <Paper className={classes.root} elevation={6}>
      <Typography variant="h5" component="h3">
        {item.title}
      </Typography>
      <Typography component="p">{item.description}</Typography>
      <SimpleMenu removeTodo={removeTodo} />
    </Paper>
  );
};
