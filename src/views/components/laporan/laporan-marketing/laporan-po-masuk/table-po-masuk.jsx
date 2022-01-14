import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import POMasuk from "../../../../../application/selectors/pomasuk";

const TableLaporanPOMasuk = () => {
  const dataPOMasuk = useSelector(POMasuk.getAllPOMasuk);

  const columns = [
    {
      title: "Total Masuk PO",
      key: "masuk_po_total",
      align: "center",
      children: [
        {
          title: "Bulan",
          dataIndex: "bulan",
          key: "bulan",
          align: "center",
        },
        {
          title: "Pcs",
          dataIndex: "pcs",
          key: "pcs",
          align: "right",
        },
        {
          title: "Berat",
          dataIndex: "berat",
          key: "berat",
          align: "right",
        },
      ],
    },
  ];

  return (
    <Table
      dataSource={dataPOMasuk}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanPOMasuk;
