import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import TableTambahJobOrder from "../../../components/laporan/laporan-admin-pusat/laporan-con/tambah-job-order/table-tambah-job-order";
import FormTambahJobOrder from "../../../components/laporan/laporan-admin-pusat/laporan-con/tambah-job-order/form-tambah-job-order";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-con/tambah-job-order/btn-print-tambah-job-order";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllJenisBahan } from "../../../../application/actions/jenisbahan.jsx";
import DataTambahJobOrder from "../../../../application/selectors/tambahjoborder";

const TambahJobOrder = () => {
  const dispatch = useDispatch();
  const dataTambahJobOrder = useSelector(
    DataTambahJobOrder.getAllTambahJobOrder
  );
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Tambah Job Order";
  }, [dispatch]);
  const countLengthData = dataTambahJobOrder.length;
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableTambahJobOrder />
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
          <Link to="/laporan-admin-pusat/con/tambah-job-order">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Tambah Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Tambah Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTambahJobOrder />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TambahJobOrder;
