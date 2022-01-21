import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import ReturBatuPusat from "../../../../../../application/selectors/adminreturbatu";

const TableReturBatuPusat = () => {
  const dataReturBatuPusat = useSelector(ReturBatuPusat.getAllAdminReturBatu);
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No Retur",
      dataIndex: "no_retur",
      key: "no_retur",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Barang",
      dataIndex: "kode_barang",
      key: "kode_barang",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jumlah Batu",
      dataIndex: "jumlah_batu",
      key: "jumlah_batu",
      align: "center",
    },
    {
      title: "Berat Batu",
      dataIndex: "berat_batu",
      key: "berat_batu",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataReturBatuPusat}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableReturBatuPusat;
