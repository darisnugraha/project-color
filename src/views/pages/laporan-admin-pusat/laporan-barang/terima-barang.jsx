import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableTerimaBarang from "../../../components/laporan/laporan-admin-pusat/laporan-barang/terima-barang/table-terima-barang";
import FormTerimaBarang from "../../../components/laporan/laporan-admin-pusat/laporan-barang/terima-barang/form-terima-barang";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-barang/terima-barang/btn-print-terima-barang";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataTerimaBarang from "../../../../application/selectors/terimabarang";
import { getAllDesign } from "../../../../application/actions/design.jsx";

const TerimaBarang = () => {
  const dispatch = useDispatch();
  const dataTerimaBarang = useSelector(DataTerimaBarang.getAllTerimaBarang);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    document.title = "Laporan Terima Barang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/barang/terima-barang">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Barang</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Terima Barang</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Barang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBarang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBarang.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableTerimaBarang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaBarang.length === 0 ? "none" : "",
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

export default TerimaBarang;
