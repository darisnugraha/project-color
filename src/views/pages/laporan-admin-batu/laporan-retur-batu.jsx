import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanReturBatu from "../../components/laporan/laporan-admin-batu/laporan-retur-batu/table-retur-batu";
import FormLaporanReturBatu from "../../components/laporan/laporan-admin-batu/laporan-retur-batu/form-retur-batu";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-retur-batu/btn-print-retur-batu";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllBatu } from "../../../application/actions/batu";
import DataReturBatu from "../../../application/selectors/returbatu";

const ReturBatu = () => {
  const dataReturBatu = useSelector(DataReturBatu.getAllReturBatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllBatu);
    document.title = "Laporan Retur Batu";
  }, [dispatch]);

  const countLengthData = dataReturBatu.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanReturBatu />
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
          <Link to="/laporan-admin-batu/retur-batu">Laporan Admin Batu</Link>
        </li>
        <li className="breadcrumb-item active">Retur Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Retur Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Retur Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanReturBatu />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default ReturBatu;
