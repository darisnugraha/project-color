import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-kirim-pusat-by-divisi/table-kirim-pusat-by-divisi";
import FormLaporanKirimPusatByDivisi from "../../components/laporan/laporan-produksi/laporan-kirim-pusat-by-divisi/form-kirim-pusat-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/laporan-kirim-pusat-by-divisi/btn-print-kirim-pusat-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataKirimPusatByDivisi from "../../../application/selectors/kirimpusatbydivisi";

const KirimPusatByDivisi = () => {
  const dataKirimPusatByDivisi = useSelector(
    DataKirimPusatByDivisi.getAllKirimPusatByDivisi
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim By Divisi";
  }, [dispatch]);

  const countLengthData = dataKirimPusatByDivisi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanKirimPusatByDivisi />
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
          <Link to="/laporan-produksi/admin-kirim-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim By Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Kirim By Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim By Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimPusatByDivisi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimPusatByDivisi;
