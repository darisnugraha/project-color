import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimPusatByDivisi from "../../../../../application/selectors/kirimpusatbydivisi";

const TableLaporanKirimPusatByDivisi = () => {
  const dataKirimPusatByDivisi = useSelector(
    KirimPusatByDivisi.getAllKirimPusatByDivisi
  );

  const columns = [
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Kode Bahan",
      dataIndex: "kode_bahan",
      key: "kode_bahan",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Jumlah Kirim",
      dataIndex: "jumlah_kirim",
      key: "jumlah_kirim",
      align: "center",
    },
    {
      title: "Berat Kirim",
      dataIndex: "berat_kirim",
      key: "berat_kirim",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataKirimPusatByDivisi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanKirimPusatByDivisi;
