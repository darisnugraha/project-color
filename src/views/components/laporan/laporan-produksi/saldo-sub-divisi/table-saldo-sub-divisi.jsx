import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import SaldoSubDivisi from "../../../../../application/selectors/saldosubdivisi";

const TableLaporanSaldoSubDivisi = () => {
  const dataSaldoSubDivisi = useSelector(SaldoSubDivisi.getAllSaldoSubDivisi);
  const type = useSelector(SaldoSubDivisi.getType);

  const columns = [
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Sub Divisi",
      dataIndex: "sub_divisi",
      key: "sub_divisi",
      align: "center",
    },
    {
      title: "Jenis",
      dataIndex: "jenis",
      key: "jenis",
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
      dataIndex: "bahan",
      key: "bahan",
      align: "center",
    },
    {
      title: "Jml Terima",
      dataIndex: "jumlah_terima",
      key: "jumlah_terima",
      align: "center",
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
      align: "center",
    },
  ];

  const columnsdua = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Sub Divisi",
      dataIndex: "sub_divisi",
      key: "sub_divisi",
      align: "center",
    },
    {
      title: "Jenis",
      dataIndex: "jenis",
      key: "jenis",
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
      title: "Bahan",
      dataIndex: "bahan",
      key: "bahan",
      align: "center",
    },
    {
      title: "Jml Terima",
      dataIndex: "jumlah_terima",
      key: "jumlah_terima",
      align: "center",
    },
    {
      title: "Brt Terima",
      dataIndex: "berat_terima",
      key: "berat_terima",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataSaldoSubDivisi}
      columns={type === "ALL" ? columns : columnsdua}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanSaldoSubDivisi;
