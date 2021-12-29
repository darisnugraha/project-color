import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head =
    JSON.parse(localStorage.getItem("mutasi_outstand_by_divisi_head")) || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan MUTASI OUTSTAND (${data_head.divisi})`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "MUTASI OUTSTAND",
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
        content: `JENIS BAHAN`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `BERAT TAMBAHAN`,
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

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data, "kode_jenis");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    const rowKirim = [
      {
        content: "Kode Jenis : " + element[0].kode_jenis,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 8,
      },
      {
        content: "",
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 8,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      const row = [
        {
          content: item.no,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.tanggal,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.jam,
          styles: {
            halign: "center",
          },
        },
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
          content: item.foto,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.nama_barang,
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
          content: item.qty,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.berat,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.berat_tambahan,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.keterangan,
        },
        {
          content: item.nij75,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.nij70,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.nim75,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.design,
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
        colSpan: 8,
      },
      {
        content: element.reduce((a, b) => a + parseFloat(b.qty), 0),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element
          .reduce((a, b) => a + parseFloat(b.berat_tambahan), 0)
          .toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: "",
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element.reduce((a, b) => a + parseFloat(b.nij75), 0),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element.reduce((a, b) => a + parseFloat(b.nij70), 0),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: element.reduce((a, b) => a + parseFloat(b.nim75), 0),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: "",
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
      colSpan: 8,
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
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_tambahan), 0)
        .toFixed(3),
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
      content: data.reduce((a, b) => a + parseFloat(b.nij75), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.nij70), 0),
      styles: {
        halign: "right",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.nim75), 0),
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
    <title>MUTASI OUTSTAND</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
