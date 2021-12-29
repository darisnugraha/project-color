import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiHistory from "../../../../../application/selectors/mutasihistory";

const TableMutasiHistory = () => {
  const dataMutasiHistory = useSelector(MutasiHistory.getAllMutasiHistory);
  const divisi = useSelector(MutasiHistory.getDivisi);
  const columnsOne = [
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

  const columnsTwo = [
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
      title: "Berat Spru",
      dataIndex: "spru",
      key: "spru",
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

  const columnsThree = [
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

  const columnsFour = [
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
      title: "Batu",
      align: "center",
      children: [
        {
          title: "Rusak",
          dataIndex: "batu_rusak",
          key: "batu_rusak",
          align: "center",
        },
        {
          title: "Sisa",
          dataIndex: "batu_sisa",
          key: "batu_sisa",
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
        {
          title: "Sisa",
          dataIndex: "sisa_kirim",
          key: "sisa_kirim",
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

  const columnsFive = [
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

  return (
    <Table
      dataSource={dataMutasiHistory}
      columns={
        divisi === "TUMBLING" ||
        divisi === "BOOM" ||
        divisi === "POLISHING" ||
        divisi === "EPOXY" ||
        divisi === "LASER" ||
        divisi === "MARKING" ||
        divisi === "PLATTING" ||
        divisi === "EC" ||
        divisi === "KULIT KERAMIK" ||
        divisi === "AMPLAS"
          ? columnsOne
          : divisi === "FILLING" || divisi === "POTONG SPRU"
          ? columnsTwo
          : divisi === "FR EPOXY" ||
            divisi === "AMPLAS EPOXY" ||
            divisi === "SAMPLE"
          ? columnsThree
          : divisi === "MASTER" ||
            divisi === "HANDSETTING1" ||
            divisi === "HANDSETTING2" ||
            divisi === "HANDSETTING3"
          ? columnsFour
          : columnsFive
      }
      scroll={{ x: 2500, y: 1000 }}
    />
  );
};

export default TableMutasiHistory;
