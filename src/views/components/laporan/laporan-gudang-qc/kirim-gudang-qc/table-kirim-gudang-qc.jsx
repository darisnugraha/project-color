import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimGudangQC from "../../../../../application/selectors/kirimgudangqc";

const TableLaporanKirimGudangQC = () => {
  const dataKirimGudangQC = useSelector(KirimGudangQC.getAllKirimGudangQC);

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Kode Jenis",
      dataIndex: "kode_jenis",
      key: "kode_jenis",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
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
      title: "Design",
      dataIndex: "design",
      key: "design",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataKirimGudangQC}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanKirimGudangQC;
