import React from "react";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";

const StockGlobalProduksi = () => {
  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/stock-global-produksi">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Stock Global Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Stock Global Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Stock Global Produksi</PanelHeader>
        <PanelBody>
          <div className="row">
            <div className="col-12">FORM</div>
          </div>
          <div className="row">
            <div className="col-12">TABEL</div>
          </div>
          <div className="row">
            <div className="col-12">BUTTON</div>
          </div>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default StockGlobalProduksi;
