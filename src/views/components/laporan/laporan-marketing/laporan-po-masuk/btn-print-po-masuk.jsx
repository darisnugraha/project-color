import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import POMasuk from "../../../../../application/selectors/pomasuk";
import ExcelReport from "./excel/excelReport";
import ExcelReportJenisBarang from "./excel/excelReportJenisBarang";
import ExcelReportFormatBaru from "./excel/excelReportFormatBaru";
import pdfReport from "./pdf/pdfReport";
import pdfReportJenisBarang from "./pdf/pdfReportJenisBarang";
import pdfReportFormatBaru from "./pdf/pdfReportFormatBaru";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataPOMasuk = useSelector(POMasuk.getAllPOMasuk);
  const data = service.getLocal("po_masuk") || [];
  const type = useSelector(POMasuk.getTypePOMasuk);

  const pdfExportHandle = () => {
    if (type === "DETAIL") {
      pdfReport(dataPOMasuk);
    } else if (type === "JENIS BARANG") {
      pdfReportJenisBarang(dataPOMasuk);
    } else {
      pdfReportFormatBaru(dataPOMasuk);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "DETAIL" ? (
          <ExcelReport dataExel={dataPOMasuk} dataHead={data} />
        ) : type === "JENIS BARANG" ? (
          <ExcelReportJenisBarang dataExel={dataPOMasuk} dataHead={data} />
        ) : (
          <ExcelReportFormatBaru dataExel={dataPOMasuk} dataHead={data} />
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
