import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableKirimBarang from "../../../components/laporan/laporan-admin-pusat/laporan-barang/kirim-barang/table-kirim-barang";
import FormKirimBarang from "../../../components/laporan/laporan-admin-pusat/laporan-barang/kirim-barang/form-kirim-barang";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-barang/kirim-barang/btn-print-kirim-barang";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimBarang from "../../../../application/selectors/kirimbarang";
import { getAllDesign } from "../../../../application/actions/design.jsx";

const KirimBarang = () => {
  const dispatch = useDispatch();
  const dataKirimBarang = useSelector(DataKirimBarang.getAllKirimBarang);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    document.title = "Laporan Kirim Barang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/barang/kirim-barang">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Barang</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Barang</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Barang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBarang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimBarang.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimBarang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimBarang.length === 0 ? "none" : "",
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

export default KirimBarang;
