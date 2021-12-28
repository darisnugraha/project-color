import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head = JSON.parse(localStorage.getItem("terima_casting_head"));
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;

  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan TERIMA CASTING", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "TERIMA CASTING",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `NO TERIMA`,
      },
      {
        content: `KODE BAHAN`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `STOCK`,
      },
      {
        content: `BERAT`,
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

  const dataGroup = groupBy(data, "no_terima");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((item) => {
    const rowKirim = [
      {
        content: "No Terima : " + item[0].no_terima,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 6,
      },
    ];
    tableRows.push(rowKirim);
    item.forEach((element) => {
      const row = [
        {
          content: element.tgl_terima,
          styles: {
            halign: "center",
          },
        },
        {
          content: element.no_terima,
          styles: {
            halign: "center",
          },
        },
        {
          content: element.jenis_saldo,
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
          content: element.stock,
        },
        {
          content: element.berat,
        },
      ];
      tableRows.push(row);
    });
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 4,
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.stock), 0),
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
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
    <title>TERIMA CASTING</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
