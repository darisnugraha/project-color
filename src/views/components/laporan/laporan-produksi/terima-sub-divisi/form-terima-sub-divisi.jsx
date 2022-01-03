import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import "antd/dist/antd.css";
import { getAllTerimaSubDivisi } from "../../../../../application/actions/terimasubdivisi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanSubDivisi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanSubDivisi.values.date,
        divisi: state.form.FormLaporanSubDivisi.values.divisi,
        bahan: state.form.FormLaporanSubDivisi.values.bahan,
        alloy: state.form.FormLaporanSubDivisi.values.alloy,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: "SEMUA",
        bahan: "SEMUA",
        alloy: false,
      },
    };
  }
};

let FormLaporanSubDivisi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const datadivisi = [
    {
      Divisi: "SIKAT",
    },
    {
      Divisi: "DALAM",
    },
    {
      Divisi: "LAP",
    },
    {
      Divisi: "HALUS",
    },
    {
      Divisi: "JADI",
    },
    {
      Divisi: "QC",
    },
    {
      Divisi: "TUMBLING KERING",
    },
    {
      Divisi: "TUMBLING BASAH",
    },
  ];

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
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {datadivisi.map((item) => {
              return (
                <Option value={item.Divisi} key={item.Divisi}>
                  <span style={{ fontSize: "13px" }}>{item.Divisi}</span>
                </Option>
              );
            })}
          </Field>
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
            onClick={() => prop.dispatch(getAllTerimaSubDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSubDivisi = reduxForm({
  form: "FormLaporanSubDivisi",
  enableReinitialize: true,
})(FormLaporanSubDivisi);
export default connect(maptostate, null)(FormLaporanSubDivisi);
