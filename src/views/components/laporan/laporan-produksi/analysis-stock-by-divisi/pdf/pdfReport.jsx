import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("analysis_stock_by_divisi_head") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan ANALYSIS STOCK (${data_head.divisi})`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "ANALYSIS STOCK",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
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
        content: `KIRIM`,
        colSpan: 2,
      },
      {
        content: `SUSUT`,
        rowSpan: 2,
        styles: {
          textColor: "#FF0000",
        },
      },
      {
        content: `%`,
        rowSpan: 2,
        styles: {
          textColor: "#FF0000",
        },
      },
    ],
    [
      {
        content: "Qty",
      },
      {
        content: "Berat",
      },
      {
        content: "Qty",
      },
      {
        content: "Berat",
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.no_job_order,
      },
      {
        content: element.kode_barang,
      },
      {
        content: element.nama_barang,
      },
      {
        content: element.jenis_bahan,
      },
      {
        content: element.jumlah_terima,
        styles: {
          halign: "right",
        },
      },
      {
        content: parseFloat(element.berat_terima).toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.jumlah_kirim,
        styles: {
          halign: "right",
        },
      },
      {
        content: parseFloat(element.berat_kirim).toFixed(3),
        styles: {
          halign: "right",
        },
      },
      {
        content: element.susut,
        styles: {
          halign: "right",
          textColor: "#FF0000",
        },
      },
      {
        content: element.persen + " %",
        styles: {
          halign: "right",
          textColor: "#FF0000",
        },
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 4,
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
      content: data.reduce((a, b) => a + parseFloat(b.susut), 0).toFixed(3),
      styles: {
        halign: "right",
        textColor: "#FF0000",
      },
    },
    {
      content:
        data.reduce((a, b) => a + parseFloat(b.persen), 0).toFixed(3) + " %",
      styles: {
        halign: "right",
        textColor: "#FF0000",
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
      halign: "center",
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
    <title>ANALYSIS STOCK</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
