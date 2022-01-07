import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import MutasiGudangQC from "../../../../../application/selectors/mutasistockgudangqc";
import ExcelReport from "./excel/excelReport";
import ExcelReportOld from "./excel/excelReportOld";
import pdfReport from "./pdf/pdfReport";
import pdfReportOld from "./pdf/pdfReportOld";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMutasiStockGudangQC = useSelector(
    MutasiGudangQC.getAllMutasiStockGudangQC
  );
  const type = useSelector(MutasiGudangQC.getTypeMutasiStockGudangQC);
  const data = JSON.parse(localStorage.getItem("mutasi_stock_gudang_qc")) || [];

  const pdfExportHandle = () => {
    if (type === "SALDO" || type === "HISTORY") {
      pdfReport(dataMutasiStockGudangQC);
    } else {
      pdfReportOld(dataMutasiStockGudangQC);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "SALDO" || type === "HISTORY" ? (
          <ExcelReport dataExel={dataMutasiStockGudangQC} dataHead={data} />
        ) : (
          <ExcelReportOld dataExel={dataMutasiStockGudangQC} dataHead={data} />
        )}
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
