import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import {
  getAllPOMasuk,
  setDataPOMasukSuccess,
  setType,
} from "../../../../../application/actions/pomasuk";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanPOMasuk?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanPOMasuk.values.date,
        type: state.form.FormLaporanPOMasuk.values.type,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        type: "DETAIL",
      },
    };
  }
};

let FormLaporanPOMasuk = (prop) => {
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
            name="type"
            label={<span style={{ fontSize: "13px" }}>Type</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Type"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              prop.dispatch(setType({ type: val }));
              prop.dispatch(setDataPOMasukSuccess({ feedback: [] }));
            }}
          >
            <Option value="DETAIL" key="DETAIL">
              <span style={{ fontSize: "13px" }}>Detail</span>
            </Option>
            <Option value="JENIS BARANG" key="JENIS BARANG">
              <span style={{ fontSize: "13px" }}>Jenis Barang</span>
            </Option>
            <Option value="FORMAT BARU" key="FORMAT BARU">
              <span style={{ fontSize: "13px" }}>Format Baru</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllPOMasuk)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanPOMasuk = reduxForm({
  form: "FormLaporanPOMasuk",
  enableReinitialize: true,
})(FormLaporanPOMasuk);
export default connect(maptostate, null)(FormLaporanPOMasuk);
