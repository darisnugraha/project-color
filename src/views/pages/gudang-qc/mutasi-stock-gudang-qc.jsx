import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanMutasiStockGudangQC from "../../components/laporan/laporan-gudang-qc/mutasi-stock-gudang-qc/table-mutasi-stock-gudang-qc";
import FormLaporanMutasiStockGudangQC from "../../components/laporan/laporan-gudang-qc/mutasi-stock-gudang-qc/form-mutasi-stock-gudang-qc";
import BtnPrint from "../../components/laporan/laporan-gudang-qc/mutasi-stock-gudang-qc/btn-print-mutasi-stock-gudang-qc";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllKodeJenis } from "../../../application/actions/kodejenis.jsx";
import DataMutasiStockGudangQC from "../../../application/selectors/mutasistockgudangqc";

const MutasiStockGudangQC = () => {
  const dataMutasiStockGudangQC = useSelector(
    DataMutasiStockGudangQC.getAllMutasiStockGudangQC
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllKodeJenis);
    document.title = "Laporan Mutasi Stock Gudang QC";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/gudang-qc/mutasi-stock">Gudang QC</Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Stock Gudang QC</li>
      </ol>
      <h1 className="page-header">
        Gudang QC <small>Mutasi Stock Gudang QC</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Stock Gudang QC</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiStockGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataMutasiStockGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanMutasiStockGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataMutasiStockGudangQC.length === 0 ? "none" : "",
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

export default MutasiStockGudangQC;
