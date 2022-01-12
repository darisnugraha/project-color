import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import SaldoSubDivisi from "../../../../../application/selectors/saldosubdivisi";
import ExcelReport from "./excel/excelReport";
import ExcelReportHarian from "./excel/excelReportHarian";
import pdfReport from "./pdf/pdfReport";
import pdfReportHarian from "./pdf/pdfReportHarian";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataSaldoSubDivisi = useSelector(SaldoSubDivisi.getAllSaldoSubDivisi);
  const type = useSelector(SaldoSubDivisi.getType);
  const data = service.getLocal("saldo_sub_divisi_head") || [];

  const pdfExportHandle = () => {
    if (type === "ALL") {
      pdfReport(dataSaldoSubDivisi);
    } else {
      pdfReportHarian(dataSaldoSubDivisi);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "ALL" ? (
          <ExcelReport dataExel={dataSaldoSubDivisi} dataHead={data} />
        ) : (
          <ExcelReportHarian dataExel={dataSaldoSubDivisi} dataHead={data} />
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
