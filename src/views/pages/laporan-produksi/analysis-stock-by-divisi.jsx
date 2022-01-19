import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanAnalysisStock from "../../components/laporan/laporan-produksi/analysis-stock-by-divisi/table-analysis-stock-by-divisi";
import FormLaporanAnalysisStock from "../../components/laporan/laporan-produksi/analysis-stock-by-divisi/form-analysis-stock-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/analysis-stock-by-divisi/btn-print-analysis-stock-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataAnalysisStock from "../../../application/selectors/analysisstock";

const AnalysisStock = () => {
  const dataAnalysisStock = useSelector(DataAnalysisStock.getAllAnalysisStock);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDivisi);
    document.title = "Laporan Analysis Stock";
  }, [dispatch]);
  const countLengthData = dataAnalysisStock.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanAnalysisStock />
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <BtnPrint />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/analysis-stock-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Analysis Stock</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Analysis Stock</small>
      </h1>
      <Panel>
        <PanelHeader>Analysis Stock</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanAnalysisStock />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default AnalysisStock;
