import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../../application/selectors/ui";
import MutasiStockBatuPusat from "../../../../../../application/selectors/adminmutasistockbatu";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";
import services from "../../../../../../infrastructure/services";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMutasiStockBatuPusat = useSelector(
    MutasiStockBatuPusat.getAllAdminMutasiStockBatu
  );
  const data = services.getLocal("admin_mutasi_stock_batu") || [];

  const pdfExportHandle = () => {
    pdfReport(dataMutasiStockBatuPusat);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={dataMutasiStockBatuPusat} dataHead={data} />
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
