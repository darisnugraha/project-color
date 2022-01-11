import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllBatalJobOrder } from "../../../../../application/actions/bataljoborder";

const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanBatalJobOrder?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanBatalJobOrder.values.date,
        no_job_order: state.form.FormLaporanBatalJobOrder.values.no_job_order,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        no_job_order: undefined,
      },
    };
  }
};

let FormLaporanBatalJobOrder = (prop) => {
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
            name="no_job_order"
            type="text"
            label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan No Job Order"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllBatalJobOrder)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanBatalJobOrder = reduxForm({
  form: "FormLaporanBatalJobOrder",
  enableReinitialize: true,
})(FormLaporanBatalJobOrder);
export default connect(maptostate, null)(FormLaporanBatalJobOrder);
