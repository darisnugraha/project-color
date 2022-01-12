import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import nopo from "../../../../../application/selectors/nopo";
import "antd/dist/antd.css";
import { getAllReparasiMasuk } from "../../../../../application/actions/reparasimasuk";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanReparasiMasuk?.values !== undefined) {
    return {
      initialValues: {
        no_po: state.form.FormLaporanReparasiMasuk.values.no_po,
      },
    };
  } else {
    return {
      initialValues: {
        no_po: "SEMUA",
      },
    };
  }
};

let FormLaporanReparasiMasuk = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const datanopo = useSelector(nopo.getAllNoPOReparasi);

  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1}>
          <Field
            optionFilterProp="children"
            showSearch
            name="no_po"
            label={<span style={{ fontSize: "13px" }}>No PO</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih No PO"
            onBlur={(e) => e.preventDefault()}
            filterOption={(input, option) =>
              option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllReparasiMasuk)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanReparasiMasuk = reduxForm({
  form: "FormLaporanReparasiMasuk",
  enableReinitialize: true,
})(FormLaporanReparasiMasuk);
export default connect(maptostate, null)(FormLaporanReparasiMasuk);
