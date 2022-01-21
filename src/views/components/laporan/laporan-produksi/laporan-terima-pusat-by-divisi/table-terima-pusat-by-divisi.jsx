import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaPusatByDivisi from "../../../../../application/selectors/terimapusatbydivisi";

const TableLaporanTerimaPusatByDivisi = () => {
  const dataTerimaPusatByDivisi = useSelector(
    TerimaPusatByDivisi.getAllTerimaPusatByDivisi
  );

  const columns = [
    {
      title: "No Terima",
      dataIndex: "no_terima",
      key: "no_terima",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Kode Bahan",
      dataIndex: "kode_bahan",
      key: "kode_bahan",
      align: "center",
    },
    {
      title: "Bahan",
      dataIndex: "bahan",
      key: "bahan",
      align: "center",
    },
    {
      title: "Jumlah Terima",
      dataIndex: "jumlah_terima",
      key: "jumlah_terima",
      align: "center",
    },
    {
      title: "Berat Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
      align: "center",
    },
    {
      title: "Jumlah Rusak",
      dataIndex: "jumlah_rusak",
      key: "jumlah_rusak",
      align: "center",
    },
    {
      title: "Berat Rusak",
      dataIndex: "berat_rusak",
      key: "berat_rusak",
      align: "center",
    },
    {
      title: "Bubuk",
      dataIndex: "bubuk",
      key: "bubuk",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataTerimaPusatByDivisi}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanTerimaPusatByDivisi;
