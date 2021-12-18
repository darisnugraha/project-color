import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaByDivisi from "../../../../../application/selectors/terimabydivisi";

const TabelLaporanTerimaDivisi = () => {
  const dataTerimaByDivisi = useSelector(TerimaByDivisi.getAllTerimaByDivisi);
  
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
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Jml Terima",
      dataIndex: null,
      key: "jumlah_terima",
      align: "center",
      render: (text) => {
        if (text.jumlah_terima !== undefined) {
          return text.jumlah_terima;
        } else {
          return text.sample_terima;
        }
      },
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
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
      dataSource={dataTerimaByDivisi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanTerimaDivisi;
