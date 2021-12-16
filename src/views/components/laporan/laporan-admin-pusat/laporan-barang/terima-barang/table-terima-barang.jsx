import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaBarang from "../../../../../../application/selectors/terimabarang";

const TabelLaporanTerimaBarang = () => {
  const dataTerimaBarang = useSelector(TerimaBarang.getAllTerimaBarang);
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tgl_terima",
      key: "tgl_terima",
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
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Design",
      dataIndex: "design",
      key: "design",
      align: "center",
    },
    {
      title: "Jml Terima",
      dataIndex: "stock_rusak",
      key: "stock_in",
      align: "center",
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_in",
      key: "berat_in",
      align: "center",
    },
    {
      title: "Jml Rusak",
      dataIndex: "stock_rusak",
      key: "stock_rusak",
      align: "center",
    },
    {
      title: "Brt Rusak",
      dataIndex: "berat_rusak",
      key: "berat_rusak",
      align: "center",
    },
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataTerimaBarang}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanTerimaBarang;
