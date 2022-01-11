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
  getAllKirimMarketingGudangQC,
  setDataKirimMarketingGudangQCSuccess,
  setTypeLaporan,
} from "../../../../../application/actions/kirimmarketinggudangqc";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanKirimMarketingGudangQC?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanKirimMarketingGudangQC.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanKirimMarketingGudangQC.values.kode_jenis_bahan,
        kode_jenis:
          state.form.FormLaporanKirimMarketingGudangQC.values.kode_jenis,
        design: state.form.FormLaporanKirimMarketingGudangQC.values.design,
        no_job_order:
          state.form.FormLaporanKirimMarketingGudangQC.values.no_job_order,
        format: state.form.FormLaporanKirimMarketingGudangQC.values.format,
        alloy: state.form.FormLaporanKirimMarketingGudangQC.values.alloy,
        ekspor: state.form.FormLaporanKirimMarketingGudangQC.values.ekspor,
        photo: state.form.FormLaporanKirimMarketingGudangQC.values.photo,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: "SEMUA",
        kode_jenis: "SEMUA",
        design: "SEMUA",
        no_job_order: undefined,
        format: "NEW",
        alloy: false,
        ekspor: false,
        photo: false,
      },
    };
  }
};

let FormLaporanKirimMarketingGudangQC = (prop) => {
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
            name="format"
            label={<span style={{ fontSize: "13px" }}>Format</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Format"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              prop.dispatch(setTypeLaporan({ type: val }));
              prop.dispatch(
                setDataKirimMarketingGudangQCSuccess({ feedback: [] })
              );
            }}
          >
            <Option value="NEW" key="NEW">
              <span style={{ fontSize: "13px" }}>New</span>
            </Option>
            <Option value="OLD" key="OLD">
              <span style={{ fontSize: "13px" }}>Old</span>
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
            label={<span style={{ fontSize: "13px" }}>Ekspor</span>}
            name="ekspor"
            id="ekspor"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>Photo</span>}
            name="photo"
            id="photo"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimMarketingGudangQC)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimMarketingGudangQC = reduxForm({
  form: "FormLaporanKirimMarketingGudangQC",
  enableReinitialize: true,
})(FormLaporanKirimMarketingGudangQC);
export default connect(maptostate, null)(FormLaporanKirimMarketingGudangQC);
