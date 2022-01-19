import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanKartuJobOrder from "../../components/laporan/laporan-admin-pusat/laporan-kartu-job-order/table-kartu-job-order";
import FormLaporanKartuJobOrder from "../../components/laporan/laporan-admin-pusat/laporan-kartu-job-order/form-kartu-job-order";
import BtnPrint from "../../components/laporan/laporan-admin-pusat/laporan-kartu-job-order/btn-print-kartu-job-order";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataKartuJobOrder from "../../../application/selectors/kartujoborder";

const KartuJobOrder = () => {
  const dataKartuJobOrder = useSelector(DataKartuJobOrder.getAllKartuJobOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kartu Job Order";
  }, [dispatch]);
  const countLengthData = dataKartuJobOrder.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanKartuJobOrder />
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
          <Link to="/laporan-admin-pusat/kartu-job-order">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kartu Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kartu Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Kartu Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKartuJobOrder />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KartuJobOrder;
