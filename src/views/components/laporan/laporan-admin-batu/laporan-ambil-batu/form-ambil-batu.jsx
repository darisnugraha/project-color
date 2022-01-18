import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllAmbilBatu } from "../../../../../application/actions/ambilbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanAmbilBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanAmbilBatu.values.date,
        alasan: state.form.FormLaporanAmbilBatu.values.alasan,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        alasan: "SEMUA",
      },
    };
  }
};

let FormLaporanAmbilBatu = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);

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
            name="alasan"
            label={<span style={{ fontSize: "13px" }}>Alasan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Alasan"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="AMBIL SALDO" key="AMBIL SALDO">
              <span style={{ fontSize: "13px" }}>Ambil Saldo</span>
            </Option>
            <Option value="ADJUSTMENT" key="ADJUSTMENT">
              <span style={{ fontSize: "13px" }}>Adjustment</span>
            </Option>
            <Option value="KIRIM HANDWORKING" key="KIRIM HANDWORKING">
              <span style={{ fontSize: "13px" }}>Kirim Handworking</span>
            </Option>
            <Option value="REPARASI MARKETING" key="REPARASI MARKETING">
              <span style={{ fontSize: "13px" }}>Reparasi Marketing</span>
            </Option>
            <Option value="SERVICE CUSTOMER" key="SERVICE CUSTOMER">
              <span style={{ fontSize: "13px" }}>Service Customer</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllAmbilBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanAmbilBatu = reduxForm({
  form: "FormLaporanAmbilBatu",
  enableReinitialize: true,
})(FormLaporanAmbilBatu);
export default connect(maptostate, null)(FormLaporanAmbilBatu);
