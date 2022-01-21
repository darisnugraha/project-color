import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReportTarikKawat = (data = "") => {
  let data_head = service.getLocal("mutasi_stock_pusat_divisi") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(
    `Laporan ${
      data_head.type === "SALDO" ? "MUTASI" : data_head.type
    } STOCK BY DIVISI (${data_head.divisi})`,
    14,
    15
  );
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: `Laporan ${
      data_head.type === "SALDO" ? "MUTASI" : data_head.type
    } STOCK BY DIVISI (${data_head.divisi})`,
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
        rowSpan: 2,
      },
      {
        content: `JAM`,
        rowSpan: 2,
      },
      {
        content: `NO JOB ORDER`,
        rowSpan: 2,
      },
      {
        content: `KODE BARANG`,
        rowSpan: 2,
      },
      {
        content: `NAMA BARANG`,
        rowSpan: 2,
      },
      {
        content: `JENIS BAHAN`,
        rowSpan: 2,
      },
      {
        content: `TERIMA`,
        colSpan: 2,
      },
      {
        content: `RUSAK`,
        colSpan: 2,
      },
      {
        content: `KIRIM`,
        colSpan: 2,
      },
      {
        content: `BUBUK`,
        rowSpan: 2,
      },
      {
        content: `SUSUT`,
        rowSpan: 2,
      },
      {
        content: `KETERANGAN`,
        rowSpan: 2,
      },
    ],
    [
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  data.forEach((item) => {
    const row = [
      {
        content: item.tanggal,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.jam,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.no_job_order,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.kode_barang,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.nama_barang,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.jenis_bahan,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.jumlah_terima,
      },
      {
        content: item.berat_terima,
      },
      {
        content: item.jumlah_rusak,
      },
      {
        content: item.berat_rusak,
      },
      {
        content: item.jumlah_kirim,
      },
      {
        content: item.berat_kirim,
      },
      {
        content: item.bubuk,
      },
      {
        content: item.susut,
      },
      {
        content: item.keterangan,
        styles: {
          halign: "center",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 6,
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_terima), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_rusak), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_rusak), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_kirim), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_kirim), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.bubuk), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.susut), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 15,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRows.push(printed);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      fontSize: 8,
      halign: "right",
    },
    headStyles: {
      fontSize: 8,
      fillColor: "#E8E5E5",
      textColor: "#000",
      valign: "middle",
      halign: "center",
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 1,
  });
  tableRows = [];
  tableColumn = [];
  finalY = doc.autoTableEndPosY() + 20;

  const pages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  for (let j = 1; j < pages + 1; j += 1) {
    const horizontalPos = pageWidth / 2;
    const verticalPos = pageHeight - 10;
    doc.setPage(j);
    doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
      align: "center",
    });
  }
  const string = doc.output("bloburl");
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>MUTASI STOCK BY DIVISI (${data_head.divisi})</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReportTarikKawat;
