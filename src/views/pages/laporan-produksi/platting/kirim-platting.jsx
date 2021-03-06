import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableKirimPlatting from "../../../components/laporan/laporan-produksi/platting/kirim-platting/table-kirim-platting";
import FormKirimPlatting from "../../../components/laporan/laporan-produksi/platting/kirim-platting/form-kirim-platting";
import BtnPrint from "../../../components/laporan/laporan-produksi/platting/kirim-platting/btn-print-kirim-platting";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimPlatting from "../../../../application/selectors/kirimplatting";
import { getAllDesign } from "../../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../../application/actions/divisi.jsx";

const KirimPlatting = () => {
  const dispatch = useDispatch();
  const dataKirimPlatting = useSelector(DataKirimPlatting.getAllKirimPlatting);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Kirim Platting";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/platting/kirim-platting">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Platting</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Kirim Platting</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Platting</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimPlatting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimPlatting.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimPlatting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimPlatting.length === 0 ? "none" : "",
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

export default KirimPlatting;
