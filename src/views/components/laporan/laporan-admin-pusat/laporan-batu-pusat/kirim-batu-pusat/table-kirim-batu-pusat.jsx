import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimBatuPusat from "../../../../../../application/selectors/adminkirimbatu";

const TableKirimBatuPusat = () => {
  const dataKirimBatuPusat = useSelector(KirimBatuPusat.getAllAdminKirimBatu);
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Bahan",
      dataIndex: "kode_bahan",
      key: "kode_bahan",
      align: "center",
    },
    {
      title: "Divisi",
      dataIndex: "divisi",
      key: "divisi",
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
      dataSource={dataKirimBatuPusat}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableKirimBatuPusat;
