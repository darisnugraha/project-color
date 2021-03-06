import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import jenisbahan from "../../../../application/selectors/jenisbahan";
import { getAllKirimdesian } from "../../../../application/actions/kirimdesian";
import "antd/dist/antd.css";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanKirimDesian?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanKirimDesian?.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanKirimDesian?.values.kode_jenis_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: state.jenisbahan.feedback[0]?.kode_jenis_bahan,
      },
    };
  }
};

let FormLaporanKirimDesian = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  // eslint-disable-next-line
  const dispatch = useDispatch();

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
          />
        </Col>
        <Col offset={1}>
          <Field
            name="kode_jenis_bahan"
            label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kode Jenis Bahan"
            onBlur={(e) => e.preventDefault()}
          >
            {datajenisbahan.map((item) => {
              if (item.kode_jenis_bahan !== "ALLOY") {
                return (
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan}
                    </span>
                  </Option>
                );
              } else {
                return false;
              }
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimdesian)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimDesian = reduxForm({
  form: "FormLaporanKirimDesian",
  enableReinitialize: true,
})(FormLaporanKirimDesian);
export default connect(maptostate, null)(FormLaporanKirimDesian);
