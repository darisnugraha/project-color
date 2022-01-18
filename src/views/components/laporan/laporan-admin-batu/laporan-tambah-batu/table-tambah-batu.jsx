import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TambahBatu from "../../../../../application/selectors/tambahbatu";

const TableLaporanTambahBatu = () => {
  const dataTambahBatu = useSelector(TambahBatu.getAllTambahBatu);

  const columns = [
    {
      title: "No Tambah Saldo",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Nama Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Ukuran Batu",
      dataIndex: "ukuran_batu",
      key: "ukuran_batu",
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
      dataSource={dataTambahBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanTambahBatu;
