import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllSaldoStockBatu } from "../../../../../application/actions/saldostockbatu";

const dateFormat = "MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanSaldoStockBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanSaldoStockBatu.values.date,
      },
    };
  } else {
    return {
      initialValues: {
        date: moment(today, dateFormat),
      },
    };
  }
};

let FormLaporanSaldoStockBatu = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);

  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Bulan</span>}
            component={styleAntd.ADatePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            picker="month"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllSaldoStockBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoStockBatu = reduxForm({
  form: "FormLaporanSaldoStockBatu",
  enableReinitialize: true,
})(FormLaporanSaldoStockBatu);
export default connect(maptostate, null)(FormLaporanSaldoStockBatu);
