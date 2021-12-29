import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiOutstand from "../../../../../application/selectors/mutasioutstand";

const TableLaporanMutasiOutstand = () => {
  const dataMutasiOutstand = useSelector(MutasiOutstand.getAllMutasiOutstand);

  const columns = [
    {
      title: "No",
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
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
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
      title: "Foto",
      dataIndex: "foto",
      key: "foto",
      align: "center",
    },
    {
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "center",
    },
    {
      title: "Berat Tambahan",
      dataIndex: "berat_tambahan",
      key: "berat_tambahan",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "NIJ 75",
      dataIndex: "nij75",
      key: "nij75",
      align: "center",
    },
    {
      title: "NIJ 70",
      dataIndex: "nij70",
      key: "nij70",
      align: "center",
    },
    {
      title: "NIM 75",
      dataIndex: "nim75",
      key: "nim75",
      align: "center",
    },
    {
      title: "Design",
      dataIndex: "design",
      key: "design",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataMutasiOutstand}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanMutasiOutstand;
