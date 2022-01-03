import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanTerimaDivisi from "../../components/laporan/laporan-produksi/terima-sub-divisi/table-terima-sub-divisi";
import FormLaporanTerimaDivisi from "../../components/laporan/laporan-produksi/terima-sub-divisi/form-terima-sub-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/terima-sub-divisi/btn-print-terima-sub-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataTerimaSubDivisi from "../../../application/selectors/terimasubdivisi";

const TerimaSubDivisi = () => {
  const dataTerimaSubDivisi = useSelector(
    DataTerimaSubDivisi.getAllTerimaSubDivisi
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDivisi);
    document.title = "Laporan Terima Sub Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-sub-divisi">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima Sub Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Sub Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Sub Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaSubDivisi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaSubDivisi.length === 0 ? "none" : "",
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

export default TerimaSubDivisi;
