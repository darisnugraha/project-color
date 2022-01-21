import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllAdminMutasiStockBatu } from "../../../../../../application/actions/adminmutasistockbatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanMutasiStockBatuPusat?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanMutasiStockBatuPusat.values.date,
        all: state.form.FormLaporanMutasiStockBatuPusat.values.all,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        all: false,
      },
    };
  }
};

let FormLaporanMutasiStockBatuPusat = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
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
            onClick={() => prop.dispatch(getAllAdminMutasiStockBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanMutasiStockBatuPusat = reduxForm({
  form: "FormLaporanMutasiStockBatuPusat",
  enableReinitialize: true,
})(FormLaporanMutasiStockBatuPusat);
export default connect(maptostate, null)(FormLaporanMutasiStockBatuPusat);
