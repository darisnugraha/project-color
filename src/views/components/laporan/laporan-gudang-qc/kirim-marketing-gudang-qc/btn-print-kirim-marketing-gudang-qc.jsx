import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import ui from "../../../../../application/selectors/ui";
import KirimMarketingGudangQC from "../../../../../application/selectors/kirimmarketinggudangqc";
import ExcelReport from "./excel/excelReport";
import ExcelReportOld from "./excel/excelReportOld";
import pdfReport from "./pdf/pdfReport";
import pdfReportOld from "./pdf/pdfReportOld";
import service from "../../../../../infrastructure/services/index";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataKirimMarketingGudangQC = useSelector(
    KirimMarketingGudangQC.getAllKirimMarketingGudangQC
  );
  const type = useSelector(
    KirimMarketingGudangQC.getTypeKirimMarketingGudangQC
  );
  const data = service.getLocal("kirim_marketing_gudang_qc") || [];

  const pdfExportHandle = () => {
    if (type === "NEW") {
      pdfReport(dataKirimMarketingGudangQC);
    } else {
      pdfReportOld(dataKirimMarketingGudangQC);
    }
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        {type === "NEW" ? (
          <ExcelReport dataExel={dataKirimMarketingGudangQC} dataHead={data} />
        ) : (
          <ExcelReportOld
            dataExel={dataKirimMarketingGudangQC}
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

export default connect()(BtnPrint);
