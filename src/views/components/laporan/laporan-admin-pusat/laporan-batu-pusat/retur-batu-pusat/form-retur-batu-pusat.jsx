import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../../application/selectors/ui";
import jenisbahan from "../../../../../../application/selectors/jenisbahan";
import batu from "../../../../../../application/selectors/batu";
import "antd/dist/antd.css";
import { getAllAdminReturBatu } from "../../../../../../application/actions/adminreturbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanReturBatuPusat?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanReturBatuPusat.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanReturBatuPusat.values.kode_jenis_bahan,
        batu: state.form.FormLaporanReturBatuPusat.values.batu,
        no_job_order: state.form.FormLaporanReturBatuPusat.values.no_job_order,
        alloy: state.form.FormLaporanReturBatuPusat.values.alloy,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: "SEMUA",
        batu: "SEMUA",
        no_job_order: undefined,
        alloy: false,
      },
    };
  }
};

let FormLaporanReturBatuPusat = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const databatu = useSelector(batu.getAllBatu);

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
            name="batu"
            label={<span style={{ fontSize: "13px" }}>Batu</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Batu"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {databatu.map((item) => {
              return (
                <Option value={item.kode_batu} key={item.kode_batu}>
                  <span style={{ fontSize: "13px" }}>{item.kode_batu}</span>
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
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllAdminReturBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanReturBatuPusat = reduxForm({
  form: "FormLaporanReturBatuPusat",
  enableReinitialize: true,
})(FormLaporanReturBatuPusat);
export default connect(maptostate, null)(FormLaporanReturBatuPusat);
