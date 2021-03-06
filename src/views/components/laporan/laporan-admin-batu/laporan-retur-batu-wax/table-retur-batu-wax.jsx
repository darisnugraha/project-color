import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import ReturBatuWax from "../../../../../application/selectors/returbatuwax";

const TableLaporanReturBatuWax = () => {
  const dataReturBatuWax = useSelector(ReturBatuWax.getAllReturBatuWax);

  const columns = [
    {
      title: "No Retur",
      dataIndex: "no_retur",
      key: "no_retur",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
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
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Kode Batu",
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
      title: "Jumlah Retur",
      dataIndex: "jumlah_retur",
      key: "jumlah_retur",
      align: "center",
    },
    {
      title: "Berat Retur",
      dataIndex: "berat_retur",
      key: "berat_retur",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataReturBatuWax}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanReturBatuWax;
