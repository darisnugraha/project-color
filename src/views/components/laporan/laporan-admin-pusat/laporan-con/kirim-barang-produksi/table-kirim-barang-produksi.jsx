import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimBarangProduksi from "../../../../../../application/selectors/kirimbarangproduksi";

const TabelLaporanKirimBarangProduksi = () => {
  const dataKirimBarangProduksi = useSelector(
    KirimBarangProduksi.getAllKirimBarangProduksi
  );
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tgl_kirim",
      key: "tgl_kirim",
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
      title: "Jml Kirim",
      dataIndex: "stock_out",
      key: "stock_out",
      align: "center",
    },
    {
      title: "Brt Kirim",
      dataIndex: "berat_out",
      key: "berat_out",
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
      dataSource={dataKirimBarangProduksi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanKirimBarangProduksi;
