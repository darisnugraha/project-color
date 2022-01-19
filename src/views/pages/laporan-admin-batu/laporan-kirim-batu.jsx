import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimBatu from "../../components/laporan/laporan-admin-batu/laporan-kirim-batu/table-kirim-batu";
import FormLaporanKirimBatu from "../../components/laporan/laporan-admin-batu/laporan-kirim-batu/form-kirim-batu";
import BtnPrint from "../../components/laporan/laporan-admin-batu/laporan-kirim-batu/btn-print-kirim-batu";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllBatu } from "../../../application/actions/batu";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataKirimBatu from "../../../application/selectors/kirimbatu";

const KirimBatu = () => {
  const dataKirimBatu = useSelector(DataKirimBatu.getAllKirimBatu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllBatu);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim Batu";
  }, [dispatch]);
  const countLengthData = dataKirimBatu.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanKirimBatu />
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
          <Link to="/laporan-admin-batu/kirim-batu">Laporan Admin Batu</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Batu <small>Kirim Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimBatu />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBatu;
