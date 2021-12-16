import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TambahJobOrder from "../../../../../../application/selectors/tambahjoborder";

const TabelLaporanTambahJobOrder = () => {
  const dataTambahJobOrder = useSelector(TambahJobOrder.getAllTambahJobOrder);
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tgl_tambah",
      key: "tgl_tambah",
      align: "center",
    },
    {
      title: "No Tambah",
      dataIndex: "no_tambah",
      key: "no_tambah",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
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
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Jml Tambah",
      dataIndex: "stock",
      key: "stock",
      align: "center",
    },
    {
      title: "Brt Tambah",
      dataIndex: "berat",
      key: "berat",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataTambahJobOrder}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanTambahJobOrder;
