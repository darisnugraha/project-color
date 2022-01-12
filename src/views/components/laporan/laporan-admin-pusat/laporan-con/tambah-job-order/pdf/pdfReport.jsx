import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("tambah_job_order_head");
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan TAMBAH JOB ORDER", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "TAMBAH JOB ORDER",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `NO KIRIM`,
      },
      {
        content: `KODE BARANG`,
      },
      {
        content: `BAHAN`,
      },
      {
        content: `JML TAMBAH`,
      },
      {
        content: `BRT TAMBAH`,
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

  const dataGroup = groupBy(data, "no_tambah");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    let jmltambah = 0;
    let brttambah = 0;

    const rowTambah = [
      {
        content: "No Tambah : " + element[0].no_tambah,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 7,
      },
    ];
    tableRows.push(rowTambah);
    element.forEach((item) => {
      jmltambah = jmltambah + parseFloat(item.stock);
      brttambah = brttambah + parseFloat(item.berat);

      const row = [
        {
          content: item.tgl_tambah,
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
          content: item.no_kirim,
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
          content: item.kode_jenis_bahan,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.stock,
        },
        {
          content: item.berat,
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
        colSpan: 5,
      },
      {
        content: jmltambah,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brttambah.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
    ];
    tableRows.push(rowFoot);
  });

  let jmltambahAll = 0;
  let brttambahAll = 0;

  data.forEach((element) => {
    jmltambahAll = jmltambahAll + parseFloat(element.stock);
    brttambahAll = brttambahAll + parseFloat(element.berat);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 5,
    },
    {
      content: jmltambahAll,
    },
    {
      content: brttambahAll.toFixed(3),
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
    <title>TAMBAH JOB ORDER</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
