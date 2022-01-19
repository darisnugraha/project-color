import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimBahanAdmin from "../../components/laporan/laporan-casting/laporan-kirim-bahan-admin/table-kirim-bahan-admin";
import FormLaporanKirimBahanAdmin from "../../components/laporan/laporan-casting/laporan-kirim-bahan-admin/form-kirim-bahan-admin";
import BtnPrint from "../../components/laporan/laporan-casting/laporan-kirim-bahan-admin/btn-print-kirim-bahan-admin";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataKirimBahanAdmin from "../../../application/selectors/kirimbahanadmin";

const KirimBahanAdmin = () => {
  const dataKirimBahanAdmin = useSelector(
    DataKirimBahanAdmin.getAllKirimBahanAdmin
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim Bahan Admin";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/casting/kirim-bahan-admin">Laporan Casting</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Bahan Admin</li>
      </ol>
      <h1 className="page-header">
        Laporan Casting <small>Kirim Bahan Admin</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Bahan Admin</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimBahanAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimBahanAdmin.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimBahanAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimBahanAdmin.length === 0 ? "none" : "",
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

export default KirimBahanAdmin;
