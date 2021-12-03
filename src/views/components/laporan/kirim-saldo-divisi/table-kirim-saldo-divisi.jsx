import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import KirimSaldoDivisi from "../../../../application/selectors/kirimsaldodivisi";
import "antd/dist/antd.css";

const TableLaporanKirimSaldoDivisi = () => {

  const columns = [
    {
      title: "Laporan Produksi (BULAN)",
      children: [
        {
          title: "Tgl",
          dataIndex: "tanggal",
          key: "tanggal",
          align: "center",
          fixed: "left",
        },
        {
          title: "Kerja Hari",
          dataIndex: "kerja_hari",
          key: "kerja_hari",
          align: "center",
          fixed: "left",
        },
        {
          title: "Casting",
          dataIndex: "casting_selesai",
          key: "casting_selesai",
          align: "center",
          fixed: "left",
          render: (text) => {
            return text.toFixed(3);
          },
        },
        {
          title: "POTONG SPRU",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "potong_spru_selesai",
              key: "potong_spru_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "potong_spru_saldo",
              key: "potong_spru_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "FILLING",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "filling_selesai",
              key: "filling_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "filling_saldo",
              key: "filling_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "FR 1",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "fr_selesai",
              key: "fr_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "fr_saldo",
              key: "fr_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "FR 2",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "fr2_selesai",
              key: "fr2_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "fr2_saldo",
              key: "fr2_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "FR 3",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "fr3_selesai",
              key: "fr3_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "fr3_saldo",
              key: "fr3_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "FR TOTAL",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "frTotal_selesai",
              key: "frTotal_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "frTotal_saldo",
              key: "frTotal_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "HAND STG",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "handsetting1_selesai",
              key: "handsetting1_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "handsetting1_saldo",
              key: "handsetting1_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "POLISHING",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "polishing_selesai",
              key: "polishing_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "polishing_saldo",
              key: "polishing_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "PLATTING",
          align: "center",
          children: [
            {
              title: "Selesai",
              dataIndex: "platting_selesai",
              key: "platting_selesai",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
            {
              title: "Saldo",
              dataIndex: "platting_saldo",
              key: "platting_saldo",
              align: "center",
              render: (text) => {
                return text.toFixed(3);
              },
            },
          ],
        },
        {
          title: "TOTAL",
          align: "center",
          children: [
            {
              title: "Selesai",
              key: "total_selesai",
              align: "center",
              render: (text) => {
                let total_selesai = 0;
                total_selesai =
                  text.fr_selesai +
                  text.fr2_selesai +
                  text.fr3_selesai +
                  text.frTotal_selesai +
                  text.handsetting1_selesai +
                  text.handsetting2_selesai +
                  text.casting_selesai +
                  text.filling_selesai +
                  text.polishing_selesai +
                  text.platting_selesai;
                return total_selesai.toFixed(3);
              },
            },
            {
              title: "Saldo",
              key: "total_saldo",
              align: "center",
              render: (text) => {
                let total_saldo = 0;
                total_saldo =
                  text.fr_saldo +
                  text.fr2_saldo +
                  text.fr3_saldo +
                  text.frTotal_saldo +
                  text.handsetting1_saldo +
                  text.handsetting2_saldo +
                  text.casting_saldo +
                  text.filling_saldo +
                  text.polishing_saldo +
                  text.platting_saldo;
                return total_saldo.toFixed(3);
              },
            },
          ],
        },
      ],
    },
  ];
  
  const dataTabaleKirimSaldoDivisi = useSelector(
    KirimSaldoDivisi.getAllKirimsaldodivisi
  );
  
  return (
    <Table
      size="small"
      dataSource={dataTabaleKirimSaldoDivisi}
      columns={columns}
      scroll={{ x: 2000, y: 1000 }}
    />
  );
};

export default TableLaporanKirimSaldoDivisi;
