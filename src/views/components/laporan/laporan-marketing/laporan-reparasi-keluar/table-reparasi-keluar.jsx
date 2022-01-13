import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import ReparasiKeluar from "../../../../../application/selectors/reparasikeluar";

const TableLaporanReparasiKeluar = () => {
  const dataLaporanReparasiKeluar = useSelector(
    ReparasiKeluar.getAllReparasiKeluar
  );

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
    },
    {
      title: "Tanggal Order",
      dataIndex: "tanggal_order",
      key: "tanggal_order",
      align: "center",
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "tanggal_selesai",
      key: "tanggal_selesai",
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
      title: "Gambar",
      dataIndex: "gambar",
      key: "gambar",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "Ongkos",
      dataIndex: "ongkos",
      key: "ongkos",
      align: "center",
    },
    {
      title: "Berat / PCS",
      dataIndex: "berat_pcs",
      key: "berat_pcs",
      align: "center",
    },
    {
      title: "AWH 75",
      dataIndex: "awh75",
      key: "awh75",
      align: "center",
    },
    {
      title: "AYL 75",
      dataIndex: "ayl75",
      key: "ayl75",
      align: "center",
    },
    {
      title: "AYL 70",
      dataIndex: "ayl70",
      key: "ayl70",
      align: "center",
    },
    {
      title: "AWH 375",
      dataIndex: "awh375",
      key: "awh375",
      align: "center",
    },
    {
      title: "AYL 375",
      dataIndex: "ayl375",
      key: "ayl375",
      align: "center",
    },
    {
      title: "Alloy",
      dataIndex: "alloy",
      key: "alloy",
      align: "center",
    },
    {
      title: "Total Berat",
      dataIndex: "total_berat",
      key: "total_berat",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataLaporanReparasiKeluar}
      columns={columns}
      scroll={{ x: 2700, y: 1000 }}
    />
  );
};

export default TableLaporanReparasiKeluar;
