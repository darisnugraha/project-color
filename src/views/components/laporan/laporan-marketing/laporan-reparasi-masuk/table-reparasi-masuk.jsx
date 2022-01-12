import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import ReparasiMasuk from "../../../../../application/selectors/reparasimasuk";

const TableLaporanReparasiMasuk = () => {
  const dataLaporanReparasiMasuk = useSelector(
    ReparasiMasuk.getAllReparasiMasuk
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
      title: "Tanggal Terima",
      dataIndex: "tanggal_terima",
      key: "tanggal_terima",
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
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Gambar",
      dataIndex: "gambar",
      key: "gambar",
      align: "center",
    },
    {
      title: "Ongkos",
      dataIndex: "ongkos",
      key: "ongkos",
      align: "center",
    },
    {
      title: "Berat Nota",
      dataIndex: "berat_nota",
      key: "berat_nota",
      align: "center",
    },
    {
      title: "Berat Timbang",
      dataIndex: "berat_timbang",
      key: "berat_timbang",
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
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataLaporanReparasiMasuk}
      columns={columns}
      scroll={{ x: 2700, y: 1000 }}
    />
  );
};

export default TableLaporanReparasiMasuk;
