import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import SaldoStockBatu from "../../../../../application/selectors/saldostockbatu";

const TableLaporanSaldoStockBatu = () => {
  const dataSaldoStockBatu = useSelector(SaldoStockBatu.getAllSaldoStockBatu);

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
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
      title: "Saldo Awal",
      key: "saldo_awal",
      align: "center",
      children: [
        {
          title: "Qty",
          dataIndex: "jumlah_saldo_awal",
          key: "jumlah_saldo_awal",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_saldo_awal",
          key: "berat_saldo_awal",
          align: "center",
        },
      ],
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
      title: "Ambil",
      key: "ambil",
      align: "center",
      children: [
        {
          title: "Qty",
          dataIndex: "jumlah_ambil",
          key: "jumlah_ambil",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_ambil",
          key: "berat_ambil",
          align: "center",
        },
      ],
    },
    {
      title: "Sisa",
      key: "sisa",
      align: "center",
      children: [
        {
          title: "Qty",
          dataIndex: "jumlah_sisa",
          key: "jumlah_sisa",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_sisa",
          key: "berat_sisa",
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
      title: "Saldo Akhir",
      key: "saldo_akhir",
      align: "center",
      children: [
        {
          title: "Qty",
          dataIndex: "jumlah_saldo_akhir",
          key: "jumlah_saldo_akhir",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat_saldo_akhir",
          key: "berat_saldo_akhir",
          align: "center",
        },
      ],
    },
  ];

  return (
    <Table
      dataSource={dataSaldoStockBatu}
      columns={columns}
      scroll={{ x: 1500, y: 1000 }}
    />
  );
};

export default TableLaporanSaldoStockBatu;
