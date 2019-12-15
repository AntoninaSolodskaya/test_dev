import { reduxForm } from "redux-form";

import { Form } from "./Form";

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 3) {
    errors.title = "Invalid title lenght";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 6) {
    errors.description = "Description should be at least 6 characters long";
  }
  return errors;
};

export default reduxForm({
  form: "addList",
  validate
})(Form);
