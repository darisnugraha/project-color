import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("po_masuk") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("p", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan PO MASUK JENIS BARANG`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 170, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "PO MASUK JENIS BARANG",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data || [], "bulan");
  const dataGroupArr = Object.values(dataGroup);

  tableColumn = [
    [
      {
        content: `TOTAL MASUK PO`,
        colSpan: 3,
      },
    ],
    [
      {
        content: `BULAN`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.bulan,
        styles: {
          halign: "center",
        },
      },
      {
        content: parseFloat(element.pcs),
      },
      {
        content: parseFloat(element.berat).toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "GRAND TOTAL",
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.pcs), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
  ];
  tableRows.push(footer);

  const printedtotal = [
    {
      content: ``,
      colSpan: 3,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRows.push(printedtotal);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 8,
      halign: "right",
    },
    headStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
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

  //Table Jenis Barang
  let tableColumnJenisBahan = [];
  let tableRowsJenisBahan = [];

  tableColumnJenisBahan = [
    [
      {
        content: `PER JENIS BARANG`,
        colSpan: 17,
      },
    ],
    [
      {
        content: `MR`,
        colSpan: 3,
      },
      {
        content: `PR`,
        colSpan: 2,
      },
      {
        content: `BR`,
        colSpan: 2,
      },
      {
        content: `BG`,
        colSpan: 2,
      },
      {
        content: `NK`,
        colSpan: 2,
      },
      {
        content: `PD`,
        colSpan: 2,
      },
      {
        content: `ER`,
        colSpan: 2,
      },
      {
        content: `WR`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `PCS`,
        colSpan: 2,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  dataGroupArr.forEach((item) => {
    const rowbulanjenis = [
      {
        content: "BULAN : " + item[0].bulan,
        colSpan: 17,
        styles: {
          halign: "left",
          fillColor: "#bab5b5",
        },
      },
    ];
    tableRowsJenisBahan.push(rowbulanjenis);
    item.forEach((element) => {
      const rowcustomer = [
        {
          content: parseFloat(element.total_stock_mr),
          colSpan: 2,
        },
        {
          content: parseFloat(element.total_berat_mr).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_pr),
        },
        {
          content: parseFloat(element.total_berat_pr).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_br),
        },
        {
          content: parseFloat(element.total_berat_br).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_bg),
        },
        {
          content: parseFloat(element.total_berat_bg).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_nk),
        },
        {
          content: parseFloat(element.total_berat_nk).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_pd),
        },
        {
          content: parseFloat(element.total_berat_pd).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_er),
        },
        {
          content: parseFloat(element.total_berat_er).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_wr),
        },
        {
          content: parseFloat(element.total_berat_wr).toFixed(3),
        },
      ];
      tableRowsJenisBahan.push(rowcustomer);
    });
    const rowsubtotalcustomer = [
      {
        content: "SUB TOTAL",
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_mr), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_mr), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_pr), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_pr), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_br), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_br), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_bg), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_bg), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_nk), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_nk), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_pd), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_pd), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_er), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_er), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_wr), 0),
        styles: {
          fillColor: "#f2eded",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_wr), 0)
          .toFixed(3),
        styles: {
          fillColor: "#f2eded",
        },
      },
    ];
    tableRowsJenisBahan.push(rowsubtotalcustomer);
  });

  const footerjenis = [
    {
      content: "GRAND TOTAL",
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_mr), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_mr), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_pr), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_pr), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_br), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_br), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_bg), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_bg), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_nk), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_nk), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_pd), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_pd), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_er), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_er), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_wr), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_wr), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
  ];
  tableRowsJenisBahan.push(footerjenis);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 17,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRowsJenisBahan.push(printed);

  doc.autoTable({
    head: tableColumnJenisBahan,
    body: tableRowsJenisBahan,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 7,
      halign: "right",
    },
    headStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 7,
      fillColor: "#E8E5E5",
      textColor: "#000",
      valign: "middle",
      halign: "center",
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 1,
  });
  tableRowsJenisBahan = [];
  tableColumnJenisBahan = [];
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
    <title>PO MASUK JENIS BARANG</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
