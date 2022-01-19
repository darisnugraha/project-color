import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanMutasiHistory from "../../components/laporan/laporan-produksi/mutasi-history-by-divisi/table-mutasi-history-by-divisi";
import FormLaporanMutasiHistory from "../../components/laporan/laporan-produksi/mutasi-history-by-divisi/form-mutasi-history-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/mutasi-history-by-divisi/btn-print-mutasi-history-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataMutasiHistory from "../../../application/selectors/mutasihistory";

const MutasiHistory = () => {
  const dataMutasiHistory = useSelector(DataMutasiHistory.getAllMutasiHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Mutasi History";
  }, [dispatch]);
  const countLengthData = dataMutasiHistory.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanMutasiHistory />
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
          <Link to="/laporan-produksi/mutasi-history-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Mutasi History</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Mutasi History</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi History</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiHistory />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MutasiHistory;
