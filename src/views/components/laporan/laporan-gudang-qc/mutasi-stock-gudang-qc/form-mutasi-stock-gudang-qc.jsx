import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import kodejenis from "../../../../../application/selectors/kodejenis";
import design from "../../../../../application/selectors/design";
import "antd/dist/antd.css";
import {
  getAllMutasiStockGudangQC,
  setDataMutasiStockGudangQCSuccess,
  setTypeLaporan,
} from "../../../../../application/actions/mutasistockgudangqc";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanMutasiStockGudangQC?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanMutasiStockGudangQC.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanMutasiStockGudangQC.values.kode_jenis_bahan,
        kode_jenis: state.form.FormLaporanMutasiStockGudangQC.values.kode_jenis,
        design: state.form.FormLaporanMutasiStockGudangQC.values.design,
        no_job_order:
          state.form.FormLaporanMutasiStockGudangQC.values.no_job_order,
        type: state.form.FormLaporanMutasiStockGudangQC.values.type,
        alloy: state.form.FormLaporanMutasiStockGudangQC.values.alloy,
        user: state.form.FormLaporanMutasiStockGudangQC.values.user,
        all: state.form.FormLaporanMutasiStockGudangQC.values.all,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: "SEMUA",
        kode_jenis: "SEMUA",
        design: "SEMUA",
        no_job_order: "",
        type: "SALDO",
        alloy: false,
        user: "SEMUA",
        all: false,
      },
    };
  }
};

let FormLaporanMutasiStockGudangQC = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
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
            name="kode_jenis"
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
            name="type"
            label={<span style={{ fontSize: "13px" }}>Type</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Type"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              prop.dispatch(setTypeLaporan({ type: val }));
              prop.dispatch(
                setDataMutasiStockGudangQCSuccess({ feedback: [] })
              );
            }}
          >
            <Option value="SALDO" key="SALDO">
              <span style={{ fontSize: "13px" }}>Saldo</span>
            </Option>
            <Option value="HISTORY" key="HISTORY">
              <span style={{ fontSize: "13px" }}>History</span>
            </Option>
            <Option value="OUTSTAND" key="OUTSTAND">
              <span style={{ fontSize: "13px" }}>Outstand</span>
            </Option>
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
              <span style={{ fontSize: "13px" }}>Admin 2</span>
            </Option>
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
            label={<span style={{ fontSize: "13px" }}>Alloy</span>}
            name="alloy"
            id="alloy"
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
            onClick={() => prop.dispatch(getAllMutasiStockGudangQC)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanMutasiStockGudangQC = reduxForm({
  form: "FormLaporanMutasiStockGudangQC",
  enableReinitialize: true,
})(FormLaporanMutasiStockGudangQC);
export default connect(maptostate, null)(FormLaporanMutasiStockGudangQC);
