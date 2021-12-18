import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanTerimaDivisi from "../../components/laporan/laporan-produksi/terima-by-divisi/table-terima-by-divisi";
import FormLaporanTerimaDivisi from "../../components/laporan/laporan-produksi/terima-by-divisi/form-terima-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/terima-by-divisi/btn-print-terima-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataTerimaByDivisi from "../../../application/selectors/terimabydivisi";

const TerimaByDivisi = () => {
  const dataTerimaByDivisi = useSelector(
    DataTerimaByDivisi.getAllTerimaByDivisi
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Terima By Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-by-divisi">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima By Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima By Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima By Divisi</PanelHeader>
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
                display: dataTerimaByDivisi.length === 0 ? "none" : "",
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
                display: dataTerimaByDivisi.length === 0 ? "none" : "",
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

export default TerimaByDivisi;
