import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanMutasiStockCasting from "../../components/laporan/laporan-casting/laporan-mutasi-stock-casting/table-mutasi-stock-casting";
import FormLaporanMutasiStockCasting from "../../components/laporan/laporan-casting/laporan-mutasi-stock-casting/form-mutasi-stock-casting";
import BtnPrint from "../../components/laporan/laporan-casting/laporan-mutasi-stock-casting/btn-print-mutasi-stock-casting";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllJenisBahan } from "../../../application/actions/jenisbahan";
import DataMutasiStockCasting from "../../../application/selectors/mutasistockcasting";

const MutasiStockCasting = () => {
  const dataMutasiStockCasting = useSelector(
    DataMutasiStockCasting.getAllMutasiStockCasting
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllJenisBahan);
    document.title = "Laporan Mutasi Stock Casting";
  }, [dispatch]);
  const countLengthData = dataMutasiStockCasting.length;

  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanMutasiStockCasting />
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
          <Link to="/casting/mutasi-stock-casting">Laporan Casting</Link>
        </li>
        <li className="breadcrumb-item active">Mutasi Stock Casting</li>
      </ol>
      <h1 className="page-header">
        Laporan Casting <small>Mutasi Stock Casting</small>
      </h1>
      <Panel>
        <PanelHeader>Mutasi Stock Casting</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanMutasiStockCasting />
              </div>
            </div>
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MutasiStockCasting;
