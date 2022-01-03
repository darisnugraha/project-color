import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import saldosubdivisi from "../../../../../application/selectors/saldosubdivisi";
import "antd/dist/antd.css";
import {
  getAllSaldoSubDivisi,
  getType,
  setDataSaldoSubDivisiSuccess,
} from "../../../../../application/actions/saldosubdivisi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanSaldoSubDivisi?.values !== undefined) {
    return {
      initialValues: {
        type: state.form.FormLaporanSaldoSubDivisi.values.type,
        date: state.form.FormLaporanSaldoSubDivisi.values.date,
        bahan: state.form.FormLaporanSaldoSubDivisi.values.bahan,
        alloy: state.form.FormLaporanSaldoSubDivisi.values.alloy,
      },
    };
  } else {
    return {
      initialValues: {
        type: "ALL",
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        bahan: "SEMUA",
        alloy: false,
      },
    };
  }
};

let FormLaporanSaldoSubDivisi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const type = useSelector(saldosubdivisi.getType);

  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="type"
            label={<span style={{ fontSize: "13px" }}>Type Laporan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Type"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              dispatch(getType({ type: val }));
              dispatch(setDataSaldoSubDivisiSuccess({ feedback: [] }));
            }}
          >
            <Option value="ALL" key="ALL">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="HARIAN" key="HARIAN">
              <span style={{ fontSize: "13px" }}>Harian</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1} style={{ display: type === "ALL" ? "none" : "" }}>
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
            name="bahan"
            label={<span style={{ fontSize: "13px" }}>Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Bahan"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
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
            label={<span style={{ fontSize: "13px" }}>Alloy</span>}
            name="alloy"
            id="alloy"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllSaldoSubDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoSubDivisi = reduxForm({
  form: "FormLaporanSaldoSubDivisi",
  enableReinitialize: true,
})(FormLaporanSaldoSubDivisi);
export default connect(maptostate, null)(FormLaporanSaldoSubDivisi);
