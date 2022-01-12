import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("kirim_saldo_divisi_head");
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;

  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan KIRIM DAN SALDO PER DIVISI", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Kirim dan Saldo per Divisi",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `LAPORAN PRODUKS (BULAN)`,
        colSpan: 23,
      },
    ],
    [
      { content: "Tgl", rowSpan: 2 },
      { content: "Kerja Hari", rowSpan: 2 },
      { content: "Casting", rowSpan: 2 },
      { content: "POTONG SPRU", colSpan: 2 },
      { content: "FILLING", colSpan: 2 },
      { content: "FR 1", colSpan: 2 },
      { content: "FR 2", colSpan: 2 },
      { content: "FR 3", colSpan: 2 },
      { content: "FR TOTAL", colSpan: 2 },
      { content: "HAND STG", colSpan: 2 },
      { content: "POLISHING", colSpan: 2 },
      { content: "PLATTING", colSpan: 2 },
      { content: "Total", colSpan: 2 },
    ],
    [
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
      { content: "Selesai" },
      { content: "Saldo" },
    ],
  ];

  let total_selesai = 0;
  let total_selesai_all = 0;
  let total_saldo = 0;
  let total_saldo_all = 0;
  data.forEach((element) => {
    total_selesai =
      element.fr_selesai +
      element.fr2_selesai +
      element.fr3_selesai +
      element.frTotal_selesai +
      element.handsetting1_selesai +
      element.handsetting2_selesai +
      element.casting_selesai +
      element.filling_selesai +
      element.polishing_selesai +
      element.platting_selesai;

    total_selesai_all +=
      element.fr_selesai +
      element.fr2_selesai +
      element.fr3_selesai +
      element.frTotal_selesai +
      element.handsetting1_selesai +
      element.handsetting2_selesai +
      element.casting_selesai +
      element.filling_selesai +
      element.polishing_selesai +
      element.platting_selesai;

    total_saldo =
      element.fr_saldo +
      element.fr2_saldo +
      element.fr3_saldo +
      element.frTotal_saldo +
      element.handsetting1_saldo +
      element.handsetting2_saldo +
      element.casting_saldo +
      element.filling_saldo +
      element.polishing_saldo +
      element.platting_saldo;

    total_saldo_all +=
      element.fr_saldo +
      element.fr2_saldo +
      element.fr3_saldo +
      element.frTotal_saldo +
      element.handsetting1_saldo +
      element.handsetting2_saldo +
      element.casting_saldo +
      element.filling_saldo +
      element.polishing_saldo +
      element.platting_saldo;

    const row = [
      {
        content: element.tanggal,
      },
      {
        content: element.kerja_hari,
      },
      {
        content: element.casting_selesai.toFixed(3),
      },
      {
        content: element.potong_spru_selesai.toFixed(3),
      },
      {
        content: element.potong_spru_saldo.toFixed(3),
      },
      {
        content: element.filling_selesai.toFixed(3),
      },
      {
        content: element.filling_saldo.toFixed(3),
      },
      {
        content: element.fr_selesai.toFixed(3),
      },
      {
        content: element.fr_saldo.toFixed(3),
      },
      {
        content: element.fr2_selesai.toFixed(3),
      },
      {
        content: element.fr2_saldo.toFixed(3),
      },
      {
        content: element.fr3_selesai.toFixed(3),
      },
      {
        content: element.fr3_saldo.toFixed(3),
      },
      {
        content: element.frTotal_selesai.toFixed(3),
      },
      {
        content: element.frTotal_saldo.toFixed(3),
      },
      {
        content: element.handsetting1_selesai.toFixed(3),
      },
      {
        content: element.handsetting1_saldo.toFixed(3),
      },
      {
        content: element.polishing_selesai.toFixed(3),
      },
      {
        content: element.polishing_saldo.toFixed(3),
      },
      {
        content: element.platting_selesai.toFixed(3),
      },
      {
        content: element.platting_saldo.toFixed(3),
      },
      {
        content: total_selesai.toFixed(3),
      },
      {
        content: total_saldo.toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Total",
      colSpan: 2,
    },
    {
      content: data.reduce((a, b) => a + b.casting_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.potong_spru_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.potong_spru_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.filling_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.filling_saldo, 0).toFixed(3),
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
      content: data.reduce((a, b) => a + b.frTotal_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.frTotal_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting1_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.handsetting1_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.polishing_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.polishing_saldo, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.platting_selesai, 0).toFixed(3),
    },
    {
      content: data.reduce((a, b) => a + b.platting_saldo, 0).toFixed(3),
    },
    {
      content: total_selesai_all.toFixed(3),
    },
    {
      content: total_saldo_all.toFixed(3),
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
      fontSize: 5,
      halign: "right",
    },
    headStyles: {
      fontSize: 5,
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
    <title>Kirim dan Saldo per Divisi</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
