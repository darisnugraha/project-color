import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("kirim_bahan_admin") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan KIRIM BAHAN ADMIN`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "KIRIM BAHAN ADMIN",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `NO POHON`,
      },
      {
        content: `BERAT BATANG LILIN`,
      },
      {
        content: `BERAT LILIN`,
      },
      {
        content: `BERAT BATU`,
      },
      {
        content: `BERAT KARET`,
      },
      {
        content: `BERAT KOTOR`,
      },
      {
        content: `BERAT EMAS`,
      },
      {
        content: `BERAT TIMBANG`,
      },
    ],
  ];

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data, "no_kirim");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    const rowKirim = [
      {
        content: "NO KIRIM : " + element[0].no_kirim,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 10,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      const row = [
        {
          content: item.tanggal_kirim,
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
          content: item.no_pohon,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.berat_batang_lilin,
        },
        {
          content: item.berat_lilin,
        },
        {
          content: item.berat_batu,
        },
        {
          content: item.berat_karet,
        },
        {
          content: item.berat_kotor,
        },
        {
          content: item.berat_emas,
        },
        {
          content: item.berat_timbang,
        },
      ];
      tableRows.push(row);
    });
    const rowFoot = [
      {
        content: "Sub Total :",
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
        colSpan: 3,
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_batang_lilin), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_lilin), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_karet), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_kotor), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_emas), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_timbang), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
    ];
    tableRows.push(rowFoot);
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
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_batang_lilin), 0)
        .toFixed(3),
      styles: {
        halign: "right",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_lilin), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_batu), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_karet), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_kotor), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_emas), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_timbang), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#dddddd",
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
    <title>KIRIM BAHAN ADMIN</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
