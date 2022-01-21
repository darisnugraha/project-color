import React from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import MutasiStockPusatByDivisi from "../../../../../application/selectors/mutasistockpusatbydivisi";
import ExcelReport from "./excel/excelReport";
import ExcelReportTarikKawat from "./excel/excelReportTarikKawat";
import ExcelReportBatu from "./excel/excelReportBatu";
import ExcelReportLebur from "./excel/exportReportLebur";
import pdfReport from "./pdf/pdfReport";
import pdfReportTarikKawat from "./pdf/pdfReportTarikKawat";
import pdfReportBatu from "./pdf/pdfReportBatu";
import pdfReportLebur from "./pdf/pdfReportLebur";
import pdfReportOutstand from "./pdf/pdfReportOutstand";
import service from "../../../../../infrastructure/services/index";
import ExcelReportOutstand from "./excel/excelReportOutstand";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMutasiStockPusatByDivisi = useSelector(
    MutasiStockPusatByDivisi.getAllMutasiStockPusatByDivisi
  );
  const divisi = useSelector(
    MutasiStockPusatByDivisi.getDivisiMutasiStockPusatByDivisi
  );
  const type = useSelector(
    MutasiStockPusatByDivisi.getTypeMutasiStockPusatByDivisi
  );
  const data = service.getLocal("mutasi_stock_pusat_divisi") || [];

  const pdfExportHandle = () => {
    if (divisi === "HAND WORKING") {
      if (type === "OUTSTANDING") {
        pdfReportOutstand(dataMutasiStockPusatByDivisi);
      } else {
        pdfReport(dataMutasiStockPusatByDivisi);
      }
    } else if (divisi === "TARIK KAWAT") {
      if (type === "OUTSTANDING") {
        pdfReportOutstand(dataMutasiStockPusatByDivisi);
      } else {
        pdfReportTarikKawat(dataMutasiStockPusatByDivisi);
      }
    } else if (divisi === "BATU") {
      if (type === "OUTSTANDING") {
        pdfReportOutstand(dataMutasiStockPusatByDivisi);
      } else {
        pdfReportBatu(dataMutasiStockPusatByDivisi);
      }
    } else {
      if (type === "OUTSTANDING") {
        pdfReportOutstand(dataMutasiStockPusatByDivisi);
      } else {
        pdfReportLebur(dataMutasiStockPusatByDivisi);
      }
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "OUTSTANDING" ? (
          <ExcelReportOutstand
            dataExel={dataMutasiStockPusatByDivisi}
            dataHead={data}
          />
        ) : divisi === "HAND WORKING" ? (
          <ExcelReport
            dataExel={dataMutasiStockPusatByDivisi}
            dataHead={data}
          />
        ) : divisi === "TARIK KAWAT" ? (
          <ExcelReportTarikKawat
            dataExel={dataMutasiStockPusatByDivisi}
            dataHead={data}
          />
        ) : divisi === "BATU" ? (
          <ExcelReportBatu
            dataExel={dataMutasiStockPusatByDivisi}
            dataHead={data}
          />
        ) : (
          <ExcelReportLebur
            dataExel={dataMutasiStockPusatByDivisi}
            dataHead={data}
          />
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
