import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import KirimBahanAdmin from "../../../../../application/selectors/kirimbahanadmin";

const TableLaporanKirimBahanAdmin = () => {
  const dataKirimBahanAdmin = useSelector(
    KirimBahanAdmin.getAllKirimBahanAdmin
  );

  const columns = [
    {
      title: "No Kirim",
      dataIndex: "no_kirim",
      key: "no_kirim",
      align: "center",
    },
    {
      title: "Tanggal Kirim",
      dataIndex: "tanggal_kirim",
      key: "tanggal_kirim",
      align: "center",
    },
    {
      title: "Jenis Bahan",
      dataIndex: "jenis_bahan",
      key: "jenis_bahan",
      align: "center",
    },
    {
      title: "No Pohon",
      dataIndex: "no_pohon",
      key: "no_pohon",
      align: "center",
    },
    {
      title: "Berat Batang Lilin",
      dataIndex: "berat_batang_lilin",
      key: "berat_batang_lilin",
      align: "center",
    },
    {
      title: "Berat Lilin",
      dataIndex: "berat_lilin",
      key: "berat_lilin",
      align: "center",
    },
    {
      title: "Berat Batu",
      dataIndex: "berat_batu",
      key: "berat_batu",
      align: "center",
    },
    {
      title: "Berat Karet",
      dataIndex: "berat_karet",
      key: "berat_karet",
      align: "center",
    },
    {
      title: "Berat Kotor",
      dataIndex: "berat_kotor",
      key: "berat_kotor",
      align: "center",
    },
    {
      title: "Berat Emas",
      dataIndex: "berat_emas",
      key: "berat_emas",
      align: "center",
    },
    {
      title: "Berat Timbang",
      dataIndex: "berat_timbang",
      key: "berat_timbang",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataKirimBahanAdmin}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanKirimBahanAdmin;
