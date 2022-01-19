import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableProsesProduksi from "../../components/laporan/laporan-marketing/laporan-proses-produksi/table-proses-produksi";
import FormProsesProduksi from "../../components/laporan/laporan-marketing/laporan-proses-produksi/form-proses-produksi";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-proses-produksi/btn-print-proses-produksi";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataProsesProduksi from "../../../application/selectors/prosesproduksi";

const ProsesProduksi = () => {
  const dataProsesProduksi = useSelector(
    DataProsesProduksi.getAllProsesProduksi
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Proses Produksi";
  }, [dispatch]);
  const countLengthData = dataProsesProduksi.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableProsesProduksi />
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
          <Link to="/laporan-marketing/proses-produksi">Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Proses Produksi</li>
      </ol>
      <h1 className="page-header">
        Marketing <small>Proses Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Proses Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormProsesProduksi />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default ProsesProduksi;
