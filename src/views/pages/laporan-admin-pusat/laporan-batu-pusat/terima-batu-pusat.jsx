import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableTerimaBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/terima-batu-pusat/table-terima-batu-pusat";
import FormTerimaBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/terima-batu-pusat/form-terima-batu-pusat";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-batu-pusat/terima-batu-pusat/btn-print-terima-batu-pusat";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataTerimaBatuPusat from "../../../../application/selectors/adminterimabatu";
import { getAllBatu } from "../../../../application/actions/batu";

const TerimaBatuPusat = () => {
  const dispatch = useDispatch();
  const dataTerimaBatuPusat = useSelector(
    DataTerimaBatuPusat.getAllAdminTerimaBatu
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllBatu);
    document.title = "Laporan Terima Batu Pusat";
  }, [dispatch]);
  const countLengthData = dataTerimaBatuPusat.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableTerimaBatuPusat />
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
          <Link to="/laporan-admin-pusat/batu/admin-terima-batu">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Batu Pusat</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Terima Batu Pusat</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Batu Pusat</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBatuPusat />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaBatuPusat;
