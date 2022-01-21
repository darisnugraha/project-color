import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanMutasiStockPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-mutasi-stock-pusat-by-divisi/table-mutasi-stock-pusat-by-divisi";
import FormLaporanMutasiStockPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-mutasi-stock-pusat-by-divisi/form-mutasi-stock-pusat-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/laporan-mutasi-stock-pusat-by-divisi/btn-print-mutasi-stock-pusat-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataMutasiStockPusatByDivisi from "../../../application/selectors/mutasistockpusatbydivisi";

const MutasiStockPusatByDivisi = () => {
  const dataMutasiStockPusatByDivisi = useSelector(
    DataMutasiStockPusatByDivisi.getAllMutasiStockPusatByDivisi
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Mutasi Stock Produksi";
  }, [dispatch]);

  const countLengthData = dataMutasiStockPusatByDivisi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanMutasiStockPusatByDivisi />
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
          <Link to="/laporan-produksi/mutasi-stock-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Stock Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Mutasi Stock Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Stock Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiStockPusatByDivisi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MutasiStockPusatByDivisi;
