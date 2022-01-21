import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import jenisbahan from "../../../../../application/selectors/jenisbahan";
import mutasistockpusatbydivisi from "../../../../../application/selectors/mutasistockpusatbydivisi";
import "antd/dist/antd.css";
import {
  getAllMutasiStockPusatByDivisi,
  setDataMutasiStockPusatByDivisiSuccess,
  setDivisi,
  setType,
} from "../../../../../application/actions/mutasistockpusatbydivisi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanMutasiStockPusatByDivisi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanMutasiStockPusatByDivisi.values.date,
        divisi: state.form.FormLaporanMutasiStockPusatByDivisi.values.divisi,
        kode_jenis_bahan:
          state.form.FormLaporanMutasiStockPusatByDivisi.values
            .kode_jenis_bahan,
        user: state.form.FormLaporanMutasiStockPusatByDivisi.values.user,
        type: state.form.FormLaporanMutasiStockPusatByDivisi.values.type,
        all: state.form.FormLaporanMutasiStockPusatByDivisi.values.all,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: "HAND WORKING",
        kode_jenis_bahan: "SEMUA",
        user: "SEMUA",
        type: "SALDO",
        all: false,
      },
    };
  }
};

let FormLaporanMutasiStockPusatByDivisi = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const divisi = useSelector(
    mutasistockpusatbydivisi.getDivisiMutasiStockPusatByDivisi
  );

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
            onChange={(e) => {
              prop.dispatch(
                setDataMutasiStockPusatByDivisiSuccess({ feedback: [] })
              );
              prop.dispatch(setDivisi({ divisi: e }));
            }}
          >
            <Option value="HAND WORKING" key="HAND WORKING">
              <span style={{ fontSize: "13px" }}>Hand Working</span>
            </Option>
            <Option value="REPAIR" key="REPAIR">
              <span style={{ fontSize: "13px" }}>Repair</span>
            </Option>
            <Option value="TARIK KAWAT" key="TARIK KAWAT">
              <span style={{ fontSize: "13px" }}>Tarik Kawat</span>
            </Option>
            <Option value="LEBUR" key="LEBUR">
              <span style={{ fontSize: "13px" }}>Lebur</span>
            </Option>
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
        <Col
          offset={1}
          style={{ display: divisi === "HAND WORKING" && "none" }}
        >
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
            name="type"
            label={<span style={{ fontSize: "13px" }}>Type</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Type"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => {
              prop.dispatch(
                setDataMutasiStockPusatByDivisiSuccess({ feedback: [] })
              );
              prop.dispatch(setType({ type: e }));
            }}
          >
            <Option value="SALDO" key="SALDO">
              <span style={{ fontSize: "13px" }}>Saldo</span>
            </Option>
            <Option value="OUTSTANDING" key="OUTSTANDING">
              <span style={{ fontSize: "13px" }}>Outstanding</span>
            </Option>
            <Option value="HISTORY" key="HISTORY">
              <span style={{ fontSize: "13px" }}>History</span>
            </Option>
          </Field>
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
            style={{ marginTop: 29 }}
            onClick={() => prop.dispatch(getAllMutasiStockPusatByDivisi)}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanMutasiStockPusatByDivisi = reduxForm({
  form: "FormLaporanMutasiStockPusatByDivisi",
  enableReinitialize: true,
})(FormLaporanMutasiStockPusatByDivisi);
export default connect(maptostate, null)(FormLaporanMutasiStockPusatByDivisi);
