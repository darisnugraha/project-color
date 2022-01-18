import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("saldo_stock_batu") || [];

  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan SALDO STOCK BATU`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "SALDO STOCK BATU",
  });
  doc.text(`PERIODE : ${data_head.date}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
        rowSpan: 2,
      },
      {
        content: `KODE BATU`,
        rowSpan: 2,
      },
      {
        content: `UKURAN BATU`,
        rowSpan: 2,
      },
      {
        content: `SALDO AWAL`,
        colSpan: 2,
      },
      {
        content: `TERIMA`,
        colSpan: 2,
      },
      {
        content: `AMBIL`,
        colSpan: 2,
      },
      {
        content: `SISA`,
        colSpan: 2,
      },
      {
        content: `KIRIM`,
        colSpan: 2,
      },
      {
        content: `SALDO AKHIR`,
        colSpan: 2,
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
        content: item.kode_batu,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.ukuran_batu,
        styles: {
          halign: "center",
        },
      },
      {
        content: item.jumlah_saldo_awal,
      },
      {
        content: item.berat_saldo_awal,
      },
      {
        content: item.jumlah_terima,
      },
      {
        content: item.berat_terima,
      },
      {
        content: item.jumlah_ambil,
      },
      {
        content: item.berat_ambil,
      },
      {
        content: item.jumlah_sisa,
      },
      {
        content: item.berat_sisa,
      },
      {
        content: item.jumlah_kirim,
      },
      {
        content: item.berat_kirim,
      },
      {
        content: item.jumlah_saldo_akhir,
      },
      {
        content: item.berat_saldo_akhir,
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 3,
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_saldo_awal), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_saldo_awal), 0)
        .toFixed(3),
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
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_ambil), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_ambil), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_sisa), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_sisa), 0)
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
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_saldo_akhir), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_saldo_akhir), 0)
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
    <title>SALDO STOCK BATU</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
