import React from "react";
import { useSelector } from 'react-redux';
import { Table } from "antd";
import "antd/dist/antd.css";
import KirimSaldoTahun from '../../../../application/selectors/kirimsaldotahun';
import ui from '../../../../application/selectors/ui';

const columns = [
  {
    title: "Bulan",
    dataIndex: "bulan",
    key: "bulan",
    fixed: "left",
  },
  {
    title: "Kerja Hari",
    dataIndex: "kerja_hari",
    key: "kerja_hari",
    fixed: "left",
  },
  {
    title: "Jenis",
    dataIndex: "jenis",
    key: "jenis",
    fixed: "left",
  },
  {
    title: "FR1",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr_selesai",
        key: "fr_selesai",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: "fr_saldo",
        key: "fr_saldo",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
    ],
  },
  {
    title: "FR2",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr2_selesai",
        key: "fr2_selesai",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: "fr2_saldo",
        key: "fr2_saldo",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
    ],
  },
  {
    title: "FR3",
    children: [
      {
        title: "Selesai",
        dataIndex: "fr3_selesai",
        key: "fr3_selesai",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: "fr3_saldo",
        key: "fr3_saldo",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
    ],
  },
  {
    title: "FR Total",
    children: [
      {
        title: "Selesai",
        dataIndex: null,
        key: "total_selesai",
        align: "center",
        render: (text) => {
          let total = 0;
          total = text.fr_selesai + text.fr2_selesai + text.fr3_selesai;
          return total === 0 ? 0 : total.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: null,
        key: "total_saldo",
        align: "center",
        render: (text) => {
          let total = 0;
          total = text.fr_saldo + text.fr2_saldo + text.fr3_saldo;
          return total === 0 ? 0 : total.toFixed(3);
        }
      },
    ],
  },
  {
    title: "Hand Stg 1",
    children: [
      {
        title: "Selesai",
        dataIndex: "handsetting1_selesai",
        key: "handsetting1_selesai",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: "handsetting1_saldo",
        key: "handsetting1_saldo",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
    ],
  },
  {
    title: "Hand Stg 2",
    children: [
      {
        title: "Selesai",
        dataIndex: "handsetting2_selesai",
        key: "handsetting2_selesai",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
      {
        title: "Saldo",
        dataIndex: "handsetting2_saldo",
        key: "handsetting2_saldo",
        align: "center",
        render: (text) => {
          return text === 0 ? 0 : text.toFixed(3);
        }
      },
    ],
  },
];

const TableLaporanKirimSaldoTahun = () => {
  const dataTableKirimSaldoTahun = useSelector(KirimSaldoTahun.getAllKirimsaldotahun);
  
  return (
    <Table dataSource={dataTableKirimSaldoTahun} columns={columns} scroll={{ x: 1500, y: 1000 }} />
  );
};

export default TableLaporanKirimSaldoTahun;
