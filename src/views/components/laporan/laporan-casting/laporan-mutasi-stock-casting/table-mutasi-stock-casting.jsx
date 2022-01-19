import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiStockCasting from "../../../../../application/selectors/mutasistockcasting";

const TableLaporanMutasiStockCasting = () => {
  const dataMutasiStockCasting = useSelector(
    MutasiStockCasting.getAllMutasiStockCasting
  );

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
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
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "Terima",
      key: "terima",
      align: "center",
      children: [
        {
          title: "QTY",
          dataIndex: "jumlah_terima",
          key: "jumlah_terima",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_terima",
          key: "berat_terima",
          align: "center",
        },
      ],
    },
    {
      title: "Rusak",
      key: "rusak",
      align: "center",
      children: [
        {
          title: "QTY",
          dataIndex: "jumlah_rusak",
          key: "jumlah_rusak",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_rusak",
          key: "berat_rusak",
          align: "center",
        },
      ],
    },
    {
      title: "Batu",
      key: "batu",
      align: "center",
      children: [
        {
          title: "Rusak",
          dataIndex: "batu_rusak",
          key: "batu_rusak",
          align: "center",
        },
        {
          title: "Sisa",
          dataIndex: "batu_sisa",
          key: "batu_sisa",
          align: "center",
        },
      ],
    },
    {
      title: "Kirim",
      key: "kirim",
      align: "center",
      children: [
        {
          title: "QTY",
          dataIndex: "jumlah_kirim",
          key: "jumlah_kirim",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_kirim",
          key: "berat_kirim",
          align: "center",
        },
        {
          title: "Sisa",
          dataIndex: "sisa_kirim",
          key: "sisa_kirim",
          align: "center",
        },
      ],
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
      dataSource={dataMutasiStockCasting}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanMutasiStockCasting;
