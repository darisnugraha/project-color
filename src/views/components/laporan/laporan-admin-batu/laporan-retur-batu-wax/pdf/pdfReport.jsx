import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("retur_batu_wax") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan RETUR BATU WAX`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "RETUR BATU WAX",
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
        content: `KODE BARANG`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `KODE BATU`,
      },
      {
        content: `UKURAN BATU`,
      },
      {
        content: `JUMLAH RETUR`,
      },
      {
        content: `BERAT RETUR`,
      },
      {
        content: `STATUS`,
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

  const dataGroup = groupBy(data, "no_retur");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    let jmlterima = 0;
    let brtterima = 0;

    const rowKirim = [
      {
        content: "NO : " + element[0].no_retur,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 9,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      jmlterima = jmlterima + parseFloat(item.jumlah_batu);
      brtterima = brtterima + parseFloat(item.berat_batu);

      const row = [
        {
          content: item.tanggal,
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
          content: item.jenis_bahan,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.kode_batu,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.ukuran_batu,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.jumlah_retur,
        },
        {
          content: item.berat_retur,
        },
        {
          content: item.status,
          styles: {
            halign: "center",
          },
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
        colSpan: 7,
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

  let jmlterimaAll = 0;
  let brtterimaAll = 0;

  data.forEach((element) => {
    jmlterimaAll = jmlterimaAll + parseFloat(element.jumlah_batu);
    brtterimaAll = brtterimaAll + parseFloat(element.berat_batu);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 7,
      styles: {
        halign: "right",
      },
    },
    {
      content: jmlterimaAll,
      styles: {
        halign: "right",
      },
    },
    {
      content: brtterimaAll.toFixed(3),
      styles: {
        halign: "right",
      },
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 9,
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
    <title>RETUR BATU WAX</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
