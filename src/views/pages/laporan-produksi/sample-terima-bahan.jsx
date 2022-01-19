import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanSampleTerimaBahan from "../../components/laporan/laporan-produksi/sample-terima-bahan/table-terima-bahan-sample";
import FormLaporanSampleTerimaBahan from "../../components/laporan/laporan-produksi/sample-terima-bahan/form-terima-bahan-sample";
import BtnPrint from "../../components/laporan/laporan-produksi/sample-terima-bahan/btn-print-terima-bahan-sample";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataSampleTerimaBahan from "../../../application/selectors/sampleterimabahan";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan.jsx";

const SampleTerimaBahan = () => {
  const dataSampleTerimaBahan = useSelector(
    DataSampleTerimaBahan.getAllSampleTerimaBahan
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Sample Terima Bahan";
  }, [dispatch]);
  const countLengthData = dataSampleTerimaBahan.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanSampleTerimaBahan />
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
          <Link to="/laporan/sample-terima-bahan">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Sample Terima Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Sample Terima Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Sample Terima Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSampleTerimaBahan />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default SampleTerimaBahan;
