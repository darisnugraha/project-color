import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimCasting from "../../../../../../application/selectors/kirimcasting";

const TabelLaporanKirimCasting = () => {
  const dataKirimCasting = useSelector(KirimCasting.getAllKirimCasting);
  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tgl_kirim",
      key: "tgl_kirim",
      align: "center",
    },
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Jenis",
      dataIndex: "jenis_saldo",
      key: "jenis_saldo",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "kode_jenis_bahan",
      key: "kode_jenis_bahan",
      align: "center",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
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
      dataSource={dataKirimCasting}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TabelLaporanKirimCasting;
