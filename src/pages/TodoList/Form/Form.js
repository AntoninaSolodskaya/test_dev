import React from "react";

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
    justifyContent: "center",
    marginTop: "20px"
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

  const submit = values => {
    // console.log(initialValues)
    if (initialValues.id) {
      updateItemAction(values);
      // history.goBack();
    } else {
      createNewItemAction(values);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(submit)} className={classes.form}>
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
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};
