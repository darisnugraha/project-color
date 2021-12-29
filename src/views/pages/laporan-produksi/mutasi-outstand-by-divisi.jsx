import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanMutasiOutstand from "../../components/laporan/laporan-produksi/mutasi-outstand-by-divisi/table-mutasi-outstand-by-divisi";
import FormLaporanMutasiOutstand from "../../components/laporan/laporan-produksi/mutasi-outstand-by-divisi/form-mutasi-outstand-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/mutasi-outstand-by-divisi/btn-print-mutasi-outstand-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataMutasiOutstand from "../../../application/selectors/mutasioutstand";

const MutasiOutstand = () => {
  const dataMutasiOutstand = useSelector(
    DataMutasiOutstand.getAllMutasiOutstand
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Mutasi Outstand";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/mutasi-outstand-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Outstand</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Mutasi Outstand</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Outstand</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiOutstand />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataMutasiOutstand.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanMutasiOutstand />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataMutasiOutstand.length === 0 ? "none" : "",
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

export default MutasiOutstand;
