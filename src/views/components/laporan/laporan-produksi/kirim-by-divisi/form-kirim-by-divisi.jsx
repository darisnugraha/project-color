import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import design from "../../../../../application/selectors/design";
import divisi from "../../../../../application/selectors/divisi";
import kodejenis from "../../../../../application/selectors/kodejenis";
import kirimbydivisi from "../../../../../application/selectors/kirimbydivisi";
import "antd/dist/antd.css";
import {
  getAllKirimByDivisi,
  getDivisi,
  setDataKirimByDivisiSuccess,
} from "../../../../../application/actions/kirimbydivisi";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanKirimByDivisi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanKirimByDivisi.values.date,
        divisi: state.form.FormLaporanKirimByDivisi.values.divisi,
        kode_jenis_bahan:
          state.form.FormLaporanKirimByDivisi.values.kode_jenis_bahan,
        design: state.form.FormLaporanKirimByDivisi.values.design,
        tujuan: state.form.FormLaporanKirimByDivisi.values.tujuan,
        jenis: state.form.FormLaporanKirimByDivisi.values.jenis,
        no_job_order: state.form.FormLaporanKirimByDivisi.values.no_job_order,
        alloy: state.form.FormLaporanKirimByDivisi.values.alloy,
        reparasi: state.form.FormLaporanKirimByDivisi.values.reparasi,
        ekspor: state.form.FormLaporanKirimByDivisi.values.ekspor,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: state.divisi.feedback[0]?.Divisi,
        kode_jenis_bahan: "SEMUA",
        design: "SEMUA",
        tujuan: "SEMUA",
        jenis: "SEMUA",
        no_job_order: undefined,
        alloy: false,
        reparasi: false,
        ekspor: false,
      },
    };
  }
};

let FormLaporanKirimByDivisi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const datadesign = useSelector(design.getAllDesign);
  const datadivisi = useSelector(divisi.getAllDivisi);
  const datakodejenis = useSelector(kodejenis.getAllKodeJenis);
  const divisipilih = useSelector(kirimbydivisi.getDivisi);

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
            onChange={(val) => {
              dispatch(getDivisi({ divisi: val }));
              dispatch(setDataKirimByDivisiSuccess({ feedback: [] }));
            }}
          >
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
          <Field
            name="design"
            label={<span style={{ fontSize: "13px" }}>Design</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Design"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {datadesign.map((item) => {
              return (
                <Option value={item.design} key={item.design}>
                  <span style={{ fontSize: "13px" }}>{item.design}</span>
                </Option>
              );
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
        <Col
          offset={1}
          style={{
            display:
              divisipilih === "POLISHING" || divisipilih === "PLATTING"
                ? ""
                : "none",
          }}
        >
          <Field
            name="tujuan"
            label={<span style={{ fontSize: "13px" }}>Tujuan Divisi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Tujuan Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="SAMPLE" key="SAMPLE">
              <span style={{ fontSize: "13px" }}>Sample</span>
            </Option>
            <Option value="POLISHING" key="POLISHING">
              <span style={{ fontSize: "13px" }}>Polishing</span>
            </Option>
            <Option value="PLATTING" key="PLATTING">
              <span style={{ fontSize: "13px" }}>PLatting</span>
            </Option>
          </Field>
        </Col>
        <Col
          offset={1}
          style={{ display: divisipilih === "POLISHING" ? "" : "none" }}
        >
          <Field
            name="jenis"
            label={<span style={{ fontSize: "13px" }}>Kode Jenis</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kode Jenis"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {datakodejenis.map((item) => {
              return (
                <Option value={item.kode_jenis} key={item.kode_jenis}>
                  <span style={{ fontSize: "13px" }}>{item.kode_jenis}</span>
                </Option>
              );
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
            label={<span style={{ fontSize: "13px" }}>Reparasi</span>}
            name="reparasi"
            id="reparasi"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col
          offset={1}
          style={{
            display:
              divisipilih === "POLISHING" || divisipilih === "PLATTING"
                ? ""
                : "none",
          }}
        >
          <Field
            label={<span style={{ fontSize: "13px" }}>Ekspor</span>}
            name="ekspor"
            id="ekspor"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimByDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimByDivisi = reduxForm({
  form: "FormLaporanKirimByDivisi",
  enableReinitialize: true,
})(FormLaporanKirimByDivisi);
export default connect(maptostate, null)(FormLaporanKirimByDivisi);
