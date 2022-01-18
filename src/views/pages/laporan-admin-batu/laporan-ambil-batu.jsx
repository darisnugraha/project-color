import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanAmbilBatu from "../../components/laporan/laporan-admin-batu/laporan-ambil-batu/table-ambil-batu";
import FormLaporanAmbilBatu from "../../components/laporan/laporan-admin-batu/laporan-ambil-batu/form-ambil-batu";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-ambil-batu/btn-print-ambil-batu";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataAmbilBatu from "../../../application/selectors/ambilbatu";

const AmbilBatu = () => {
  const dataAmbilBatu = useSelector(DataAmbilBatu.getAllAmbilBatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Ambil Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-batu/ambil-batu">Laporan Admin Batu</Link>
        </li>
        <li className="breadcrumb-item active">Ambil Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Ambil Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Ambil Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanAmbilBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataAmbilBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanAmbilBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataAmbilBatu.length === 0 ? "none" : "",
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

export default AmbilBatu;
