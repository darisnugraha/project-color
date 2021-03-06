import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimSaldoDivisi from "../../components/laporan/kirim-saldo-divisi/table-kirim-saldo-divisi";
import FormLaporanKirimSaldoDivisi from "../../components/laporan/kirim-saldo-divisi/form-kirim-saldo-divisi";
import BtnPrint from "../../components/laporan/kirim-saldo-divisi/btn-print-kirim-saldo-divisi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import KirimSaldoDivisiSelector from "../../../application/selectors/kirimsaldodivisi";
import { useSelector } from "react-redux";

const KirimSaldoDivisi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Kirim dan Saldo per Divisi";
  }, [dispatch]);
  const dataKirimSaldoDivisi = useSelector(
    KirimSaldoDivisiSelector.getAllKirimsaldodivisi
  );
  const countLengthData = dataKirimSaldoDivisi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanKirimSaldoDivisi />
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
          <Link to="/laporan/kirim-desian">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Kirim dan Saldo per Divisi</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Kirim dan Saldo per Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim dan Saldo per Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimSaldoDivisi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimSaldoDivisi;
