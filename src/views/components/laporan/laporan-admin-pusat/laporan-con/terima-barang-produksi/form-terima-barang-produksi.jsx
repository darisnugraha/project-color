import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../../application/selectors/ui";
import jenisbahan from "../../../../../../application/selectors/jenisbahan";
import "antd/dist/antd.css";
import { getAllTerimaBarangProduksi } from "../../../../../../application/actions/terimabarangproduksi";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaBarangProduksi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaBarangProduksi.values.date,
        kode_jenis_bahan:
          state.form.FormLaporanTerimaBarangProduksi.values.kode_jenis_bahan,
        divisi: state.form.FormLaporanTerimaBarangProduksi.values.divisi,
        alloy: state.form.FormLaporanTerimaBarangProduksi.values.alloy,
        no_con: state.form.FormLaporanTerimaBarangProduksi.values.no_con,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        kode_jenis_bahan: state.jenisbahan.feedback[0]?.kode_jenis_bahan,
        divisi: "FILLING",
        alloy: false,
        no_con: "",
      },
    };
  }
};

let FormLaporanTerimaBarangProduksi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
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
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="FILLING" key="1">
              <span style={{ fontSize: "13px" }}>FILLING</span>
            </Option>
            <Option value="POTONG SPRU" key="2">
              <span style={{ fontSize: "13px" }}>POTONG SPRU</span>
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
            name="no_con"
            type="text"
            label={<span style={{ fontSize: "13px" }}>No Transaksi</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan No Transaksi"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaBarangProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaBarangProduksi = reduxForm({
  form: "FormLaporanTerimaBarangProduksi",
  enableReinitialize: true,
})(FormLaporanTerimaBarangProduksi);
export default connect(maptostate, null)(FormLaporanTerimaBarangProduksi);
