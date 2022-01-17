import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import ProsesProduksi from "../../../../../application/selectors/prosesproduksi";
import ExcelReport from "./excel/excelReport";
import ExcelReportDetail from "./excel/excelReportDetail";
import pdfReport from "./pdf/pdfReport";
import pdfReportDetail from "./pdf/pdfReportDetail";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataProsesProduksi = useSelector(ProsesProduksi.getAllProsesProduksi);
  const data = service.getLocal("proses_produksi") || [];
  const type = useSelector(ProsesProduksi.getTypeProsesProduksi);

  const pdfExportHandle = () => {
    if (type === "REKAP") {
      pdfReport(dataProsesProduksi);
    } else {
      pdfReportDetail(dataProsesProduksi);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "REKAP" ? (
          <ExcelReport dataExel={dataProsesProduksi} dataHead={data} />
        ) : (
          <ExcelReportDetail dataExel={dataProsesProduksi} dataHead={data} />
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

export default BtnPrint;
