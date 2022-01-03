import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanSaldoSubDivisi from "../../components/laporan/laporan-produksi/saldo-sub-divisi/table-saldo-sub-divisi";
import FormLaporanSaldoSubDivisi from "../../components/laporan/laporan-produksi/saldo-sub-divisi/form-saldo-sub-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/saldo-sub-divisi/btn-print-saldo-sub-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataSaldoSubDivisi from "../../../application/selectors/saldosubdivisi";

const SaldoSubDivisi = () => {
  const dataSaldoSubDivisi = useSelector(
    DataSaldoSubDivisi.getAllSaldoSubDivisi
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDivisi);
    document.title = "Laporan Saldo Sub Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/saldo-sub-divisi">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Saldo Sub Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Saldo Sub Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Saldo Sub Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSaldoSubDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataSaldoSubDivisi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSaldoSubDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataSaldoSubDivisi.length === 0 ? "none" : "",
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

export default SaldoSubDivisi;
