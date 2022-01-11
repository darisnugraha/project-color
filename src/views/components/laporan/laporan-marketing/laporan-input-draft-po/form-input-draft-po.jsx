import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import nopo from "../../../../../application/selectors/nopo";
import "antd/dist/antd.css";
import {
  getAllInputDraftPO,
  setDataInputDraftPOSuccess,
  setType,
} from "../../../../../application/actions/inputdraftpo";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanInputDraftPO?.values !== undefined) {
    return {
      initialValues: {
        no_po: state.form.FormLaporanInputDraftPO.values.no_po,
        alloy: state.form.FormLaporanInputDraftPO.values.alloy,
        validasi: state.form.FormLaporanInputDraftPO.values.validasi,
        type: state.form.FormLaporanInputDraftPO.values.type,
      },
    };
  } else {
    return {
      initialValues: {
        no_po: "SEMUA",
        alloy: false,
        validasi: false,
        type: "L",
      },
    };
  }
};

let FormLaporanInputDraftPO = (prop) => {
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
              prop.dispatch(setDataInputDraftPOSuccess([]));
            }}
          >
            <Option value="L" key="L">
              <span style={{ fontSize: "13px" }}>L</span>
            </Option>
            <Option value="PERAK" key="PERAK">
              <span style={{ fontSize: "13px" }}>Perak</span>
            </Option>
            <Option value="E" key="E">
              <span style={{ fontSize: "13px" }}>E</span>
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
            label={<span style={{ fontSize: "13px" }}>Validasi</span>}
            name="validasi"
            id="validasi"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllInputDraftPO)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanInputDraftPO = reduxForm({
  form: "FormLaporanInputDraftPO",
  enableReinitialize: true,
})(FormLaporanInputDraftPO);
export default connect(maptostate, null)(FormLaporanInputDraftPO);
