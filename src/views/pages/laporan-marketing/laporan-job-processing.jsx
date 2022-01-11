import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanJobProcessing from "../../components/laporan/laporan-marketing/laporan-job-processing/table-job-processing";
import FormLaporanJobProcessing from "../../components/laporan/laporan-marketing/laporan-job-processing/form-job-processing";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-job-processing/btn-print-job-processing";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataJobProcessing from "../../../application/selectors/jobprocessing";
import DataNoPO from "../../../application/selectors/nopo";
import { getAllCustomer } from "../../../application/actions/customer.jsx";
import FormGetNoPO from "../../components/laporan/laporan-marketing/laporan-job-processing/form-get-no-po.jsx";

const JobProcessing = () => {
  const dataJobProcessing = useSelector(DataJobProcessing.getAllJobProcessing);
  const dataNoPO = useSelector(DataNoPO.getAllNoPO);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllCustomer);
    document.title = "Laporan Job Processing";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/marketing/job-processing">Laporan Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Job Processing</li>
      </ol>
      <h1 className="page-header">
        Laporan Marketing <small>Job Processing</small>
      </h1>
      <Panel>
        <PanelHeader>Job Processing</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormGetNoPO />
              </div>
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }} />
              </div>
            </div>
            <div
              className="row"
              style={{ display: dataNoPO.length === 0 ? "none" : "" }}
            >
              <div className="col-12">
                <FormLaporanJobProcessing />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataJobProcessing.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanJobProcessing />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataJobProcessing.length === 0 ? "none" : "",
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

export default JobProcessing;
