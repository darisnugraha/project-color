import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanPOMasuk from "../../components/laporan/laporan-marketing/laporan-po-masuk/table-po-masuk";
import FormLaporanPOMasuk from "../../components/laporan/laporan-marketing/laporan-po-masuk/form-po-masuk";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-po-masuk/btn-print-po-masuk";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataPOMasuk from "../../../application/selectors/pomasuk";

const LaporanPOMasuk = () => {
  const dataPOMasuk = useSelector(DataPOMasuk.getAllPOMasuk);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan PO Masuk";
  }, [dispatch]);
  const countLengthData = dataPOMasuk.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanPOMasuk />
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
          <Link to="/laporan-marketing/po-masuk">Marketing</Link>
        </li>
        <li className="breadcrumb-item active">PO Masuk</li>
      </ol>
      <h1 className="page-header">
        Marketing <small>PO Masuk</small>
      </h1>
      <Panel>
        <PanelHeader>PO Masuk</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanPOMasuk />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default LaporanPOMasuk;
