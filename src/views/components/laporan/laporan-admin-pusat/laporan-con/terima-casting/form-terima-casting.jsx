import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../../application/selectors/ui";
import jenisbahan from "../../../../../../application/selectors/jenisbahan";
import "antd/dist/antd.css";
import { getAllTerimaCasting } from "../../../../../../application/actions/terimacasting";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaCasting?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaCasting.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanTerimaCasting.values.kode_jenis_bahan,
        kriteria: state.form.FormLaporanTerimaCasting.values.kriteria,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: state.jenisbahan.feedback[0]?.kode_jenis_bahan,
        kriteria: "semua",
      },
    };
  }
};

let FormLaporanTerimaCasting = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);

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
          <Field
            name="kriteria"
            label={<span style={{ fontSize: "13px" }}>Kriteria</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kriteria"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="semua" key="1">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="emas" key="2">
              <span style={{ fontSize: "13px" }}>Emas</span>
            </Option>
            <Option value="batu" key="3">
              <span style={{ fontSize: "13px" }}>Batu</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaCasting)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaCasting = reduxForm({
  form: "FormLaporanTerimaCasting",
  enableReinitialize: true,
})(FormLaporanTerimaCasting);
export default connect(maptostate, null)(FormLaporanTerimaCasting);
