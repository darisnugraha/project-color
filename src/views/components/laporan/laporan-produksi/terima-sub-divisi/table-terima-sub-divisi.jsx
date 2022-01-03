import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaSubDivisi from "../../../../../application/selectors/terimasubdivisi";

const TableLaporanTerimaSubDivisi = () => {
  const dataTerimaSubDivisi = useSelector(
    TerimaSubDivisi.getAllTerimaSubDivisi
  );

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Sub Divisi",
      dataIndex: "sub_divisi",
      key: "sub_divisi",
      align: "center",
    },
    {
      title: "No Terima",
      dataIndex: "no_terima",
      key: "no_terima",
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
      title: "Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Jml Terima",
      dataIndex: "jumlah_terima",
      key: "jumlah_terima",
      align: "center",
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataTerimaSubDivisi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanTerimaSubDivisi;
