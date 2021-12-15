import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableLaporanTerimaCasting from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-casting/table-terima-casting";
import FormLaporanTerimaCasting from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-casting/form-terima-casting";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-con/terima-casting/btn-print-terima-casting";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataTerimaCasting from "../../../../application/selectors/terimacasting";

const TerimaCasting = () => {
  const dispatch = useDispatch();
  const dataTerimaCasting = useSelector(DataTerimaCasting.getAllTerimaCasting);
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Terima Casting";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-pusat/con/terima-casting">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Casting</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Terima Casting</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Casting</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaCasting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaCasting.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaCasting />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaCasting.length === 0 ? "none" : "",
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

export default TerimaCasting;
