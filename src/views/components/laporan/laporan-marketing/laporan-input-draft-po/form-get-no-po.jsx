import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import customer from "../../../../../application/selectors/customer";
import "antd/dist/antd.css";
import {
  getAllNoPO,
  setDataNoPOSuccess,
} from "../../../../../application/actions/nopo";
import { setDataInputDraftPOSuccess } from "../../../../../application/actions/inputdraftpo";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormGetNoPO?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormGetNoPO.values.date,
        customer: state.form.FormGetNoPO.values.customer,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        customer: "SEMUA",
      },
    };
  }
};

let FormGetNoPO = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datacustomer = useSelector(customer.getAllCustomer);

  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1}>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            onChange={() => {
              prop.dispatch(setDataNoPOSuccess([]));
              prop.dispatch(setDataInputDraftPOSuccess([]));
            }}
          />
        </Col>
        <Col offset={1}>
          <Field
            name="customer"
            label={<span style={{ fontSize: "13px" }}>Customer</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Customer"
            onBlur={(e) => e.preventDefault()}
            onChange={() => {
              prop.dispatch(setDataNoPOSuccess([]));
              prop.dispatch(setDataInputDraftPOSuccess([]));
            }}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {datacustomer.map((item) => {
              return (
                <Option value={item.kode_customer} key={item.kode_customer}>
                  <span style={{ fontSize: "13px" }}>{item.kode_customer}</span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllNoPO)}
            style={{ marginTop: 29 }}
          >
            Cari No PO
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormGetNoPO = reduxForm({
  form: "FormGetNoPO",
  enableReinitialize: true,
})(FormGetNoPO);
export default connect(maptostate, null)(FormGetNoPO);
