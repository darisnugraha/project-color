import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableLaporanKirimCasting from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-casting/table-kirim-casting";
import FormLaporanKirimCasting from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-casting/form-kirim-casting";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-con/kirim-casting/btn-print-kirim-casting";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimCasting from "../../../../application/selectors/kirimcasting";

const KirimCasting = () => {
  const dispatch = useDispatch();
  const dataKirimCasting = useSelector(DataKirimCasting.getAllKirimCasting);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim Casting";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/con/kirim-casting">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Casting</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Casting</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Casting</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimCasting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimCasting.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimCasting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimCasting.length === 0 ? "none" : "",
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

export default KirimCasting;
