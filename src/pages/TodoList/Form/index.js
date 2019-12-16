import { reduxForm, reset } from "redux-form";
import { connect } from "react-redux";

import { Form } from "./Form";
import {
  createNewItemAction,
  updateItemAction
} from "../../../@store/TodoList";

const afterSubmit = (result, dispatch) => dispatch(reset("addList"));

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

const mapState = (state, ownProps) => {
  const itemId = ownProps.match.params.id;

  let item = {};

  if (itemId && state.todoList.list.length > 0) {
    item = state.todoList.list.filter(item => item.id === itemId)[0];
    console.log(item);
  }

  return {
    initialValues: item
  };
};

const actions = {
  createNewItemAction,
  updateItemAction
};

export default connect(
  mapState,
  actions
)(
  reduxForm({
    form: "addList",
    validate,
    onSubmitSuccess: afterSubmit,
    enableReinitialize: true
  })(Form)
);
