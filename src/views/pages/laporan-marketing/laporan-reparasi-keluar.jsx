import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanReparasiKeluar from "../../components/laporan/laporan-marketing/laporan-reparasi-keluar/table-reparasi-keluar";
import FormLaporanReparasiKeluar from "../../components/laporan/laporan-marketing/laporan-reparasi-keluar/form-reparasi-keluar";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-reparasi-keluar/btn-print-reparasi-keluar";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataReparasiKeluar from "../../../application/selectors/reparasikeluar";
import DataNoPO from "../../../application/selectors/nopo";
import { getAllCustomer } from "../../../application/actions/customer.jsx";
import FormGetNoPO from "../../components/laporan/laporan-marketing/laporan-reparasi-keluar/form-get-no-po.jsx";

const ReparasiKeluar = () => {
  const dataReparasiKeluar = useSelector(
    DataReparasiKeluar.getAllReparasiKeluar
  );
  const dataNoPO = useSelector(DataNoPO.getAllNoPOReparasiRK);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllCustomer);
    document.title = "Laporan Reparasi Keluar";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/marketing/reparasi-keluar">Laporan Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Reparasi Keluar</li>
      </ol>
      <h1 className="page-header">
        Laporan Marketing <small>Reparasi Keluar</small>
      </h1>
      <Panel>
        <PanelHeader>Reparasi Keluar</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormGetNoPO />
              </div>
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }} />
              </div>
            </div>
            <div
              className="row"
              style={{ display: dataNoPO.length === 0 ? "none" : "" }}
            >
              <div className="col-12">
                <FormLaporanReparasiKeluar />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReparasiKeluar.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanReparasiKeluar />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReparasiKeluar.length === 0 ? "none" : "",
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

export default ReparasiKeluar;
