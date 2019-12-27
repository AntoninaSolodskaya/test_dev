import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { Field } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import CustomTextField from "../../../@common/fields/CustomTextField";

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px"
  },
  btn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    margin: "0 auto",
    marginTop: "20px",
    width: "50%"
  },
  color: {
    color: "red"
  }
});

export const Form = ({
  handleSubmit,
  pristine,
  submitting,
  createNewItemAction,
  updateItemAction,
  initialValues
}) => {
  const classes = useStyles();
  console.log("initialValues", initialValues);

  let history = useHistory();

  const [isOpen, toggleIsOpen] = React.useState(false);

  const handleOpen = () => {
    toggleIsOpen(true);
  };

  const submit = values => {
    if (initialValues.id) {
      updateItemAction(values);
      history.goBack();
    } else {
      createNewItemAction(values);
      // history.goBack();
      handleOpen();
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(submit)} className={classes.form}>
        <Field
          name="title"
          component={CustomTextField}
          label="Title"
          onChange={() => {
            handleOpen();
          }}
        />
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
            Submit
          </Button>
          {isOpen ? <p className={classes.color}>I'm open!</p> : <p />}
        </div>
      </form>
    </Container>
  );
};
