import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import JobProcessing from "../../../../../application/selectors/jobprocessing";

const TableLaporanJobProcessing = () => {
  const dataJobProcessing = useSelector(JobProcessing.getAllJobProcessing);
  const type = useSelector(JobProcessing.getTypeJobProcessing);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Delivery",
      dataIndex: "delivery",
      key: "delivery",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "FIN",
      dataIndex: "fin",
      key: "fin",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Processing",
      key: "processing",
      align: "center",
      children: [
        {
          title: "Master",
          key: "master",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_master",
              key: "jumlah_master",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_master",
              key: "berat_master",
              align: "center",
            },
          ],
        },
        {
          title: "Molding",
          key: "molding",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_molding",
              key: "jumlah_molding",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_molding",
              key: "berat_molding",
              align: "center",
            },
          ],
        },
        {
          title: "Wax & Wax Setting",
          key: "wax",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_wax",
              key: "jumlah_wax",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_wax",
              key: "berat_wax",
              align: "center",
            },
          ],
        },
        {
          title: "Casting",
          key: "casting",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_casting",
              key: "jumlah_casting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_casting",
              key: "berat_casting",
              align: "center",
            },
          ],
        },
        {
          title: "ADM",
          key: "adm",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_adm",
              key: "jumlah_adm",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_adm",
              key: "berat_adm",
              align: "center",
            },
          ],
        },
        {
          title: "Filling",
          key: "fl",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_filling",
              key: "jumlah_filling",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_filling",
              key: "berat_filling",
              align: "center",
            },
          ],
        },
        {
          title: "Hand Sett",
          key: "handsett",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_handsetting",
              key: "jumlah_handsetting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_handsetting",
              key: "berat_handsetting",
              align: "center",
            },
          ],
        },
        {
          title: "Polishing",
          key: "master",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_polishing",
              key: "jumlah_polishing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_polishing",
              key: "berat_polishing",
              align: "center",
            },
          ],
        },
        {
          title: "Platting",
          key: "epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_platting",
              key: "jumlah_platting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_platting",
              key: "berat_platting",
              align: "center",
            },
          ],
        },
        {
          title: "ADMIN (Barang) => Keluar",
          key: "admin",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_admin",
              key: "jumlah_admin",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_admin",
              key: "berat_admin",
              align: "center",
            },
          ],
        },
      ],
    },
    {
      title: "Total",
      key: "total",
      align: "center",
      children: [
        {
          title: "Processing",
          key: "processing",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_processing",
              key: "jumlah_processing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_processing",
              key: "berat_processing",
              align: "center",
            },
          ],
        },
      ],
    },
  ];

  const columnsDetail = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "No PO",
      dataIndex: "no_po_marketing",
      key: "no_po_marketing",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "No Job",
      dataIndex: "no_job_order",
      key: "no_job_order",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Delivery",
      dataIndex: "delivery",
      key: "delivery",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "FIN",
      dataIndex: "fin",
      key: "fin",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Berat",
      dataIndex: "berat",
      key: "berat",
      align: "center",
      rowSpan: 3,
    },
    {
      title: "Processing",
      key: "processing",
      align: "center",
      children: [
        {
          title: "Master",
          key: "master",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_master",
              key: "jumlah_master",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_master",
              key: "berat_master",
              align: "center",
            },
          ],
        },
        {
          title: "Molding",
          key: "molding",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_molding",
              key: "jumlah_molding",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_molding",
              key: "berat_molding",
              align: "center",
            },
          ],
        },
        {
          title: "Wax & Wax Setting",
          key: "wax",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_wax",
              key: "jumlah_wax",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_wax",
              key: "berat_wax",
              align: "center",
            },
          ],
        },
        {
          title: "Casting",
          key: "casting",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_casting",
              key: "jumlah_casting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_casting",
              key: "berat_casting",
              align: "center",
            },
          ],
        },
        {
          title: "ADM",
          key: "adm",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_adm",
              key: "jumlah_adm",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_adm",
              key: "berat_adm",
              align: "center",
            },
          ],
        },
        {
          title: "Filling",
          key: "fl",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_filling",
              key: "jumlah_filling",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_filling",
              key: "berat_filling",
              align: "center",
            },
          ],
        },
        {
          title: "Hand Sett",
          key: "handsett",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_handsetting",
              key: "jumlah_handsetting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_handsetting",
              key: "berat_handsetting",
              align: "center",
            },
          ],
        },
        {
          title: "Polishing",
          key: "master",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_polishing",
              key: "jumlah_polishing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_polishing",
              key: "berat_polishing",
              align: "center",
            },
          ],
        },
        {
          title: "Platting",
          key: "epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_platting",
              key: "jumlah_platting",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_platting",
              key: "berat_platting",
              align: "center",
            },
          ],
        },
        {
          title: "ADMIN (Barang) => Keluar",
          key: "admin",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_admin",
              key: "jumlah_admin",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_admin",
              key: "berat_admin",
              align: "center",
            },
          ],
        },
      ],
    },
    {
      title: "Total",
      key: "total",
      align: "center",
      children: [
        {
          title: "Processing",
          key: "processing",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_processing",
              key: "jumlah_processing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_processing",
              key: "berat_processing",
              align: "center",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Table
      dataSource={dataJobProcessing}
      columns={type === "REKAP" ? columns : columnsDetail}
      scroll={{ x: 2700, y: 1000 }}
    />
  );
};

export default TableLaporanJobProcessing;
