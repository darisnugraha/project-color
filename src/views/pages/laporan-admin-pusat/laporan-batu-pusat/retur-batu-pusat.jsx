import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableReturBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/retur-batu-pusat/table-retur-batu-pusat";
import FormReturBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/retur-batu-pusat/form-retur-batu-pusat";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/retur-batu-pusat/btn-print-retur-batu-pusat";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataReturBatuPusat from "../../../../application/selectors/adminreturbatu";
import { getAllBatu } from "../../../../application/actions/batu";

const ReturBatuPusat = () => {
  const dispatch = useDispatch();
  const dataReturBatuPusat = useSelector(
    DataReturBatuPusat.getAllAdminReturBatu
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllBatu);
    document.title = "Laporan Retur Batu Pusat";
  }, [dispatch]);
  const countLengthData = dataReturBatuPusat.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableReturBatuPusat />
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
          <Link to="/laporan-admin-pusat/batu/admin-retur-batu">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Retur Batu Pusat</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Retur Batu Pusat</small>
      </h1>
      <Panel>
        <PanelHeader>Retur Batu Pusat</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormReturBatuPusat />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default ReturBatuPusat;
