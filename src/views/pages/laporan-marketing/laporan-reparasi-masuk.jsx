import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanReparasiMasuk from "../../components/laporan/laporan-marketing/laporan-reparasi-masuk/table-reparasi-masuk";
import FormLaporanReparasiMasuk from "../../components/laporan/laporan-marketing/laporan-reparasi-masuk/form-reparasi-masuk";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-reparasi-masuk/btn-print-reparasi-masuk";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataReparasiMasuk from "../../../application/selectors/reparasimasuk";
import DataNoPO from "../../../application/selectors/nopo";
import { getAllCustomer } from "../../../application/actions/customer.jsx";
import FormGetNoPO from "../../components/laporan/laporan-marketing/laporan-reparasi-masuk/form-get-no-po.jsx";

const ReparasiMasuk = () => {
  const dataReparasiMasuk = useSelector(DataReparasiMasuk.getAllReparasiMasuk);
  const dataNoPO = useSelector(DataNoPO.getAllNoPOReparasi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllCustomer);
    document.title = "Laporan Reparasi Masuk";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/marketing/reparasi-masuk">Laporan Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Reparasi Masuk</li>
      </ol>
      <h1 className="page-header">
        Laporan Marketing <small>Reparasi Masuk</small>
      </h1>
      <Panel>
        <PanelHeader>Reparasi Masuk</PanelHeader>
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
                <FormLaporanReparasiMasuk />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReparasiMasuk.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanReparasiMasuk />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReparasiMasuk.length === 0 ? "none" : "",
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

export default ReparasiMasuk;
