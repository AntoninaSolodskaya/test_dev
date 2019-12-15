import React from "react";

import { styles } from "./styles";

import SimpleMenu from "../../SimpleMenu";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const TodoItem = () => {
  const classes = styles();

  return (
    <Paper className={classes.root} elevation={6}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
      <SimpleMenu />
    </Paper>
  );
};
