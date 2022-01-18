import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan Kirim dan Saldo per Tahun", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Saldo Bahan",
  });
  doc.text(`PERIODE : ${service.getLocal("kirim_saldo_tahun")?.date}`, 14, 25);

  tableColumn = [
    [
      {
        content: `BULAN`,
        rowSpan: 2,
      },
      {
        content: `KERJA HARI`,
        rowSpan: 2,
      },
      {
        content: `JENIS`,
        rowSpan: 2,
      },
      {
        content: `FR1`,
        colSpan: 2,
      },
      {
        content: `FR2`,
        colSpan: 2,
      },
      {
        content: `FR3`,
        colSpan: 2,
      },
      {
        content: `FR TOTAL`,
        colSpan: 2,
      },
      {
        content: `HAND STG`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `SELESAI`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `SELESAI`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `SELESAI`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `SELESAI`,
      },
      {
        content: `SALDO`,
      },
      {
        content: `SELESAI`,
      },
      {
        content: `SALDO`,
      },
    ],
  ];

  let totalFrSelesai = 0;
  let totalFrSaldo = 0;
  let totalFrTotalSelesai = 0;
  let totalFrTotalSaldo = 0;
  data.forEach((element) => {
    totalFrSelesai =
      element.fr_selesai + element.fr2_selesai + element.fr3_selesai;
    totalFrSaldo = element.fr_saldo + element.fr2_saldo + element.fr3_saldo;
    totalFrTotalSelesai += totalFrSelesai;
    totalFrTotalSaldo += totalFrSaldo;

    const row = [
      {
        content: element.bulan,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.kerja_hari,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.jenis,
        styles: {
          halign: "center",
        },
      },
      {
        content: element.fr_selesai === 0 ? 0 : element.fr_selesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.fr_saldo === 0 ? 0 : element.fr_saldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.fr2_selesai === 0 ? 0 : element.fr2_selesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.fr2_saldo === 0 ? 0 : element.fr2_saldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.fr3_selesai === 0 ? 0 : element.fr3_selesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.fr3_saldo === 0 ? 0 : element.fr3_saldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: totalFrSelesai === 0 ? 0 : totalFrSelesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: totalFrSaldo === 0 ? 0 : totalFrSaldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content:
          element.handsetting1_selesai === 0
            ? 0
            : element.handsetting1_selesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content:
          element.handsetting1_saldo === 0
            ? 0
            : element.handsetting1_saldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content:
          element.handsetting2_selesai === 0
            ? 0
            : element.handsetting2_selesai.toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content:
          element.handsetting2_saldo === 0
            ? 0
            : element.handsetting2_saldo.toFixed(3),
        styles: {
          halign: "right",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Total",
      colSpan: 3,
      styles: { halign: "center" },
    },
    {
      content: data.reduce((a, b) => a + b.fr_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.fr_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.fr2_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.fr2_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.fr3_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.fr3_saldo, 0).toFixed(3),
    },
    {
      content: totalFrTotalSelesai.toFixed(3),
    },
    {
      content: totalFrTotalSaldo.toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting1_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting1_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting2_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting2_saldo, 0).toFixed(3),
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
    <title>Kirim dan Saldo</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
