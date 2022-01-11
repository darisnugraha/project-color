import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import BatalJobOrder from "../../../../../application/selectors/bataljoborder";

const TableLaporanBatalJobOrder = () => {
  const dataBatalJobOrder = useSelector(BatalJobOrder.getAllBatalJobOrder);

  const columns = [
    {
      title: "No Batal Transaksi",
      dataIndex: "no_batal_po",
      key: "no_batal_po",
      align: "center",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
    },
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Divisi",
      dataIndex: "divisi",
      key: "divisi",
      align: "center",
    },
    {
      title: "Nama Barang",
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
      title: "Qty",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataBatalJobOrder}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanBatalJobOrder;
