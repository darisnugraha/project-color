import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import SampleTerimaBahan from "../../../../../application/selectors/sampleterimabahan";

const TableLaporanSampleTerimaBahan = () => {
  const dataSampleTerimaBahan = useSelector(
    SampleTerimaBahan.getAllSampleTerimaBahan
  );

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal_terima",
      key: "tanggal_terima",
      align: "center",
    },
    {
      title: "No Terima",
      dataIndex: "no_terima",
      key: "no_terima",
      align: "center",
    },
    {
      title: "Kode Bahan",
      dataIndex: "kode_bahan",
      key: "kode_bahan",
      align: "center",
    },
    {
      title: "Asal Divisi",
      dataIndex: "asal_divisi",
      key: "asal_divisi",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
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
      dataSource={dataSampleTerimaBahan}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanSampleTerimaBahan;
