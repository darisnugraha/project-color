import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import batu from "../../../../../application/selectors/batu";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import "antd/dist/antd.css";
import { getAllKirimBatu } from "../../../../../application/actions/kirimbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanKirimBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanKirimBatu.values.date,
        kode_batu: state.form.FormLaporanKirimBatu.values.kode_batu,
        divisi: state.form.FormLaporanKirimBatu.values.divisi,
        status_kirim: state.form.FormLaporanKirimBatu.values.status_kirim,
        kode_jenis_bahan:
          state.form.FormLaporanKirimBatu.values.kode_jenis_bahan,
        alloy: state.form.FormLaporanKirimBatu.values.alloy,
        no_job_order: state.form.FormLaporanKirimBatu.values.no_job_order,
        switch_no: state.form.FormLaporanKirimBatu.values.switch_no,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_batu: state.batu.feedback[1]?.kode_batu,
        divisi: "SEMUA",
        status_kirim: "PRODUKSI",
        kode_jenis_bahan: state.jenisbahan.feedback[0]?.kode_jenis_bahan,
        alloy: false,
        no_job_order: undefined,
        switch_no: "true",
      },
    };
  }
};

let FormLaporanKirimBatu = (prop) => {
  const [inputText, setstate] = useState(true);
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataKodeBatu = useSelector(batu.getAllBatu);
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
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="ADMIN1" key="ADMIN1">
              <span style={{ fontSize: "13px" }}>Admin 1</span>
            </Option>
            <Option value="ADMIN2" key="ADMIN2">
              <span style={{ fontSize: "13px" }}>Admin2</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Field
            name="status_kirim"
            label={<span style={{ fontSize: "13px" }}>Status Kirim</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Status Kirim"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="PRODUKSI" key="PRODUKSI">
              <span style={{ fontSize: "13px" }}>Produksi</span>
            </Option>
            <Option value="REPAIR" key="REPAIR">
              <span style={{ fontSize: "13px" }}>Repair</span>
            </Option>
            <Option value="WAX SETTING" key="WAX SETTING">
              <span style={{ fontSize: "13px" }}>Wax Setting</span>
            </Option>
            <Option value="MASTER ORIGININAL" key="MASTER ORIGININAL">
              <span style={{ fontSize: "13px" }}>Master Original (Sample)</span>
            </Option>
          </Field>
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
            label={<span style={{ fontSize: "13px" }}>Alloy</span>}
            name="alloy"
            id="alloy"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Field
            name="switch_no"
            label={<span style={{ fontSize: "13px" }}>Input No Transaksi</span>}
            checkedChildren="No Job Order"
            unCheckedChildren="No Batu Kirim"
            component={styleAntd.ASwitch}
            checked={inputText}
            onChange={(e) => setstate(e)}
          />
        </Col>
        <Col offset={1}>
          <Field
            name={inputText ? "no_job_order" : "no_batu_kirim"}
            type="text"
            label={
              <span style={{ fontSize: "13px" }}>
                {inputText ? "No Job Order" : "No Batu Kirim"}
              </span>
            }
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder={
              inputText ? "Masukkan No Job Order" : "Masukkan No Batu Kirim"
            }
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimBatu = reduxForm({
  form: "FormLaporanKirimBatu",
  enableReinitialize: true,
})(FormLaporanKirimBatu);
export default connect(maptostate, null)(FormLaporanKirimBatu);
