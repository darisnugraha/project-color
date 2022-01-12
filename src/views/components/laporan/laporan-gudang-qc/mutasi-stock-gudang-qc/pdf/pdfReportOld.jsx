import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("mutasi_stock_gudang_qc") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [400, 300]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan MUTASI STOCK OUTSTAND GUDANG QC`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "MUTASI STOCK OUTSTAND GUDANG QC",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO`,
      },
      {
        content: `TANGGAL`,
      },
      {
        content: `JAM`,
      },
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `KODE BARANG`,
      },
      {
        content: `FOTO`,
      },
      {
        content: `NAMA BARANG`,
      },
      {
        content: `BAHAN`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `BERAT RUSAK`,
      },
      {
        content: `BATU RUSAK`,
      },
      {
        content: `BATU SISA`,
      },
      {
        content: `BUBUK`,
      },
      {
        content: `SPRU`,
      },
      {
        content: `SPAREPART`,
      },
      {
        content: `KETERANGAN`,
      },
      {
        content: `NIJ 75`,
      },
      {
        content: `NIJ 70`,
      },
      {
        content: `NIM 75`,
      },
      {
        content: `DESIGN`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.no,
        styles: {
          halign: "center",
        },
      },
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
        content: element.foto,
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
        content: element.bahan,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.jumlah,
      },
      {
        content: element.berat,
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
        content: element.bubuk,
      },
      {
        content: element.spru,
      },
      {
        content: element.sparepart,
      },
      {
        content: element.keterangan,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.nij75,
      },
      {
        content: element.nij70,
      },
      {
        content: element.nim75,
      },
      {
        content: element.design,
        styles: {
          halign: "center",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Total : ",
      colSpan: 8,
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
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
      content: data
        .reduce((a, b) => a + parseFloat(b.batu_rusak), 0)
        .toFixed(3),
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
      content: data.reduce((a, b) => a + parseFloat(b.bubuk), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.spru), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.sparepart), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: "",
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.nij75), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.nij70), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.nim75), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 12,
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
    <title>MUTASI STOCK OUTSTAND GUDANG QC</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
