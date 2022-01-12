import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("job_processing") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [450, 310]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan JOB PROCESSING (${data_head.type})`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: `JOB PROCESSING (${data_head.type})`,
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO`,
        rowSpan: 3,
      },
      {
        content: `NO PO`,
        rowSpan: 3,
      },
      {
        content: `TANGGAL`,
        rowSpan: 3,
      },
      {
        content: `DELIVERY`,
        rowSpan: 3,
      },
      {
        content: `FIN`,
        rowSpan: 3,
      },
      {
        content: `QTY`,
        rowSpan: 3,
      },
      {
        content: `BERAT`,
        rowSpan: 3,
      },
      {
        content: `PROCESSING`,
        colSpan: 20,
      },
      {
        content: `TOTAL`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `MASTER`,
        colSpan: 2,
      },
      {
        content: `MOLDING`,
        colSpan: 2,
      },
      {
        content: `WAX & WAX SETTING`,
        colSpan: 2,
      },
      {
        content: `CASTING`,
        colSpan: 2,
      },
      {
        content: `ADM`,
        colSpan: 2,
      },
      {
        content: `FILLING`,
        colSpan: 2,
      },
      {
        content: `HAND SETT`,
        colSpan: 2,
      },
      {
        content: `POLISHING`,
        colSpan: 2,
      },
      {
        content: `PLATTING`,
        colSpan: 2,
      },
      {
        content: `ADMIN (BARANG) => KELUAR`,
        colSpan: 2,
      },
      {
        content: `PROCESSING`,
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

  data.forEach((element) => {
    const row = [
      {
        content: element.no,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.no_po_marketing,
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
        content: element.delivery,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.fin,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.qty,
      },
      {
        content: parseFloat(element.berat).toFixed(3),
      },
      {
        content: element.jumlah_master,
      },
      {
        content: parseFloat(element.berat_master).toFixed(3),
      },
      {
        content: element.jumlah_molding,
      },
      {
        content: parseFloat(element.berat_molding).toFixed(3),
      },
      {
        content: element.jumlah_wax,
      },
      {
        content: parseFloat(element.berat_wax).toFixed(3),
      },
      {
        content: element.jumlah_casting,
      },
      {
        content: parseFloat(element.berat_casting).toFixed(3),
      },
      {
        content: element.jumlah_adm,
      },
      {
        content: parseFloat(element.berat_adm).toFixed(3),
      },
      {
        content: element.jumlah_filling,
      },
      {
        content: parseFloat(element.berat_filling).toFixed(3),
      },
      {
        content: element.jumlah_handsetting,
      },
      {
        content: parseFloat(element.berat_handsetting).toFixed(3),
      },
      {
        content: element.jumlah_polishing,
      },
      {
        content: parseFloat(element.berat_polishing).toFixed(3),
      },
      {
        content: element.jumlah_platting,
      },
      {
        content: parseFloat(element.berat_platting).toFixed(3),
      },
      {
        content: element.jumlah_admin,
      },
      {
        content: parseFloat(element.berat_admin).toFixed(3),
      },
      {
        content: element.jumlah_processing,
      },
      {
        content: parseFloat(element.berat_processing).toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "TOTAL",
      colSpan: 5,
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.qty), 0),
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
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_master), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_master), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_molding), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_molding), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_wax), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_wax), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_casting), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_casting), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_adm), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_adm), 0).toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_filling), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_filling), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_handsetting), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_handsetting), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_polishing), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_polishing), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_platting), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_platting), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_admin), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_admin), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_processing), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_processing), 0)
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
      fontSize: 7,
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

  let tableRowsTotal = [];
  let tableColumnTotal = [];

  tableColumnTotal = [
    [
      { content: "TOTAL ORDER", colSpan: 2 },
      { content: "PROCESSING", colSpan: 2 },
      { content: "KELUAR", colSpan: 2 },
      { content: "SALDO ORDER", colSpan: 2 },
      { content: "BARU ORDER", colSpan: 2 },
      { content: "TOTAL PROCESSING ORDER", colSpan: 2 },
    ],
    [
      { content: "QTY" },
      { content: "BERAT" },
      { content: "QTY" },
      { content: "BERAT" },
      { content: "QTY" },
      { content: "BERAT" },
      { content: "QTY" },
      { content: "BERAT" },
      { content: "QTY" },
      { content: "BERAT" },
      { content: "QTY" },
      { content: "BERAT" },
    ],
  ];
  let rowsTotal = [
    {
      content: data.reduce((a, b) => a + parseFloat(b.qty), 0),
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_processing), 0),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_processing), 0)
        .toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_admin), 0),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_admin), 0)
        .toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_processing), 0),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_processing), 0)
        .toFixed(3),
    },
    {
      content: "",
    },
    {
      content: "",
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_processing), 0),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_processing), 0)
        .toFixed(3),
    },
  ];
  tableRowsTotal.push(rowsTotal);

  doc.autoTable({
    head: tableColumnTotal,
    body: tableRowsTotal,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 7,
      halign: "center",
    },
    headStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 8,
      fillColor: "#E8E5E5",
      textColor: "#000",
      valign: "middle",
      halign: "center",
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 1,
  });
  tableRowsTotal = [];
  tableColumnTotal = [];
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
    <title>JOB PROCESSING (${data_head.type})</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
