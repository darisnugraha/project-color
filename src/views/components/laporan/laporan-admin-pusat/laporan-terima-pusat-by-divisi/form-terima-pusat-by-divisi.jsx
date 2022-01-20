import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import "antd/dist/antd.css";
import {
  getAllTerimaPusatByDivisi,
  setDataTerimaPusatByDivisiSuccess,
} from "../../../../../application/actions/terimapusatbydivisi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaPusatByDivisi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaPusatByDivisi.values.date,
        divisi: state.form.FormLaporanTerimaPusatByDivisi.values.divisi,
        kode_jenis_bahan:
          state.form.FormLaporanTerimaPusatByDivisi.values.kode_jenis_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: "HAND WORKING",
        kode_jenis_bahan: "SEMUA",
      },
    };
  }
};

let FormLaporanTerimaPusatByDivisi = (prop) => {
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
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
            onChange={() =>
              prop.dispatch(setDataTerimaPusatByDivisiSuccess({ feedback: [] }))
            }
          >
            <Option value="HAND WORKING" key="HAND WORKING">
              <span style={{ fontSize: "13px" }}>Hand Working</span>
            </Option>
            <Option value="REPAIR" key="REPAIR">
              <span style={{ fontSize: "13px" }}>Repair</span>
            </Option>
            <Option value="TARIK KAWAT" key="TARIK KAWAT">
              <span style={{ fontSize: "13px" }}>Tarik Kawat</span>
            </Option>
            <Option value="LEBUR" key="LEBUR">
              <span style={{ fontSize: "13px" }}>Lebur</span>
            </Option>
          </Field>
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaPusatByDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaPusatByDivisi = reduxForm({
  form: "FormLaporanTerimaPusatByDivisi",
  enableReinitialize: true,
})(FormLaporanTerimaPusatByDivisi);
export default connect(maptostate, null)(FormLaporanTerimaPusatByDivisi);
