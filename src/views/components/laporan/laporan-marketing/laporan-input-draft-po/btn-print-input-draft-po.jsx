import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import InputDraftPO from "../../../../../application/selectors/inputdraftpo";
import ExcelReport from "./excel/excelReport";
import ExcelReportEksport from "./excel/excelReportEksport";
import ExcelReportPerak from "./excel/excelReportPerak";
import pdfReport from "./pdf/pdfReport";
import pdfReportPerak from "./pdf/pdfReportPerak";
import pdfReportEksport from "./pdf/pdfReportEksport";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataInputDraftPO = useSelector(InputDraftPO.getAllInputDraftPO);
  const data = JSON.parse(localStorage.getItem("input_draft_po")) || [];
  const type = useSelector(InputDraftPO.getTypeInputDraftPO);

  const pdfExportHandle = () => {
    if (type === "L") {
      pdfReport(dataInputDraftPO);
    } else if (type === "PERAK") {
      pdfReportPerak(dataInputDraftPO);
    } else {
      pdfReportEksport(dataInputDraftPO);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "L" ? (
          <ExcelReport dataExel={dataInputDraftPO} dataHead={data} />
        ) : type === "E" ? (
          <ExcelReportEksport dataExel={dataInputDraftPO} dataHead={data} />
        ) : (
          <ExcelReportPerak dataExel={dataInputDraftPO} dataHead={data} />
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
