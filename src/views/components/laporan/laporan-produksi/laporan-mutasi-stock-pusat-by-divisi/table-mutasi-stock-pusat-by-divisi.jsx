import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiStockPusatByDivisi from "../../../../../application/selectors/mutasistockpusatbydivisi";

const TableLaporanMutasiStockPusatByDivisi = () => {
  const dataMutasiStockPusatByDivisi = useSelector(
    MutasiStockPusatByDivisi.getAllMutasiStockPusatByDivisi
  );
  const divisi = useSelector(
    MutasiStockPusatByDivisi.getDivisiMutasiStockPusatByDivisi
  );
  const type = useSelector(
    MutasiStockPusatByDivisi.getTypeMutasiStockPusatByDivisi
  );

  const columnsHandworking = [
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
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];
  const columnsTarikKawat = [
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
      title: "Bubuk",
      dataIndex: "bubuk",
      key: "bubuk",
      align: "center",
    },
    {
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];
  const columnsLebur = [
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
      title: "Susut",
      dataIndex: "susut",
      key: "susut",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];
  const columnsOutstand = [
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
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataMutasiStockPusatByDivisi}
      columns={
        type === "OUTSTANDING"
          ? columnsOutstand
          : divisi === "HAND WORKING"
          ? columnsHandworking
          : divisi === "TARIK KAWAT"
          ? columnsTarikKawat
          : columnsLebur
      }
      scroll={{ x: 1900, y: 1000 }}
    />
  );
};

export default TableLaporanMutasiStockPusatByDivisi;
