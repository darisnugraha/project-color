import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanMutasiSaldo from "../../components/laporan/laporan-produksi/mutasi-saldo-by-divisi/table-mutasi-saldo-by-divisi";
import FormLaporanMutasiSaldo from "../../components/laporan/laporan-produksi/mutasi-saldo-by-divisi/form-mutasi-saldo-by-divisi";
import BtnPrint from "../../components/laporan/laporan-produksi/mutasi-saldo-by-divisi/btn-print-mutasi-saldo-by-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import { getAllDivisi } from "../../../application/actions/divisi.jsx";
import DataMutasiSaldo from "../../../application/selectors/mutasisaldo";

const MutasiSaldo = () => {
  const dataMutasiSaldo = useSelector(DataMutasiSaldo.getAllMutasiSaldo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    dispatch(getAllDivisi);
    document.title = "Laporan Mutasi Saldo";
  }, [dispatch]);
  const countLengthData = dataMutasiSaldo.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanMutasiSaldo />
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
          <Link to="/laporan-produksi/mutasi-saldo-by-divisi">
            Laporan Produksi
          </Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Saldo</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Mutasi Saldo</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Saldo</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiSaldo />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MutasiSaldo;
