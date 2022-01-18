import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanSaldoStockBatu from "../../components/laporan/laporan-admin-batu/laporan-saldo-stock-batu/table-saldo-stock-batu";
import FormLaporanSaldoStockBatu from "../../components/laporan/laporan-admin-batu/laporan-saldo-stock-batu/form-saldo-stock-batu";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-saldo-stock-batu/btn-print-saldo-stock-batu";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataSaldoStockBatu from "../../../application/selectors/saldostockbatu";

const SaldoStockBatu = () => {
  const dataSaldoStockBatu = useSelector(
    DataSaldoStockBatu.getAllSaldoStockBatu
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Saldo Stock Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-batu/saldo-stock-batu">
            Laporan Admin Batu
          </Link>
        </li>
        <li className="breadcrumb-item active">Saldo Stock Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Saldo Stock Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Saldo Stock Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSaldoStockBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataSaldoStockBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSaldoStockBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataSaldoStockBatu.length === 0 ? "none" : "",
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

export default SaldoStockBatu;
