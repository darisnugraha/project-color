import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import nopo from "../../../../../application/selectors/nopo";
import "antd/dist/antd.css";
import {
  getAllJobProcessing,
  setDataJobProcessingSuccess,
  setType,
} from "../../../../../application/actions/jobprocessing";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanJobProcessing?.values !== undefined) {
    return {
      initialValues: {
        no_po: state.form.FormLaporanJobProcessing.values.no_po,
        proses: state.form.FormLaporanJobProcessing.values.proses,
        type: state.form.FormLaporanJobProcessing.values.type,
      },
    };
  } else {
    return {
      initialValues: {
        no_po: "SEMUA",
        proses: "SEMUA",
        type: "REKAP",
      },
    };
  }
};

let FormLaporanJobProcessing = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datanopo = useSelector(nopo.getAllNoPO);

  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1}>
          <Field
            name="no_po"
            label={<span style={{ fontSize: "13px" }}>No PO</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih No PO"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            {datanopo.map((item) => {
              return (
                <Option value={item.no_po_marketing} key={item.no_po_marketing}>
                  <span style={{ fontSize: "13px" }}>
                    {item.no_po_marketing}
                  </span>
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
              prop.dispatch(setType({ type: val }));
              prop.dispatch(setDataJobProcessingSuccess([]));
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
            name="proses"
            label={<span style={{ fontSize: "13px" }}>Proses</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Proses"
            onBlur={(e) => e.preventDefault()}
            onChange={(val) => {
              prop.dispatch(setType({ type: val }));
              prop.dispatch(setDataJobProcessingSuccess([]));
            }}
          >
            <Option value="SEMUA" key="SEMUA">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="PROSES" key="PROSES">
              <span style={{ fontSize: "13px" }}>Proses</span>
            </Option>
            <Option value="SELESAI" key="SELESAI">
              <span style={{ fontSize: "13px" }}>Selesai</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllJobProcessing)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanJobProcessing = reduxForm({
  form: "FormLaporanJobProcessing",
  enableReinitialize: true,
})(FormLaporanJobProcessing);
export default connect(maptostate, null)(FormLaporanJobProcessing);
