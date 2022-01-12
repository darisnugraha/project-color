import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import JobProcessing from "../../../../../application/selectors/jobprocessing";
import ExcelReport from "./excel/excelReport";
import ExcelReportEksport from "./excel/excelReportEksport";
import pdfReport from "./pdf/pdfReport";
import pdfReportEksport from "./pdf/pdfReportEksport";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataJobProcessing = useSelector(JobProcessing.getAllJobProcessing);
  const data = service.getLocal("job_processing") || [];
  const type = useSelector(JobProcessing.getTypeJobProcessing);

  const pdfExportHandle = () => {
    if (type === "REKAP") {
      pdfReport(dataJobProcessing);
    } else {
      pdfReportEksport(dataJobProcessing);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "REKAP" ? (
          <ExcelReport dataExel={dataJobProcessing} dataHead={data} />
        ) : (
          <ExcelReportEksport dataExel={dataJobProcessing} dataHead={data} />
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
