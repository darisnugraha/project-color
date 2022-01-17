import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import ProsesProduksi from "../../../../../application/selectors/prosesproduksi";

const TableProsesProduksi = () => {
  const dataProsesProduksi = useSelector(ProsesProduksi.getAllProsesProduksi);
  const type = useSelector(ProsesProduksi.getTypeProsesProduksi);

  const columns = [
    {
      title: "Laporan Proses Produksi (REKAP)",
      key: "rekap",
      align: "center",
      children: [
        {
          title: "No PO",
          dataIndex: "no_po_marketing",
          key: "no_po_marketing",
          align: "center",
        },
        {
          title: "Qty",
          dataIndex: "qty",
          key: "qty",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat",
          key: "berat",
          align: "center",
        },
        {
          title: "Wax",
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
          title: "Admin",
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
        {
          title: "FR",
          key: "FR",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_fr",
              key: "jumlah_fr",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_fr",
              key: "berat_fr",
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
          title: "Tumbling",
          key: "tumbling",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_tumbling",
              key: "jumlah_tumbling",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_tumbling",
              key: "berat_tumbling",
              align: "center",
            },
          ],
        },
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
          title: "Hand Setting",
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
          title: "Epoxy",
          key: "epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_epoxy",
              key: "jumlah_epoxy",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_epoxy",
              key: "berat_epoxy",
              align: "center",
            },
          ],
        },
        {
          title: "Polishing",
          key: "polishing",
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
          key: "platting",
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
          title: "Setor Marketing",
          key: "setor_marketing",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_setor_marketing",
              key: "jumlah_setor_marketing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_setor_marketing",
              key: "berat_setor_marketing",
              align: "center",
            },
          ],
        },
        {
          title: "Saldo Produksi",
          key: "saldo_produksi",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_saldo_produksi",
              key: "jumlah_saldo_produksi",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_saldo_produksi",
              key: "berat_saldo_produksi",
              align: "center",
            },
          ],
        },
      ],
    },
  ];
  const columnsDetail = [
    {
      title: "Laporan Proses Produksi (DETAIL)",
      key: "rekap",
      align: "center",
      children: [
        {
          title: "No PO",
          dataIndex: "no_po_marketing",
          key: "no_po_marketing",
          align: "center",
        },
        {
          title: "Qty",
          dataIndex: "qty",
          key: "qty",
          align: "center",
        },
        {
          title: "Berat",
          dataIndex: "berat",
          key: "berat",
          align: "center",
        },
        {
          title: "Wax",
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
          title: "Admin",
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
          title: "FR",
          key: "FR",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_fr",
              key: "jumlah_fr",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_fr",
              key: "berat_fr",
              align: "center",
            },
          ],
        },
        {
          title: "Filling",
          key: "filling",
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
          title: "Tumbling",
          key: "tumbling",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_tumbling",
              key: "jumlah_tumbling",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_tumbling",
              key: "berat_tumbling",
              align: "center",
            },
          ],
        },
        {
          title: "EC",
          key: "ec",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_ec",
              key: "jumlah_ec",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_ec",
              key: "berat_ec",
              align: "center",
            },
          ],
        },
        {
          title: "Boom",
          key: "boom",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_boom",
              key: "jumlah_boom",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_boom",
              key: "berat_boom",
              align: "center",
            },
          ],
        },
        {
          title: "FR Epoxy",
          key: "fr_epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_fr_epoxy",
              key: "jumlah_fr_epoxy",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_fr_epoxy",
              key: "berat_fr_epoxy",
              align: "center",
            },
          ],
        },
        {
          title: "Amplas",
          key: "amplas",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_amplas",
              key: "jumlah_amplas",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_amplas",
              key: "berat_amplas",
              align: "center",
            },
          ],
        },
        {
          title: "Amplas Epoxy",
          key: "amplas_epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_amplas_epoxy",
              key: "jumlah_amplas_epoxy",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_amplas_epoxy",
              key: "berat_amplas_epoxy",
              align: "center",
            },
          ],
        },
        {
          title: "Epoxy",
          key: "epoxy",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_epoxy",
              key: "jumlah_epoxy",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_epoxy",
              key: "berat_epoxy",
              align: "center",
            },
          ],
        },
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
          title: "P. Spru",
          key: "spru",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_potong_spru",
              key: "jumlah_potong_spru",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_potong_spru",
              key: "berat_potong_spru",
              align: "center",
            },
          ],
        },
        {
          title: "Sample",
          key: "sample",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_sample",
              key: "jumlah_sample",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_sample",
              key: "berat_sample",
              align: "center",
            },
          ],
        },
        {
          title: "Polishing",
          key: "polishing",
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
          title: "Hand Setting",
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
          title: "Laser",
          key: "laser",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_laser",
              key: "jumlah_laser",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_laser",
              key: "berat_laser",
              align: "center",
            },
          ],
        },
        {
          title: "Marking",
          key: "marking",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_marking",
              key: "jumlah_marking",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_marking",
              key: "berat_marking",
              align: "center",
            },
          ],
        },
        {
          title: "Platting",
          key: "platting",
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
          title: "Gudang QC",
          key: "gudang_qc",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_gudang_qc",
              key: "jumlah_gudang_qc",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_gudang_qc",
              key: "berat_gudang_qc",
              align: "center",
            },
          ],
        },
        {
          title: "Setor Marketing",
          key: "setor_marketing",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_setor_marketing",
              key: "jumlah_setor_marketing",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_setor_marketing",
              key: "berat_setor_marketing",
              align: "center",
            },
          ],
        },
        {
          title: "Saldo Produksi",
          key: "saldo_produksi",
          align: "center",
          children: [
            {
              title: "Qty",
              dataIndex: "jumlah_saldo_produksi",
              key: "jumlah_saldo_produksi",
              align: "center",
            },
            {
              title: "Berat",
              dataIndex: "berat_saldo_produksi",
              key: "berat_saldo_produksi",
              align: "center",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Table
      dataSource={dataProsesProduksi}
      columns={type === "REKAP" ? columns : columnsDetail}
      scroll={{ x: 5000, y: 1000 }}
    />
  );
};

export default TableProsesProduksi;
