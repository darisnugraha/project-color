import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaBarangProduksi from "../../../../../../application/selectors/terimabarangproduksi";

const TabelLaporanTerimaBarangProduksi = () => {
  const dataTerimaBarangProduksi = useSelector(
    TerimaBarangProduksi.getAllTerimaBarangProduksi
  );
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tgl_terima",
      key: "tgl_terima",
      align: "center",
    },
    {
      title: "No terima",
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
      title: "Jml Terima",
      dataIndex: "stock_in",
      key: "stock_in",
      align: "center",
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_in",
      key: "berat_in",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataTerimaBarangProduksi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanTerimaBarangProduksi;
