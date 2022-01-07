import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKirimGudangQC from "../../components/laporan/laporan-gudang-qc/kirim-gudang-qc/table-kirim-gudang-qc";
import FormLaporanKirimGudangQC from "../../components/laporan/laporan-gudang-qc/kirim-gudang-qc/form-kirim-gudang-qc";
import BtnPrint from "../../components/laporan/laporan-gudang-qc/kirim-gudang-qc/btn-print-kirim-gudang-qc";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";
import { getAllDesign } from "../../../application/actions/design.jsx";
import DataKirimGudangQC from "../../../application/selectors/kirimgudangqc";

const KirimGudangQC = () => {
  const dataKirimGudangQC = useSelector(DataKirimGudangQC.getAllKirimGudangQC);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    dispatch(getAllDesign);
    document.title = "Laporan Kirim Gudang QC";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/gudang-qc/kirim">Gudang QC</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Gudang QC</li>
      </ol>
      <h1 className="page-header">
        Gudang QC <small>Kirim Gudang QC</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Gudang QC</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimGudangQC.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimGudangQC />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataKirimGudangQC.length === 0 ? "none" : "",
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

export default KirimGudangQC;
