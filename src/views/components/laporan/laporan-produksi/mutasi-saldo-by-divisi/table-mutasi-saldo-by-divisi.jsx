import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import MutasiSaldo from "../../../../../application/selectors/mutasisaldo";

const TabelMutasiSaldo = () => {
  const dataMutasiSaldo = useSelector(MutasiSaldo.getAllMutasiSaldo);
  const divisi = useSelector(MutasiSaldo.getDivisi);
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
        {
          title: "Sisa",
          dataIndex: "sisa_kirim",
          key: "sisa_kirim",
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
      title: "Spru",
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
        {
          title: "Sisa",
          dataIndex: "sisa_kirim",
          key: "sisa_kirim",
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
      ],
    },
    {
      title: "Spru",
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

  const columnsSix = [
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
        {
          title: "Sisa",
          dataIndex: "sisa_kirim",
          key: "sisa_kirim",
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

  const columnsSeven = [
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
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataMutasiSaldo}
      columns={
        divisi === "TUMBLING" ||
        divisi === "BOOM" ||
        divisi === "AMPLAS" ||
        divisi === "EPOXY" ||
        divisi === "LASER" ||
        divisi === "MARKING" ||
        divisi === "PLATTING"
          ? columnsOne
          : divisi === "FILLING"
          ? columnsTwo
          : divisi === "FR1" || divisi === "FR2" || divisi === "FR3"
          ? columnsThree
          : divisi === "FR EPOXY" ||
            divisi === "AMPLAS EPOXY" ||
            divisi === "KULIT KERAMIK"
          ? columnsFour
          : divisi === "POLISHING"
          ? columnsSix
          : divisi === "SAMPLE"
          ? columnsSeven
          : columnsFive
      }
      scroll={{ x: 2500, y: 1000 }}
    />
  );
};

export default TabelMutasiSaldo;
