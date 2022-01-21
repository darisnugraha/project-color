import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableKirimBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/kirim-batu-pusat/table-kirim-batu-pusat";
import FormKirimBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/kirim-batu-pusat/form-kirim-batu-pusat";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/kirim-batu-pusat/btn-print-kirim-batu-pusat";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataKirimBatuPusat from "../../../../application/selectors/adminkirimbatu";
import { getAllBatu } from "../../../../application/actions/batu";

const KirimBatuPusat = () => {
  const dispatch = useDispatch();
  const dataKirimBatuPusat = useSelector(
    DataKirimBatuPusat.getAllAdminKirimBatu
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllBatu);
    document.title = "Laporan Kirim Batu Pusat";
  }, [dispatch]);
  const countLengthData = dataKirimBatuPusat.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableKirimBatuPusat />
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
          <Link to="/laporan-admin-pusat/batu/admin-kirim-batu">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Batu Pusat</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Batu Pusat</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Batu Pusat</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBatuPusat />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBatuPusat;
