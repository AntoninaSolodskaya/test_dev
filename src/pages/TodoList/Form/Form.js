import React from "react";

import { Field } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import CustomTextField from "../../../@common/fields/CustomTextField";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px"
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  }
}));

export const Form = ({ handleSubmit, pristine, reset, submitting }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Field name="title" component={CustomTextField} label="Title" />

      <Field
        name="description"
        component={CustomTextField}
        label="Description"
      />
      <div className={classes.btn}>
        <Button
          type="submit"
          disabled={pristine || submitting}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </div>
    </form>
  );
};
