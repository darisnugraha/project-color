import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import divisi from "../../../../../application/selectors/divisi";
import terimabatu from "../../../../../application/selectors/terimabatubydivisi";
import "antd/dist/antd.css";
import {
  // getAllAnalysisStockByDivisi,
  getDivisi,
  setDataTerimaBatuByDivisiSuccess,
} from "../../../../../application/actions/terimabatubydivisi";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaBatu.values.date,
        divisi: state.form.FormLaporanTerimaBatu.values.divisi,
        bahan: state.form.FormLaporanTerimaBatu.values.bahan,
        batu: state.form.FormLaporanTerimaBatu.values.batu,
        no_job_order: state.form.FormLaporanTerimaBatu.values.no_job_order,
        pasang: state.form.FormLaporanTerimaBatu.values.pasang,
        alloy: state.form.FormLaporanTerimaBatu.values.alloy,
      },
    };
  } else {
    const dataDivisi = state.divisi.feedback;
    const dataDivisiFill = dataDivisi.filter((item) => {
      return (
        item.Divisi === "HANDSETTING1" ||
        item.Divisi === "HANDSETTING2" ||
        item.Divisi === "HANDSETTING3" ||
        item.Divisi === "SAMPLE" ||
        item.Divisi === "POLISHING" ||
        item.Divisi === "PLATTING"
      );
    });
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: dataDivisiFill[0]?.Divisi,
        bahan: "SEMUA",
        batu: "SEMUA",
        no_job_order: undefined,
        pasang: false,
        alloy: false,
      },
    };
  }
};

let FormLaporanTerimaBatu = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const datadivisi = useSelector(divisi.getAllDivisi);
  const divisichoose = useSelector(terimabatu.getDivisi);

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
              dispatch(setDataTerimaBatuByDivisiSuccess({ feedback: [] }));
              localStorage.removeItem("terima_batu_by_divisi_head");
            }}
          >
            {datadivisi.map((item) => {
              if (
                item.Divisi === "HANDSETTING1" ||
                item.Divisi === "HANDSETTING2" ||
                item.Divisi === "HANDSETTING3" ||
                item.Divisi === "HANDSETTING1" ||
                item.Divisi === "POLISHING" ||
                item.Divisi === "PLATTING" ||
                item.Divisi === "SAMPLE"
              ) {
                return (
                  <Option value={item.Divisi} key={item.Divisi}>
                    <span style={{ fontSize: "13px" }}>{item.Divisi}</span>
                  </Option>
                );
              } else {
                return false;
              }
            })}
          </Field>
        </Col>
        <Col
          offset={1}
          style={{
            display:
              divisichoose === "-"
                ? ""
                : divisichoose === "SAMPLE" ||
                  divisichoose === "POLISHING" ||
                  divisichoose === "PLATTING"
                ? ""
                : "none",
          }}
        >
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
        <Col
          offset={1}
          style={{
            display:
              divisichoose === "POLISHING" || divisichoose === "PLATTING"
                ? ""
                : "none",
          }}
        >
          <Field
            label={<span style={{ fontSize: "13px" }}>Pasang</span>}
            name="pasang"
            id="pasang"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Field
            label={
              <span style={{ fontSize: "13px" }}>
                {divisichoose === "SAMPLE" || divisichoose === "-"
                  ? "Alloy/Perak/Tembaga"
                  : "Alloy"}
              </span>
            }
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
            // onClick={() => prop.dispatch(getAllAnalysisStockByDivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaBatu = reduxForm({
  form: "FormLaporanTerimaBatu",
  enableReinitialize: true,
})(FormLaporanTerimaBatu);
export default connect(maptostate, null)(FormLaporanTerimaBatu);
