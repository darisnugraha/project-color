import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimMarketingGudangQC from "../../components/laporan/laporan-gudang-qc/kirim-marketing-gudang-qc/table-kirim-marketing-gudang-qc";
import FormLaporanKirimMarketingGudangQC from "../../components/laporan/laporan-gudang-qc/kirim-marketing-gudang-qc/form-kirim-marketing-gudang-qc";
import BtnPrint from "../../components/laporan/laporan-gudang-qc/kirim-marketing-gudang-qc/btn-print-kirim-marketing-gudang-qc";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllKodeJenis } from "../../../application/actions/kodejenis.jsx";
import DataKirimMarketingGudangQC from "../../../application/selectors/kirimmarketinggudangqc";

const KirimMarketingGudangQC = () => {
  const dataKirimMarketingGudangQC = useSelector(
    DataKirimMarketingGudangQC.getAllKirimMarketingGudangQC
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllKodeJenis);
    document.title = "Laporan Kirim Marketing Gudang QC";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/gudang-qc/kirim-marketing">Gudang QC</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Marketing Gudang QC</li>
      </ol>
      <h1 className="page-header">
        Gudang QC <small>Kirim Marketing Gudang QC</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Marketing Gudang QC</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimMarketingGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimMarketingGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimMarketingGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimMarketingGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <BtnPrint />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimMarketingGudangQC;
