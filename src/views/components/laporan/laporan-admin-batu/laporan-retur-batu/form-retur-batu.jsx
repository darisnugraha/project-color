import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import batu from "../../../../../application/selectors/batu";
import "antd/dist/antd.css";
import { getAllReturBatu } from "../../../../../application/actions/returbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanReturBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanReturBatu.values.date,
        no_job_order: state.form.FormLaporanReturBatu.values.no_job_order,
        kode_batu: state.form.FormLaporanReturBatu.values.kode_batu,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_batu: state.batu.feedback[1]?.kode_batu,
        no_job_order: undefined,
      },
    };
  }
};

let FormLaporanReturBatu = (prop) => {
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
            name="kode_batu"
            label={<span style={{ fontSize: "13px" }}>Batu</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Batu"
            onBlur={(e) => e.preventDefault()}
          >
            {dataKodeBatu.map((item) => {
              if (item.kode_batu === "") {
                return false;
              } else {
                return (
                  <Option value={item.kode_batu} key={item.kode_batu}>
                    <span style={{ fontSize: "13px" }}>{item.kode_batu}</span>
                  </Option>
                );
              }
            })}
          </Field>
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
            onClick={() => prop.dispatch(getAllReturBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanReturBatu = reduxForm({
  form: "FormLaporanReturBatu",
  enableReinitialize: true,
})(FormLaporanReturBatu);
export default connect(maptostate, null)(FormLaporanReturBatu);
