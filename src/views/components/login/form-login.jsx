import { Form, Button } from "antd";
import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "../../../infrastructure/shared/style";
import { sendLogin } from "../../../application/actions/login";

const LoginForm = (prop) => {
  const { handleSubmit, pristine, submitting } = prop;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="user_id"
        type="text"
        placeholder="Username"
        component={style.inputStyle1}
      />
      <Field
        name="password"
        type="password"
        placeholder="Password"
        component={style.inputStyle1}
      />
      <Button
        type="primary"
        htmltype="button"
        disabled={pristine || submitting}
        onClick={() => prop.dispatch(sendLogin)}
      >
        Submit
      </Button>
      <hr />
      <p className="text-center text-grey-darker">
        &copy; Color Admin All Right Reserved 2019
      </p>
    </Form>
  );
};

export default reduxForm({
  form: "LoginForm",
})(LoginForm);
