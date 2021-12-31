import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import divisi from "../../../../../application/selectors/divisi";
import design from "../../../../../application/selectors/design";
import kodejenis from "../../../../../application/selectors/kodejenis";
import "antd/dist/antd.css";
import {
  setDataMutasiOutstandByDivisiSuccess,
  getDivisi,
  getAllMutasiOutstandByDivisi,
} from "../../../../../application/actions/mutasioutstand";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanMutasiOutstand?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanMutasiOutstand.values.date,
        divisi: state.form.FormLaporanMutasiOutstand.values.divisi,
        bahan: state.form.FormLaporanMutasiOutstand.values.bahan,
        jenis: state.form.FormLaporanMutasiOutstand.values.jenis,
        design: state.form.FormLaporanMutasiOutstand.values.design,
        user: state.form.FormLaporanMutasiOutstand.values.user,
        no_job_order: state.form.FormLaporanMutasiOutstand.values.no_job_order,
        alloy: state.form.FormLaporanMutasiOutstand.values.alloy,
        reparasi: state.form.FormLaporanMutasiOutstand.values.reparasi,
        all: state.form.FormLaporanMutasiOutstand.values.all,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: state.divisi.feedback[0]?.Divisi,
        bahan: "SEMUA",
        jenis: "SEMUA",
        design: "SEMUA",
        user: "SEMUA",
        no_job_order: undefined,
        alloy: false,
        reparasi: false,
        all: false,
      },
    };
  }
};

let FormLaporanMutasiOutstand = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const datadivisi = useSelector(divisi.getAllDivisi);
  const datakodejenis = useSelector(kodejenis.getAllKodeJenis);
  const datadesign = useSelector(design.getAllDesign);

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
              dispatch(setDataMutasiOutstandByDivisiSuccess({ feedback: [] }));
              localStorage.removeItem("mutasi_outstand_by_divisi_head");
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
            name="bahan"
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
            name="no_job_order"
            type="text"
            label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan No Job Order"
          />
        </Col>
        <Col offset={1}>
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
            name="user"
            label={<span style={{ fontSize: "13px" }}>User</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih User"
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
        <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>All</span>}
            name="all"
            id="all"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllMutasiOutstandByDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanMutasiOutstand = reduxForm({
  form: "FormLaporanMutasiOutstand",
  enableReinitialize: true,
})(FormLaporanMutasiOutstand);
export default connect(maptostate, null)(FormLaporanMutasiOutstand);
