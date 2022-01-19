import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanTambahBatu from "../../components/laporan/laporan-admin-batu/laporan-tambah-batu/table-tambah-batu";
import FormLaporanTambahBatu from "../../components/laporan/laporan-admin-batu/laporan-tambah-batu/form-tambah-batu";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-tambah-batu/btn-print-tambah-batu";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllBatu } from "../../../application/actions/batu";
import DataTambahBatu from "../../../application/selectors/tambahbatu";

const TambahBatu = () => {
  const dataTambahBatu = useSelector(DataTambahBatu.getAllTambahBatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllBatu);
    document.title = "Laporan Tambah Batu";
  }, [dispatch]);

  const countLengthData = dataTambahBatu.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanTambahBatu />
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
          <Link to="/laporan-admin-batu/tambah-batu">Laporan Admin Batu</Link>
        </li>
        <li className="breadcrumb-item active">Tambah Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Tambah Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTambahBatu />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TambahBatu;
