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
import "antd/dist/antd.css";
import { getAllTerimaByDivisi } from "../../../../../application/actions/terimabydivisi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaByDivisi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaByDivisi.values.date,
        divisi: state.form.FormLaporanTerimaByDivisi.values.divisi,
        kode_jenis_bahan:
          state.form.FormLaporanTerimaByDivisi.values.kode_jenis_bahan,
        design: state.form.FormLaporanTerimaByDivisi.values.design,
        no_job_order: state.form.FormLaporanTerimaByDivisi.values.no_job_order,
        alloy: state.form.FormLaporanTerimaByDivisi.values.alloy,
        // ekspor: state.form.FormLaporanTerimaByDivisi.values.ekspor,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: state.divisi.feedback[0]?.Divisi,
        kode_jenis_bahan: "SEMUA",
        design: "SEMUA",
        no_job_order: undefined,
        alloy: false,
        ekspor: false,
      },
    };
  }
};

let FormLaporanTerimaByDivisi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const datadesign = useSelector(design.getAllDesign);
  const datadivisi = useSelector(divisi.getAllDivisi);

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
        <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>Alloy</span>}
            name="alloy"
            id="alloy"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        {/* <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>Ekspor</span>}
            name="ekspor"
            id="ekspor"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col> */}
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaByDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaByDivisi = reduxForm({
  form: "FormLaporanTerimaByDivisi",
  enableReinitialize: true,
})(FormLaporanTerimaByDivisi);
export default connect(maptostate, null)(FormLaporanTerimaByDivisi);
