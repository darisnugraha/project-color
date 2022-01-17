import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import {
  getAllProsesProduksi,
  setDataProsesProduksiSuccess,
  setType,
} from "../../../../../application/actions/prosesproduksi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporaProsesProduksi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporaProsesProduksi.values.date,
        type: state.form.FormLaporaProsesProduksi.values.type,
        all: state.form.FormLaporaProsesProduksi.values.all,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        type: "REKAP",
        all: false,
      },
    };
  }
};

let FormLaporaProsesProduksi = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);

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
            name="type"
            label={<span style={{ fontSize: "13px" }}>Type</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Type"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              prop.dispatch(setType({ type: val }));
              prop.dispatch(setDataProsesProduksiSuccess({ feedback: [] }));
            }}
          >
            <Option value="REKAP" key="REKAP">
              <span style={{ fontSize: "13px" }}>Rekap</span>
            </Option>
            <Option value="DETAIL" key="DETAIL">
              <span style={{ fontSize: "13px" }}>Detail</span>
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
            onClick={() => prop.dispatch(getAllProsesProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporaProsesProduksi = reduxForm({
  form: "FormLaporaProsesProduksi",
  enableReinitialize: true,
})(FormLaporaProsesProduksi);
export default connect(maptostate, null)(FormLaporaProsesProduksi);
