import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanTerimaBatuByDivisi from "../../components/laporan/laporan-produksi/terima-batu-by-divisi/table-terima-batu-by-divisi";
import FormLaporanTerimaBatuByDivisi from "../../components/laporan/laporan-produksi/terima-batu-by-divisi/form-terima-batu-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/terima-batu-by-divisi/btn-print-terima-batu-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataTerimaBatuByDivisi from "../../../application/selectors/terimabatubydivisi";
import { getAllBatu } from "../../../application/actions/batu.jsx";

const TerimaBatuByDivisi = () => {
  const dataTerimaBatuByDivisi = useSelector(
    DataTerimaBatuByDivisi.getAllTerimaBatu
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    dispatch(getAllBatu);
    document.title = "Laporan Terima Batu By Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-batu-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Batu By Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Batu By Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Batu By Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaBatuByDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBatuByDivisi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaBatuByDivisi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBatuByDivisi.length === 0 ? "none" : "",
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

export default TerimaBatuByDivisi;
