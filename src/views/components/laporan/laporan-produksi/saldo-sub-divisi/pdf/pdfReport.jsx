import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  // let data_head =
  //   JSON.parse(localStorage.getItem("saldo_sub_divisi_head")) || [];
  // let tgl_dari_string = data_head.tgl_dari;
  // let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan SALDO SUB DIVISI`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "SALDO SUB DIVISI",
  });
  // doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `KODE BARANG`,
      },
      {
        content: `BAHAN`,
      },
      {
        content: `JENIS`,
      },
      {
        content: `JML TERIMA`,
      },
      {
        content: `BRT TERIMA`,
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

  const dataGroup = groupBy(data, "sub_divisi");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    let jmlterima = 0;
    let brtterima = 0;

    const rowKirim = [
      {
        content: "SUB DIVISI : " + element[0].sub_divisi,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 6,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      jmlterima = jmlterima + parseFloat(item.jumlah_terima);
      brtterima = brtterima + parseFloat(item.berat_terima);

      const row = [
        {
          content: item.no_job_order,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.kode_barang,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.bahan,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.jenis,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.jumlah_terima,
        },
        {
          content: item.berat_terima,
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
        colSpan: 4,
      },
      {
        content: jmlterima,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtterima.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
    ];
    tableRows.push(rowFoot);
  });

  let jmlterimaAll = 0;
  let brtterimaAll = 0;

  data.forEach((element) => {
    jmlterimaAll = jmlterimaAll + parseFloat(element.jumlah_terima);
    brtterimaAll = brtterimaAll + parseFloat(element.berat_terima);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 4,
    },
    {
      content: jmlterimaAll,
    },
    {
      content: brtterimaAll.toFixed(3),
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
    <title>SALDO SUB DIVISI</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
