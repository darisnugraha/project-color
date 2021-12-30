import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import AnalysisStock from "../../../../../application/selectors/analysisstock";

const TableLaporanAnalysisStock = () => {
  const dataAnalysisStock = useSelector(AnalysisStock.getAllAnalysisStock);

  const columns = [
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
      title: "Kirim",
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
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
    {
      title: "%",
      dataIndex: "persen",
      key: "persen",
      align: "center",
      render: (text) => {
        return text + " %";
      },
    },
  ];

  return (
    <Table
      dataSource={dataAnalysisStock}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanAnalysisStock;
