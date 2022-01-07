import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiStockGudangQC from "../../../../../application/selectors/mutasistockgudangqc";

const TableLaporanMutasiStockGudangQC = () => {
  const dataMutasiStockGudangQC = useSelector(
    MutasiStockGudangQC.getAllMutasiStockGudangQC
  );
  const type = useSelector(MutasiStockGudangQC.getTypeMutasiStockGudangQC);

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
      title: "Bahan",
      dataIndex: "bahan",
      key: "bahan",
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
        {
          title: "Qty. Rusak",
          dataIndex: "jumlah_rusak",
          key: "jumlah_rusak",
          align: "center",
        },
        {
          title: "Brt. Rusak",
          dataIndex: "berat_rusak",
          key: "berat_rusak",
          align: "center",
        },
        {
          title: "Spru",
          dataIndex: "spru",
          key: "spru",
          align: "center",
        },
        {
          title: "Bubuk",
          dataIndex: "bubuk",
          key: "bubuk",
          align: "center",
        },
        {
          title: "Brt. Sisa",
          dataIndex: "berat_sisa",
          key: "berat_sisa",
          align: "center",
        },
        {
          title: "Batu Rusak",
          dataIndex: "batu_rusak",
          key: "batu_rusak",
          align: "center",
        },
        {
          title: "Batu Sisa",
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
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];

  const columnsDua = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
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
      title: "Foto",
      dataIndex: "foto",
      key: "foto",
      align: "center",
    },
    {
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
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
    {
      title: "Berat Rusak",
      dataIndex: "berat_rusak",
      key: "berat_rusak",
      align: "center",
    },
    {
      title: "Batu Rusak",
      dataIndex: "batu_rusak",
      key: "batu_rusak",
      align: "center",
    },
    {
      title: "Batu Sisa",
      dataIndex: "batu_sisa",
      key: "batu_sisa",
      align: "center",
    },
    {
      title: "Bubuk",
      dataIndex: "bubuk",
      key: "bubuk",
      align: "center",
    },
    {
      title: "Spru",
      dataIndex: "spru",
      key: "spru",
      align: "center",
    },
    {
      title: "Sparepart",
      dataIndex: "sparepart",
      key: "sparepart",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "NIJ 75",
      dataIndex: "nij75",
      key: "nij75",
      align: "center",
    },
    {
      title: "NIJ 70",
      dataIndex: "nij70",
      key: "nij70",
      align: "center",
    },
    {
      title: "NIM 75",
      dataIndex: "nim75",
      key: "nim75",
      align: "center",
    },
    {
      title: "Design",
      dataIndex: "design",
      key: "design",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataMutasiStockGudangQC}
      columns={type === "SALDO" || type === "HISTORY" ? columns : columnsDua}
      scroll={{ x: 2300, y: 1000 }}
    />
  );
};

export default TableLaporanMutasiStockGudangQC;
