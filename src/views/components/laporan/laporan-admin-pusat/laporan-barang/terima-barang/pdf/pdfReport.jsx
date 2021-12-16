import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head = JSON.parse(localStorage.getItem("terima_barang_head"));
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan TERIMA BARANG", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "TERIMA BARANG",
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
        content: `NAMA BARANG`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `JML TERIMA`,
      },
      {
        content: `BRT TERIMA`,
      },
      {
        content: `JML RUSAK`,
      },
      {
        content: `BRT RUSAK`,
      },
      {
        content: `BRT SPRU`,
      },
      {
        content: `BUBUK`,
      },
      {
        content: `ASAL DIVISI`,
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

  const dataGroup = groupBy(data, "no_terima");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    let jmlterima = 0;
    let brtterima = 0;
    let jmlrusak = 0;
    let brtrusak = 0;
    let brtspru = 0;
    let bubuk = 0;

    const rowKirim = [
      {
        content: "No Terima : " + element[0].no_terima,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 13,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      jmlterima = jmlterima + parseFloat(item.stock_in);
      brtterima = brtterima + parseFloat(item.berat_in);
      jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
      brtrusak = brtrusak + parseFloat(item.berat_rusak);
      brtspru = brtspru + parseFloat(item.berat_spru);
      bubuk = bubuk + parseFloat(item.bubuk);

      const row = [
        {
          content: item.tgl_terima,
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
          content: item.nama_barang,
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
          content: item.stock_in,
        },
        {
          content: item.berat_in,
        },
        {
          content: item.stock_rusak,
        },
        {
          content: item.berat_rusak,
        },
        {
          content: item.berat_spru,
        },
        {
          content: item.bubuk,
        },
        {
          content: item.asal_divisi,
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
        colSpan: 5,
      },
      {
        content: jmlterima,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtterima,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: jmlrusak,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtrusak,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtspru,
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: bubuk,
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
  let jmlrusakAll = 0;
  let brtrusakAll = 0;
  let brtspruAll = 0;
  let bubukAll = 0;

  data.forEach((element) => {
    jmlterimaAll = jmlterimaAll + parseFloat(element.stock_in);
    brtterimaAll = brtterimaAll + parseFloat(element.berat_in);
    jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
    brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
    brtspruAll = brtspruAll + parseFloat(element.berat_spru);
    bubukAll = bubukAll + parseFloat(element.berat_spru);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 5,
    },
    {
      content: jmlterimaAll.toFixed(3),
    },
    {
      content: brtterimaAll.toFixed(3),
    },
    {
      content: jmlrusakAll.toFixed(3),
    },
    {
      content: brtrusakAll.toFixed(3),
    },
    {
      content: brtspruAll.toFixed(3),
    },
    {
      content: bubukAll.toFixed(3),
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
    <title>TERIMA BARANG</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
