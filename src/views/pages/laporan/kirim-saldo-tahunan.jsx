import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanKirimSaldoTahun from "../../components/laporan/kirim-saldo-tahunan/table-kirim-saldo-tahunan";
import FormLaporanKirimSaldoTahun from "../../components/laporan/kirim-saldo-tahunan/form-kirim-saldo-tahunan";
import BtnPrint from "../../components/laporan/kirim-saldo-tahunan/btn-print-kirim-saldo-tahunan";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import KirimSaldoTahun from "../../../application/selectors/kirimsaldotahun";

const KirimSaldoTahunan = () => {
  const dispatch = useDispatch();
  const dataKirimSaldoTahun = useSelector(
    KirimSaldoTahun.getAllKirimsaldotahun
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Stock Global Produksi";
  }, [dispatch]);

  const countLengthData = dataKirimSaldoTahun.length;
  const componentTableButton = (
    <div>
      <div className="row">
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanKirimSaldoTahun />
        </div>
      </div>
      <div className="row">
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
          <Link to="/laporan/kirim-saldo-tahunan">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Kirim dan Saldo per Tahun</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Kirim dan Saldo per Tahun</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim dan Saldo per Tahun</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimSaldoTahun />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimSaldoTahunan;
