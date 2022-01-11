import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanBatalJobOrder from "../../components/laporan/laporan-marketing/laporan-batal-job-order/table-batal-job-order";
import FormLaporanBatalJobOrder from "../../components/laporan/laporan-marketing/laporan-batal-job-order/form-batal-job-order";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-batal-job-order/btn-print-batal-job-order";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataBatalJobOrder from "../../../application/selectors/bataljoborder";

const BatalJobOrder = () => {
  const dataBatalJobOrder = useSelector(DataBatalJobOrder.getAllBatalJobOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Batal Job Order";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-marketing/batal-job-order">Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Batal Job Order</li>
      </ol>
      <h1 className="page-header">
        Marketing <small>Batal Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Batal Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanBatalJobOrder />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataBatalJobOrder.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanBatalJobOrder />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataBatalJobOrder.length === 0 ? "none" : "",
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

export default BatalJobOrder;
