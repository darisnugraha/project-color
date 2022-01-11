import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head = JSON.parse(localStorage.getItem("job_processing")) || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [510, 410]);
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
        content: `NO JOB`,
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
        content: element.no_job_order,
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
        content: element.berat,
      },
      {
        content: element.jumlah_master,
      },
      {
        content: element.berat_master,
      },
      {
        content: element.jumlah_molding,
      },
      {
        content: element.berat_molding,
      },
      {
        content: element.jumlah_wax,
      },
      {
        content: element.berat_wax,
      },
      {
        content: element.jumlah_casting,
      },
      {
        content: element.berat_casting,
      },
      {
        content: element.jumlah_adm,
      },
      {
        content: element.berat_adm,
      },
      {
        content: element.jumlah_filling,
      },
      {
        content: element.berat_filling,
      },
      {
        content: element.jumlah_handsetting,
      },
      {
        content: element.berat_handsetting,
      },
      {
        content: element.jumlah_polishing,
      },
      {
        content: element.berat_polishing,
      },
      {
        content: element.jumlah_platting,
      },
      {
        content: element.berat_platting,
      },
      {
        content: element.jumlah_admin,
      },
      {
        content: element.berat_admin,
      },
      {
        content: element.jumlah_processing,
      },
      {
        content: element.berat_processing,
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
