// import { Button, Card, Form } from 'react-bootstrap';
import { Form, Button, Card } from 'antd';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../../../../infrastructure/shared/style';
import { sendLogin } from '../../../../application/actions/login';

const LoginForm = (prop) => {
  const { handleSubmit, pristine, submitting } = prop;
  return (
    <Card title="Form Login" style={{ width: '50vh', marginTop: '15vh', marginLeft: '80vh' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Field name="user_id" type="text" label="Email" component={style.inputStyle1} />
        </Form.Item>
        <Form.Item>
          <Field name="password" type="password" label="Password" component={style.inputStyle1} />
        </Form.Item>
        <Button
          type="primary"
          htmltype="button"
          disabled={pristine || submitting}
          onClick={() => prop.dispatch(sendLogin)}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
