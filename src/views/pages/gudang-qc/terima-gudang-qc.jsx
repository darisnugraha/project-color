import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanTerimaGudangQC from "../../components/laporan/laporan-gudang-qc/terima-gudang-qc/table-terima-gudang-qc";
import FormLaporanTerimaGudangQC from "../../components/laporan/laporan-gudang-qc/terima-gudang-qc/form-terima-gudang-qc";
import BtnPrint from "../../components/laporan/laporan-gudang-qc/terima-gudang-qc/btn-print-terima-gudang-qc";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import DataTerimaGudangQC from "../../../application/selectors/terimagudangqc";

const TerimaGudangQC = () => {
  const dataTerimaGudangQC = useSelector(
    DataTerimaGudangQC.getAllTerimaGudangQC
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    document.title = "Laporan Terima Gudang QC";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/gudang-qc/terima">Gudang QC</Link>
        </li>
        <li className="breadcrumb-item active">Terima Gudang QC</li>
      </ol>
      <h1 className="page-header">
        Gudang QC <small>Terima Gudang QC</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Gudang QC</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataTerimaGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <BtnPrint />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaGudangQC;
