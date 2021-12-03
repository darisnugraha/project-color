import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import jenisbahan from "../../../../application/selectors/jenisbahan";
import { getAllKirimdesian } from "../../../../application/actions/kirimdesian";
import "antd/dist/antd.css";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const FormLaporanKirimDesian = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datajenisbahan = useSelector(jenisbahan.getAllJenisbahan);
  const dispatch = useDispatch();

  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1}>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            defaultValue={[
              moment(today, dateFormat),
              moment(today, dateFormat),
            ]}
          />
        </Col>
        <Col offset={1}>
          <Field
            name="kode_jenis_bahan"
            label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kode Jenis Bahan"
            defaultValue={"AWH75"}
            onBlur={(e) => e.preventDefault()}
          >
            {datajenisbahan.map((item) => {
              if (item.kode_jenis_bahan !== "ALLOY") {
                return (
                  <Option value={item.kode_jenis_bahan}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan}
                    </span>
                  </Option>
                );
              }
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimdesian)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "FormLaporanKirimDesian",
  initialValues: {
    date: [moment(today, dateFormat), moment(today, dateFormat)],
    kode_jenis_bahan: "AWH75",
  },
})(FormLaporanKirimDesian);
