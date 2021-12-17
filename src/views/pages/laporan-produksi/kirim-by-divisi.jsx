import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanKirimByDivisi from "../../components/laporan/laporan-produksi/kirim-by-divisi/table-kirim-by-divisi";
import FormLaporanKirimByDivisi from "../../components/laporan/laporan-produksi/kirim-by-divisi/form-kirim-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/kirim-by-divisi/btn-print-kirim-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataKirimByDivisi from "../../../application/selectors/kirimbydivisi";

const KirimByDivisi = () => {
  const dataKirimByDivisi = useSelector(DataKirimByDivisi.getAllKirimByDivisi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Kirim By Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/kirim-by-divisi">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Kirim By Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Kirim By Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim By Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimByDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimByDivisi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimByDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimByDivisi.length === 0 ? "none" : "",
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

export default KirimByDivisi;