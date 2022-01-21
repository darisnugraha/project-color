import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiStockBatuPusat from "../../../../../../application/selectors/adminmutasistockbatu";

const TableMutasiStockBatuPusat = () => {
  const dataMutasiStockBatuPusat = useSelector(
    MutasiStockBatuPusat.getAllAdminMutasiStockBatu
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
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
      align: "center",
    },
    {
      title: "Ukuran Batu",
      dataIndex: "ukuran_batu",
      key: "ukuran_batu",
      align: "center",
    },
    {
      title: "Terima",
      key: "terima",
      align: "center",
      children: [
        {
          title: "Qty",
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
          title: "Qty",
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
      title: "Kirim",
      key: "kirim",
      align: "center",
      children: [
        {
          title: "Qty",
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
      ],
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
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
      dataSource={dataMutasiStockBatuPusat}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableMutasiStockBatuPusat;
