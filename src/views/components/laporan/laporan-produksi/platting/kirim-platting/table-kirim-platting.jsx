import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimPlatting from "../../../../../../application/selectors/kirimbydivisi";

const TabelLaporanKirimPlatting = () => {
  const dataKirimPlatting = useSelector(KirimPlatting.getAllKirimByDivisi);
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
      title: "Kode Jenis",
      dataIndex: "kode_jenis",
      key: "kode_jenis",
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
      dataIndex: "jumlah_kirim",
      key: "jumlah_kirim",
      align: "center",
    },
    {
      title: "Brt Kirim",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
      align: "center",
    },
    {
      title: "Jml Rusak",
      dataIndex: "jumlah_rusak",
      key: "jumlah_rusak",
      align: "center",
    },
    {
      title: "Brt Rusak",
      dataIndex: "berat_rusak",
      key: "berat_rusak",
      align: "center",
    },
    {
      title: "Jml Sparepart",
      dataIndex: "jumlah_sparepart",
      key: "jumlah_sparepart",
      align: "center",
    },
    {
      title: "Brt Sparepart",
      dataIndex: "berat_sparepart",
      key: "berat_sparepart",
      align: "center",
    },
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
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
      dataSource={dataKirimPlatting}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanKirimPlatting;
