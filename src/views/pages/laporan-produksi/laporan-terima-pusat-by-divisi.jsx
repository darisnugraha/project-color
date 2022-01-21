import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanTerimaPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-terima-pusat-by-divisi/table-terima-pusat-by-divisi";
import FormLaporanTerimaPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-terima-pusat-by-divisi/form-terima-pusat-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/laporan-terima-pusat-by-divisi/btn-print-terima-pusat-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataTerimaPusatByDivisi from "../../../application/selectors/terimapusatbydivisi";

const TerimaPusatByDivisi = () => {
  const dataTerimaPusatByDivisi = useSelector(
    DataTerimaPusatByDivisi.getAllTerimaPusatByDivisi
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Terima By Divisi";
  }, [dispatch]);

  const countLengthData = dataTerimaPusatByDivisi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanTerimaPusatByDivisi />
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
          <Link to="/laporan-produksi/admin-terima-by-divisi">
            Laporan Produksi
          </Link>
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
                <FormLaporanTerimaPusatByDivisi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaPusatByDivisi;
