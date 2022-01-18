import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import batu from "../../../../../application/selectors/batu";
import "antd/dist/antd.css";
import { getAllTambahBatu } from "../../../../../application/actions/tambahbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanReturBatuWax?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanReturBatuWax.values.date,
        no_job_order: state.form.FormLaporanReturBatuWax.values.no_job_order,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        no_job_order: undefined,
      },
    };
  }
};

let FormLaporanReturBatuWax = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataKodeBatu = useSelector(batu.getAllBatu);

  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
          />
        </Col>
        <Col offset={1}>
          <Field
            name="no_job_order"
            type="text"
            label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan No Job Order"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTambahBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanReturBatuWax = reduxForm({
  form: "FormLaporanReturBatuWax",
  enableReinitialize: true,
})(FormLaporanReturBatuWax);
export default connect(maptostate, null)(FormLaporanReturBatuWax);
