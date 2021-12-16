import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan KIRIM BARANG", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "KIRIM BARANG",
  });
  doc.text(`PERIODE : `, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `NO KIRIM`,
      },
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `KODE BARANG`,
      },
      {
        content: `NAMA BARANG`,
      },
      {
        content: `BAHAN`,
      },
      {
        content: `DESIGN`,
      },
      {
        content: `TUJUAN DIVISI`,
      },
      {
        content: `JML KIRIM`,
      },
      {
        content: `BRT KIRIM`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.tgl_kirim,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.no_kirim,
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
        content: element.kode_jenis_bahan,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.design,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.tujuan_divisi,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.stock_out,
      },
      {
        content: element.berat_out,
      },
    ];
    tableRows.push(row);
  });

  let jmlkirimAll = 0;
  let brtkirimAll = 0;

  data.forEach((element) => {
    jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
    brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
  });
  const footer = [
    {
      content: "Grand Total :",
      colSpan: 8,
    },
    {
      content: jmlkirimAll.toFixed(3),
    },
    {
      content: brtkirimAll.toFixed(3),
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
  const string = doc.output("datauristring");
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>KIRIM BARANG</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
