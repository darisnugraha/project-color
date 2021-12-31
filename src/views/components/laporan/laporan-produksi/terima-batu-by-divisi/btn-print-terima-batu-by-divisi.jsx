import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import TerimaBatuByDivisi from "../../../../../application/selectors/terimabatubydivisi";
import ExcelReport from "./excel/excelReport";
import ExcelReportDua from "./excel/excelReportSecond";
import pdfReport from "./pdf/pdfReport";
import pdfReportDua from "./pdf/pdfReportSecond";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataTerimaBatu = useSelector(TerimaBatuByDivisi.getAllTerimaBatu);
  const divisi = useSelector(TerimaBatuByDivisi.getDivisi);
  const data =
    JSON.parse(localStorage.getItem("terima_batu_by_divisi_head")) || [];

  const pdfExportHandle = () => {
    if (
      divisi === "SAMPLE" ||
      divisi === "POLISHING" ||
      divisi === "PLATTING" ||
      divisi === "-"
    ) {
      pdfReport(dataTerimaBatu);
    } else {
      pdfReportDua(dataTerimaBatu);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {divisi === "SAMPLE" ||
        divisi === "POLISHING" ||
        divisi === "PLATTING" ||
        divisi === "-" ? (
          <ExcelReport dataExel={dataTerimaBatu} dataHead={data} />
        ) : (
          <ExcelReportDua dataExel={dataTerimaBatu} dataHead={data} />
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
