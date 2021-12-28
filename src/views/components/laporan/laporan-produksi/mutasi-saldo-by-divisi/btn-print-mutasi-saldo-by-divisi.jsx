import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import MutasiSaldo from "../../../../../application/selectors/mutasisaldo";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMutasiSaldo = useSelector(MutasiSaldo.getAllMutasiSaldo);
  const data = JSON.parse(localStorage.getItem("mutasi_saldo_by_divisi_head"));

  const pdfExportHandle = () => {
    pdfReport(dataMutasiSaldo);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={dataMutasiSaldo} dataHead={data} />
      </Col>
      <Col htmltype="button" span={10} style={{ marginTop: 10 }} offset={2}>
        <Button
          type="primary"
          htmltype="button"
          block
          danger
          onClick={() => pdfExportHandle()}
        >
          Print To PDF
        </Button>
      </Col>
    </Row>
  );
};

export default connect()(BtnPrint);
