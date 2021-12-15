import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import jenisbahan from "../../../../application/selectors/jenisbahan";
import { getAllKirimsaldotahun } from "../../../../application/actions/kirimsaldotahun";
import "antd/dist/antd.css";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanKirimSaldoTahun?.values !== undefined) {
    return {
      initialValues: {
        tanggal: state.form.FormLaporanKirimSaldoTahun?.values.tanggal,
        kode_jenis_bahan:
          state.form.FormLaporanKirimSaldoTahun?.values.kode_jenis_bahan,
      },
    };
  } else {
    if (state.jenisbahan.feedback[0]?.kode_jenis_bahan !== undefined) {
      return {
        initialValues: {
          tanggal: moment(today, dateFormat),
          kode_jenis_bahan: state.jenisbahan.feedback[0].kode_jenis_bahan,
        },
      };
    }
  }
};

let FormLaporanKirimSaldoTahun = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const btnLoading = useSelector(ui.getBtnLoading);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="tanggal"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Bulan</span>}
            component={styleAntd.ADatePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            defaultValue={moment(today, dateFormat)}
            picker="month"
          />
        </Col>
        <Col offset={1}>
          <Field
            name="kode_jenis_bahan"
            label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kode Jenis Bahan"
            defaultValue="AWH75"
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimsaldotahun)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimSaldoTahun = reduxForm({
  form: "FormLaporanKirimSaldoTahun",
  enableReinitialize: true,
})(FormLaporanKirimSaldoTahun);
export default connect(maptostate, null)(FormLaporanKirimSaldoTahun);
