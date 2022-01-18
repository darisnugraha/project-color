import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanReturBatuWax from "../../components/laporan/laporan-admin-batu/laporan-retur-batu-wax/table-retur-batu-wax";
import FormLaporanReturBatuWax from "../../components/laporan/laporan-admin-batu/laporan-retur-batu-wax/form-retur-batu-wax";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-retur-batu-wax/btn-print-retur-batu-wax";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllBatu } from "../../../application/actions/batu";
import DataReturBatuWax from "../../../application/selectors/tambahbatu";

const ReturBatuWax = () => {
  const dataReturBatuWax = useSelector(DataReturBatuWax.getAllTambahBatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllBatu);
    document.title = "Laporan Retur Batu Wax";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-admin-batu/retur-wax-batu">
            Laporan Admin Batu
          </Link>
        </li>
        <li className="breadcrumb-item active">Retur Batu Wax</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Retur Batu Wax</small>
      </h1>
      <Panel>
        <PanelHeader>Retur Batu Wax</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanReturBatuWax />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReturBatuWax.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanReturBatuWax />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataReturBatuWax.length === 0 ? "none" : "",
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

export default ReturBatuWax;
