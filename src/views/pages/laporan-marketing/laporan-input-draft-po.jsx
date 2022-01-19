import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import TableLaporanInputDraftPO from "../../components/laporan/laporan-marketing/laporan-input-draft-po/table-input-draft-po";
import FormLaporanInputDraftPO from "../../components/laporan/laporan-marketing/laporan-input-draft-po/form-input-draft-po";
import BtnPrint from "../../components/laporan/laporan-marketing/laporan-input-draft-po/btn-print-input-draft-po";
import { pageLoadedLogin } from "../../../application/actions/ui";
import DataInputDraftPO from "../../../application/selectors/inputdraftpo";
import DataNoPO from "../../../application/selectors/nopo";
import { getAllCustomer } from "../../../application/actions/customer.jsx";
import FormGetNoPO from "../../components/laporan/laporan-marketing/laporan-input-draft-po/form-get-no-po.jsx";

const InputDraftPO = () => {
  const dataInputDraftPO = useSelector(DataInputDraftPO.getAllInputDraftPO);
  const dataNoPO = useSelector(DataNoPO.getAllNoPO);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllCustomer);
    document.title = "Laporan Input Draft PO";
  }, [dispatch]);
  const countLengthDataPO = dataNoPO.length;
  const countLengthData = dataInputDraftPO.length;
  const componentForm = (
    <div>
      <div className="row">
        <div className="col-12">
          <FormLaporanInputDraftPO />
        </div>
      </div>
    </div>
  );
  const componentTableButton = (
    <div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12">
          <Divider orientation="left" style={{ fontSize: "14px" }}>
            Tabel Laporan
          </Divider>
        </div>
        <div className="col-12">
          <TableLaporanInputDraftPO />
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
          <Link to="/marketing/input-draft-po">Laporan Marketing</Link>
        </li>
        <li className="breadcrumb-item active">Input Draft PO</li>
      </ol>
      <h1 className="page-header">
        Laporan Marketing <small>Input Draft PO</small>
      </h1>
      <Panel>
        <PanelHeader>Input Draft PO</PanelHeader>
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
            {countLengthDataPO !== 0 && componentForm}
            {countLengthData !== 0 && componentTableButton}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default InputDraftPO;
