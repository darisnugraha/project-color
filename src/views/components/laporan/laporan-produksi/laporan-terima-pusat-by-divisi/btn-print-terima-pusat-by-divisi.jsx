import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import TerimaPusatByDivisi from "../../../../../application/selectors/terimapusatbydivisi";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataTerimaPusatByDivisi = useSelector(
    TerimaPusatByDivisi.getAllTerimaPusatByDivisi
  );
  const data = service.getLocal("terima_pusat_divisi") || [];

  const pdfExportHandle = () => {
    pdfReport(dataTerimaPusatByDivisi);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={dataTerimaPusatByDivisi} dataHead={data} />
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
