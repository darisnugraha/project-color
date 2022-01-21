import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableMutasiStockBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/mutasi-stock-batu-pusat/table-mutasi-stock-batu-pusat";
import FormMutasiStockBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/mutasi-stock-batu-pusat/form-mutasi-stock-batu-pusat";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/mutasi-stock-batu-pusat/btn-print-mutasi-stock-batu-pusat";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataMutasiStockBatuPusat from "../../../../application/selectors/adminmutasistockbatu";
import { getAllBatu } from "../../../../application/actions/batu";

const MutasiStockBatuPusat = () => {
  const dispatch = useDispatch();
  const dataMutasiStockBatuPusat = useSelector(
    DataMutasiStockBatuPusat.getAllAdminMutasiStockBatu
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllBatu);
    document.title = "Laporan Mutasi Stock Pusat";
  }, [dispatch]);
  const countLengthData = dataMutasiStockBatuPusat.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableMutasiStockBatuPusat />
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
          <Link to="/laporan-admin-pusat/batu/mutasi-stock-batu">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Stock Pusat</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Mutasi Stock Pusat</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Stock Pusat</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMutasiStockBatuPusat />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MutasiStockBatuPusat;
