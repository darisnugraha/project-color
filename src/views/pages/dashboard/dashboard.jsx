import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Row, Col, Empty, Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Dashboard";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <h1 className="page-header">
        Dashboard
      </h1>
      <Panel>
        <PanelHeader></PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <Row>
              <Col span={24} style={{ marginTop: 10 }}>
                <Empty />
              </Col>
            </Row>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default Dashboard;
