import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableKirimPolishing from "../../../components/laporan/laporan-produksi/polishing/kirim-polishing/table-kirim-polishing";
import FormKirimPolishing from "../../../components/laporan/laporan-produksi/polishing/kirim-polishing/form-kirim-polishing";
import BtnPrint from "../../../components/laporan/laporan-produksi/polishing/kirim-polishing/btn-print-kirim-polishing";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimPolishing from "../../../../application/selectors/kirimpolishing";
import { getAllDesign } from "../../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../../application/actions/divisi.jsx";
import { getAllKodeJenis } from "../../../../application/actions/kodejenis.jsx";

const KirimPolishing = () => {
  const dispatch = useDispatch();
  const dataKirimPolishing = useSelector(
    DataKirimPolishing.getAllKirimPolishing
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    dispatch(getAllKodeJenis);
    document.title = "Laporan Kirim Polishing";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/polishing/kirim-polishing">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Polishing</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Kirim Polishing</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Polishing</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimPolishing />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimPolishing.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimPolishing />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimPolishing.length === 0 ? "none" : "",
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

export default KirimPolishing;
