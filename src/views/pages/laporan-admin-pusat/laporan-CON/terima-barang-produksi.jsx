import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableTerimaBarangProduksi from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-barang-produksi/table-terima-barang-produksi";
import FormTerimaBarangProduksi from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-barang-produksi/form-terima-barang-produksi";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-barang-produksi/btn-print-terima-barang-produksi";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataTerimaBarangProduksi from "../../../../application/selectors/terimabarangproduksi";

const TerimaBarangProduksi = () => {
  const dispatch = useDispatch();
  const dataTerimaBarangProduksi = useSelector(
    DataTerimaBarangProduksi.getAllTerimaBarangProduksi
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Terima Barang Produksi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/con/terima-barang-produksi">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Barang Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Terima Barang Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Barang Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBarangProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBarangProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableTerimaBarangProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBarangProduksi.length === 0 ? "none" : "",
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

export default TerimaBarangProduksi;
