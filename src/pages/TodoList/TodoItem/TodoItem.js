import React from "react";

import { useHistory } from "react-router-dom";
import * as PropTypes from "prop-types";

import { styles } from "./styles";

import SimpleMenu from "../../SimpleMenu";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const items = [
  { label: "delete", value: "Delete" },
  { label: "copy", value: "Copy" },
  { label: "update", value: "Update" }
];

export const TodoItem = ({
  id,
  deleteItemAction,
  title,
  description,
  copyItemAction
}) => {
  const classes = styles();

  let history = useHistory();

  const handleClickItem = event => {
    if (event === "Delete") {
      deleteItemAction(id);
    }
    if (event === "Copy") {
      copyItemAction(id);
    }
    if (event === "Update") {
      history.push(`/formupdate/${id}`);
    }
  };

  return (
    <Paper className={classes.root} elevation={6}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
      <SimpleMenu items={items} onClick={handleClickItem} />
    </Paper>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};
