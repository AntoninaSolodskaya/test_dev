import React from "react";

import * as PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const items = ["text67 text text", "text4 text5 text6", "text7 text8 text9"];

const Main = ({ getLabel, getValue, onChange }) => {
  const classes = useStyles();

  console.log("items", items);
  var len = items.length;
  var indices = new Array(len);
  for (var i = 0; i < len; ++i) indices[i] = i;
  indices.sort(function(a, b) {
    return items[a] < items[b] ? -1 : items[a] > items[b] ? 1 : 0;
  });
  console.log(indices);

  const sortByOrder = () => {
    let newIndices = new Array(len);
    for (var j = 0; j < len; ++j) newIndices[j] = j;
    newIndices.sort(function(a, b) {
      return items[a] > items[b] ? 1 : 0;
    });
    console.log(newIndices);
  };
  sortByOrder();

  return <Paper className={classes.root} onChange={sortByOrder} />;
};

export default Main;

Main.propTypes = {
  items: PropTypes.array,
  getLabel: PropTypes.func,
  getValue: PropTypes.func
};

Main.defaultProps = {
  getLabel: title => title.label,
  getValue: title => title.value,
  onChange: () => {}
};
