import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
// eslint-disable-next-line
import { Field, reduxForm } from "redux-form";
import moment from "moment";
// import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import { getAllSaldobahan } from "../../../../application/actions/saldobahan";
import "antd/dist/antd.css";

const dateFormat = "DD/MM/YYYY";
const today = new Date();

const FormLaporanSaldoBahan = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          {/* <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Bulan</span>}
            component={styleAntd.ADatePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            defaultValue={moment(today, dateFormat)}
            picker="month"
          /> */}
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllSaldobahan)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "FormLaporanSaldoBahan",
  initialValues: {
    date: moment(today, dateFormat),
  },
})(FormLaporanSaldoBahan);
