import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import InputDraftPO from "../../../../../application/selectors/inputdraftpo";

const TableLaporanInputDraftPO = () => {
  const dataInputDraftPO = useSelector(InputDraftPO.getAllInputDraftPO);
  const type = useSelector(InputDraftPO.getTypeInputDraftPO);

  const columns = [
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
    },
    {
      title: "Tanggal Order",
      dataIndex: "tanggal_order",
      key: "tanggal_order",
      align: "center",
    },
    {
      title: "Tanggal Deadline",
      dataIndex: "tanggal_deadline",
      key: "tanggal_deadline",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Kode Batu",
      dataIndex: "kode_batu",
      key: "kode_batu",
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
      title: "Berat / pcs",
      dataIndex: "berat_pcs",
      key: "berat_pcs",
      align: "center",
    },
    {
      title: "AWH 75",
      dataIndex: "awh75",
      key: "awh75",
      align: "center",
    },
    {
      title: "AYL 75",
      dataIndex: "ayl75",
      key: "ayl75",
      align: "center",
    },
    {
      title: "AYL 70",
      dataIndex: "ayl70",
      key: "ayl70",
      align: "center",
    },
    {
      title: "AWH 375",
      dataIndex: "awh375",
      key: "awh375",
      align: "center",
    },
    {
      title: "AYL 375",
      dataIndex: "ayl375",
      key: "ayl375",
      align: "center",
    },
    {
      title: "Alloy",
      dataIndex: "alloy",
      key: "alloy",
      align: "center",
    },
    {
      title: "Total Berat",
      dataIndex: "total_berat",
      key: "total_berat",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "Pembagian",
      dataIndex: "pembagian",
      key: "pembagian",
      align: "center",
    },
    {
      title: "Ring Size",
      dataIndex: "ring_size",
      key: "ring_size",
      align: "center",
    },
    {
      title: "CLR",
      dataIndex: "clr",
      key: "clr",
      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "%",
      dataIndex: "persen",
      key: "persen",
      align: "center",
    },
  ];

  const columnsPerak = [
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
    },
    {
      title: "Tanggal Order",
      dataIndex: "tanggal_order",
      key: "tanggal_order",
      align: "center",
    },
    {
      title: "Tanggal Deadline",
      dataIndex: "tanggal_deadline",
      key: "tanggal_deadline",
      align: "center",
    },
    {
      title: "No Job Order",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
    },
    {
      title: "Nama Barang",
      dataIndex: "nama_barang",
      key: "nama_barang",
      align: "center",
    },
    {
      title: "Berat / pcs",
      dataIndex: "berat_pcs",
      key: "berat_pcs",
      align: "center",
    },
    {
      title: "Perak",
      dataIndex: "perak",
      key: "perak",
      align: "center",
    },
    {
      title: "Total Berat",
      dataIndex: "total_berat",
      key: "total_berat",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "Ring Size",
      dataIndex: "clr",
      key: "ring_size",
      align: "center",
    },
    {
      title: "CLR",
      dataIndex: "clr",
      key: "clr",
      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "Total Berat Batu",
      dataIndex: "total_berat_batu",
      key: "total_berat_batu",
      align: "center",
    },
    {
      title: "%",
      dataIndex: "persen",
      key: "persen",
      align: "center",
    },
  ];

  const columnsE = [
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
    },
    {
      title: "Tanggal Order",
      dataIndex: "tanggal_order",
      key: "tanggal_order",
      align: "center",
    },
    {
      title: "Tanggal Deadline",
      dataIndex: "tanggal_deadline",
      key: "tanggal_deadline",
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
      title: "Berat / pcs",
      dataIndex: "berat_pcs",
      key: "berat_pcs",
      align: "center",
    },
    {
      title: "EAW 10",
      dataIndex: "eaw10",
      key: "eaw10",
      align: "center",
    },
    {
      title: "EAW 14",
      dataIndex: "eaw14",
      key: "eaw14",
      align: "center",
    },
    {
      title: "EAW 18",
      dataIndex: "eaw18",
      key: "eaw18",
      align: "center",
    },
    {
      title: "EAY 10",
      dataIndex: "eay10",
      key: "eay10",
      align: "center",
    },
    {
      title: "EAY 14",
      dataIndex: "eay14",
      key: "eay14",
      align: "center",
    },
    {
      title: "EAY 18",
      dataIndex: "eay18",
      key: "eay18",
      align: "center",
    },
    {
      title: "Total Berat",
      dataIndex: "total_berat",
      key: "total_berat",
      align: "center",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center",
    },
    {
      title: "Pembagian",
      dataIndex: "pembagian",
      key: "pembagian",
      align: "center",
    },
    {
      title: "Ring Size",
      dataIndex: "ring_size",
      key: "ring_size",
      align: "center",
    },
    {
      title: "CLR",
      dataIndex: "clr",
      key: "clr",
      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      align: "center",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "%",
      dataIndex: "persen",
      key: "persen",
      align: "center",
    },
  ];

  return (
    <Table
      dataSource={dataInputDraftPO}
      columns={
        type === "L" ? columns : type === "PERAK" ? columnsPerak : columnsE
      }
      scroll={{ x: 2700, y: 1000 }}
    />
  );
};

export default TableLaporanInputDraftPO;
