import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import TerimaBatuByDivisi from "../../../../../application/selectors/terimabatubydivisi";

const TableLaporanTerimaBatu = () => {
  const dataTerimaBatu = useSelector(TerimaBatuByDivisi.getAllTerimaBatu);
  const divisi = useSelector(TerimaBatuByDivisi.getDivisi);

  const columns = [
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
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
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

  const columnsTwo = [
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
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
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
      dataSource={dataTerimaBatu}
      columns={
        divisi === "SAMPLE" ||
        divisi === "POLISHING" ||
        divisi === "PLATTING" ||
        divisi === "-"
          ? columnsTwo
          : columns
      }
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanTerimaBatu;
