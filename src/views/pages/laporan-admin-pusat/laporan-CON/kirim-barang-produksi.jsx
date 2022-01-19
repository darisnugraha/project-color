import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableKirimBarangProduksi from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-barang-produksi/table-kirim-barang-produksi";
import FormLaporanKirimBarangProduksi from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-barang-produksi/form-kirim-barang-produksi";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-barang-produksi/btn-print-kirim-barang-produksi";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimBarangProduksi from "../../../../application/selectors/kirimbarangproduksi";

const KirimBarangProduksi = () => {
  const dispatch = useDispatch();
  const dataKirimBarangProduksi = useSelector(
    DataKirimBarangProduksi.getAllKirimBarangProduksi
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim Barang Produksi";
  }, [dispatch]);
  const countLengthData = dataKirimBarangProduksi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableKirimBarangProduksi />
        </div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <BtnPrint />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/con/kirim-barang-produksi">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Barang Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Barang Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Barang Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimBarangProduksi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBarangProduksi;
