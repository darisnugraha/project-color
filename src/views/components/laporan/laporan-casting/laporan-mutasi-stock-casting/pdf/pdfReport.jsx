import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("mutasi_stock_casting") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan MUTASI STOCK CASTING`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "MUTASI STOCK CASTING",
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
        content: `BATU`,
        colSpan: 2,
      },
      {
        content: `KIRIM`,
        colSpan: 3,
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
        content: `RUSAK`,
      },
      {
        content: `SISA`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `SISA`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.tanggal,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.jam,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.no_job_order,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.kode_barang,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.nama_barang,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.jenis_bahan,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.jumlah_terima,
      },
      {
        content: element.berat_terima,
      },
      {
        content: element.jumlah_rusak,
      },
      {
        content: element.berat_rusak,
      },
      {
        content: element.batu_rusak,
      },
      {
        content: element.batu_sisa,
      },
      {
        content: element.jumlah_kirim,
      },
      {
        content: element.berat_kirim,
      },
      {
        content: element.sisa_kirim,
      },
      {
        content: element.keterangan,
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
      content: data.reduce((a, b) => a + parseFloat(b.batu_rusak), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.batu_sisa), 0).toFixed(3),
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
      content: data
        .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 10,
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
    <title>MUTASI STOCK CASTING</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
